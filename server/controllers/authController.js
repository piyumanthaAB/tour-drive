import { AppError } from '../utils/AppError.js';
import { User } from './../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';

import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { Email } from './../utils/email.js';
import { promisify } from 'util';
import { log } from 'console';

// ============== MIDDLEWARE STACK START =================

// this middleware checks the request for JWT cookie and the whether the user exists before reaching it to the controller.
const protect = catchAsync(async (req, res, next) => {
  let token;

  // 1) check for the JWT token
  req.cookies?.jwt ? (token = req.cookies.jwt) : (token = null);

  if (!token) {
    return next(
      new AppError('You are not logged in !. Please login again', 401)
    );
  }

  //2) Verification Token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3) Check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError('The user who had this token is no longer available !', 401)
    );
  }

  req.user = currentUser;

  next();
});

// ============== MIDDLEWARE STACK END =================

// restrict users from accessing particular controllers
const restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles= ['admin','user']
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You don't have permission to perform this action !", 403)
      );
    }
    next();
  };
};

// sign the JWT token and add the id of the user document
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// create The Cookie to send JWT to the browser and send it with the response
const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true; // cookies are sent only via https

  res.cookie('jwt', token, cookieOptions);

  // remove password field from output
  user.password = undefined;

  res.status(statusCode).json({
    token,
    status: 'success',
    data: {
      user,
    },
  });
};

// ########################### controllers START ###############################

// @ DESCRIPTION            =>  sign up new users
// @ ENDPOINT               =>  api/v1/auth/signup [POST]
// @ ACCESS                 =>  'all'
const signUp = catchAsync(async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return next(
      new AppError('This email already exists. Try another one.', 400)
    );
  }

  if (!password || !passwordConfirm) {
    return next(new AppError('Must provide password and password confirm !'));
  }

  console.log('aaaaaaaaaaaa');

  const newUser = await User.create({ email, password, passwordConfirm });

  const URL = `${req.protocol}://${req.get('host')}/login`;

  try {
    await new Email(newUser, URL).sendWelcome();
  } catch (error) {
    throw error;
  }

  console.log('bbbbbbbbbbbb');

  createSendToken(newUser, 201, req, res);
});

// @ DESCRIPTION            =>  login to the system using email and password
// @ ENDPOINT               =>  api/v1/auth/login [POST]
// @ ACCESS                 =>  'all'
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Must provide email and password!', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new AppError('Account does not exists!', 404));
  }

  if (!user.password) {
    return next(
      new AppError(
        'This account is associated with Gmail account. Try continue with google',
        400
      )
    );
  }

  // check for the password match
  if (
    user?.password &&
    !(await user.correctPassword(password, user.password))
  ) {
    return next(new AppError('Invalid email or password', 401));
  }

  createSendToken(user, 200, req, res);
});

// @ DESCRIPTION            =>  access the system using client's google account
// @ ENDPOINT               =>  api/v1/auth/google [POST]
// @ ACCESS                 =>  'all'
const continueWithGoogle = catchAsync(async (req, res, next) => {
  const { googleAccessToken } = req.body;

  if (!googleAccessToken) {
    return next(new AppError('No token found! Try login again', 400));
  }

  const response = await axios({
    method: 'GET',
    url: `https://www.googleapis.com/oauth2/v3/userinfo`,
    headers: {
      Authorization: `Bearer ${googleAccessToken}`,
    },
  });

  const { name, email, picture } = response.data;

  let user = await User.findOne({ email });

  if (user) {
    // user already exists, so create and send token
    return createSendToken(user, 200, req, res);
  }

  user = await User.create({ email, name, photo: picture });

  createSendToken(user, 201, res, res);
});

// @ DESCRIPTION            =>  access the system using client's facebook account
// @ ENDPOINT               =>  api/v1/auth/facebook [POST]
// @ ACCESS                 =>  'all'
const continueWithFacebook = catchAsync(async (req, res, next) => {
  const { facebookAccessToken } = req.body;

  if (!facebookAccessToken) {
    return next(new AppError('no token, try login again', 400));
  }

  const response = await axios({
    method: 'GET',
    url: `https://graph.facebook.com/me`,
    params: {
      fields: ['id', 'email', 'first_name', 'picture'].join(','),
      access_token: facebookAccessToken,
    },
  });

  // console.log({ data: response.data });

  const { email } = response?.data;

  let user = await User.findOne({ email });

  if (user) {
    // user already exists, so create and send token
    return createSendToken(user, 200, req, res);
  }

  user = await User.create({ email });

  createSendToken(user, 201, res, res);
});

