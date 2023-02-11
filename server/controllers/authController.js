const AppError = require('./../utils/AppError');
const catchAsync = require('./../utils/catchAsync');

const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const axios = require('axios')

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================

// sign the JWT token and add the id of the user document 
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

// create The Cookie to send JWT to the browser and send it with the response
const createSendToken = (user, statusCode,req, res) => {
    const token = signToken(user._id);
    
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIReS_IN * 24 * 60 * 60 * 1000),
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
            user
        }
    });
};

// ########################### controllers START ###############################

// @ DESCRIPTION            =>  sign up new users
// @ ENDPOINT               =>  api/v1/auth/signup [POST]
// @ ACCESS                 =>  'all'
exports.signUp = catchAsync(async (req, res, next) => {
    
    const { email, password, passwordConfirm } = req.body;

    const user = await User.findOne({ email});

    if (user) {
        return next(new AppError('This email already exists. Try another one.', 400));
    }

    if (!password || !passwordConfirm) {
        return next(new AppError('Must provide password and password confirm !'));
    }

    const newUser = await User.create({ email,password,passwordConfirm  });

    createSendToken(newUser, 201, req, res);


})


// @ DESCRIPTION            =>  login to the system using email and password
// @ ENDPOINT               =>  api/v1/auth/login [POST]
// @ ACCESS                 =>  'all'
exports.login = catchAsync(async (req, res, next) => {


    const { email, password } = req.body;

    if (!email || !password) {
        return next(new AppError('Must provide email and password!', 400));
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new AppError('Account does not exists!', 404));
    }

    // check for the password match
    if (!await user.correctPassword(password, user.password)) {

        return next(new AppError('Invalid email or password',401));
    }

    createSendToken(user, 200, req, res);
    
})

// @ DESCRIPTION            =>  access the system using client's google account 
// @ ENDPOINT               =>  api/v1/auth/google [POST]
// @ ACCESS                 =>  'all'
exports.continueWithGoogle = catchAsync(async (req, res, next) => {
    const { googleAccessToken } = req.body;

    if (!googleAccessToken) {
        return next(new AppError('No token found! Try login again',400))
    }

    const response = await axios({
        method: 'GET',
        url: `https://www.googleapis.com/oauth2/v3/userinfo`,
        headers: {
            "Authorization": `Bearer ${googleAccessToken}`
        }
    })

    const { name, email, picture } = response.data;

    let user = await User.findOne({ email });

    if (user) {
        // user already exists, so create and send token
        return createSendToken(user, 200, req, res);
    }

    user = await User.create({ email, name, photo: picture });
    
    createSendToken(user, 201, res, res);
})

// @ DESCRIPTION            =>  access the system using client's facebook account
// @ ENDPOINT               =>  api/v1/auth/facebook [POST]
// @ ACCESS                 =>  'all'
exports.continueWithFacebook = catchAsync(async (req, res, next) => {

    const { facebookAccessToken } = req.body;

    if (!facebookAccessToken) {
        return next(new AppError('no token, try login again',400))
    }

    const response = await axios({
        method: 'GET',
        url: `https://graph.facebook.com/me`,
        params: {
            fields: ['id', 'email', 'first_name', 'picture'].join(','),
            access_token: facebookAccessToken
          }
    });

    // console.log({ data: response.data });
    
    const { email } = response?.data;

    let user = await User.findOne({ email });

    if (user) {
        // user already exists, so create and send token
        return createSendToken(user, 200, req, res);
    }

    user = await User.create({email});


    createSendToken(user, 201, res, res);
    
})

// @ DESCRIPTION            =>  if user forgot password, he will send a post request to this endpoint. a password resetToken will
                                // be sent to his email, from this controller
// @ ENDPOINT               =>  api/v1/auth/forgot-password [POST]
// @ ACCESS                 =>  'all'
exports.forgotPassword = catchAsync(async (req, res, next) => {

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


})




// ########################### controllers END ###############################
