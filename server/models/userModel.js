import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, 'A user must have a name']
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'A user must have an email'],
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
    id: {
      type: String,
      unique: true,
    },
    passport: {
      type: String,
      unique: true,
    },
    mobile: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      validate: {
        validator: function (val) {
          return this.password === val;
        },
        message: 'Passwords does not match !',
      },
      select: false,
    },
    photo: {
      type: String,
      default: 'http://blob_url_for_default_image',
    },
    role: {
      type: String,
      default: 'user',
      required: [true, 'A user must have a role'],
      enum: {
        values: ['admin', 'driver', 'user', 'tour_guide', 'customer_care'],
        message:
          "admin user ' title ' must be one of :< 'admin', 'driver', 'user' ,'customer_care > ",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    assignedToTour: {
      type: Boolean,
      default: false,
    },
    assignedToVehicle: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  // Only run this if password is modified
  if (!this.isModified('password')) return next();

  // hash the password with 12 salt rounds
  this.password = await bcrypt.hash(this.password, 12);

  //delete the password confirm
  this.passwordConfirm = undefined;
  next();
});

// this method is to check whether, the provided password is equal to the already saved password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// this method is to generate a random passwordResetToken for password reset purpose
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // console.log({ resetToken }, this.passwordResetToken);

  return resetToken;
};

const User = mongoose.model('User', userSchema);
export { User };