// @ DESCRIPTION            =>  if user forgot password, he will send a post request to this endpoint. a password resetToken will
// be sent to his email, from this controller
// @ ENDPOINT               =>  api/v1/auth/forgotPassword [POST]
// @ ACCESS                 =>  'all'
const forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError('Please provide an email!', 400));
  }

  //1)Get user based on POSTed email
  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError('There is no user with given email..', 404));
  }

  //2)Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  //3)Send it to users email

  try {
    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/reset-password/${resetToken}`;
    await new Email(user, resetUrl).sendPasswordReset();

    res.status(200).json({
      status: 'success',
      message: 'reset token has sent',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'Something went wrong while trying to send the email. Please try again later !'
      ),
      500
    );
  }
});

// @ DESCRIPTION            =>  user will submit his new password with passwordreset token. then his password will reset in this controller
// @ ENDPOINT               =>  api/v1/auth/resetPassword/:token [POST]
// @ ACCESS                 =>  'all'
const resetPassword = catchAsync(async (req, res, next) => {
  const { resetToken } = req.params;
  const { password, passwordConfirm } = req.body;
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  user.password = password;
  user.passwordConfirm = passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  createSendToken(user, 200, req, res);
});

// @ DESCRIPTION            =>  a get request to this endpoint will delete the jwt cookie content and will expire it.
// @ ENDPOINT               =>  api/v1/auth/logout[GET]
// @ ACCESS                 =>  'all'
const logout = catchAsync(async (req, res, next) => {
  res.cookie('jwt', '', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
});

// current user load
const getCUrrentUser = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(new AppError('No logged in user found', 404));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  let currentUser = await User.findById(decoded.id);

  res.status(200).json({
    status: 'success',
    data: {
      currentUser,
    },
  });
});

// @ DESCRIPTION            =>  for logged in users to update their passwords
// @ ENDPOINT               =>  api/v1/auth/update-password[POST]
// @ ACCESS                 =>  'all logged in users'
const updateMyPassword = catchAsync(async (req, res, next) => {
  //1) GEt user from collection
  const user = await User.findById(req.user._id).select('+password');

  log({ user });

  //2) Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password)))
    return next(new AppError('Invalid password !', 401));

  //3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  // console.log(user);

  await user.save();

  //4) Log user in, send JWT
  createSendToken(user, 200, req, res);
});

// @ DESCRIPTION            =>  for currently loggedin user to update their profile
// @ ENDPOINT               =>  api/v1/auth/update-me [PATCH]
// @ ACCESS                 =>  'currently loggedin user'
const updateMe = catchAsync(async (req, res, next) => {
  const data = {
    email: req.body.email,
    name: req.body.name,
    mobile: req.body.mobile,
    country: req.body.country,
    passportID: req.body.passportID,
  };
  const updatedUser = await User.findByIdAndUpdate(req.user._id, data, {
    runValidators: true,
    new: true,
  });

  res.status(201).json({
    status: 'success',
    message: 'Profile updated successfully',
    data: {
      updatedUser,
    },
  });
});

const mobileForgotPassword = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const resetUrl = Math.floor(Math.random() * 10000);

  console.log({ resetUrl });

  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError('No user found for this email', 404));
  }

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { otp: resetUrl },
    { new: true, runValidators: true }
  );

  console.log({ updatedUser });

  try {
    await new Email(user, resetUrl).sendPasswordReset();

    res.status(200).json({
      status: 'success',
      message: 'OTp has sent',
    });
  } catch (err) {
    user.otp = undefined;

    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'Something went wrong while trying to send the email. Please try again later !'
      ),
      500
    );
  }

  // res.status(201).json({
  //   status: 'success',
  //   message: 'OTP has been sent to email',
  // });
});

const mobileResetPassword = catchAsync(async (req, res, next) => {
  const { password, passwordConfirm, otp, email } = req.body;

  console.log({ body: req.body });
  const user = await User.findOne({ email, otp });

  console.log({ user });

  if (!user) {
    return next(new AppError('no user found', 404));
  }

  user.password = password;
  user.passwordConfirm = passwordConfirm;
  user.otp = undefined;
  await user.save();

  createSendToken(user, 200, req, res);
});

// ########################### controllers END ###############################
export {
  mobileForgotPassword,
  mobileResetPassword,
  resetPassword,
  forgotPassword,
  continueWithFacebook,
  continueWithGoogle,
  login,
  signUp,
  protect,
  restrictTo,
  logout,
  getCUrrentUser,
  updateMyPassword,
  updateMe,
};
