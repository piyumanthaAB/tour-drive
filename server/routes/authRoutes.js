import express from 'express';
import {
  resetPassword,
  forgotPassword,
  continueWithFacebook,
  continueWithGoogle,
  login,
  signUp,
  logout,
  getCUrrentUser,
} from './../controllers/authController.js';

const router = express.Router();

router.get('/get-current-user', getCUrrentUser);
router.post('/signup', signUp);
router.post('/login', login);
router.get('/logout', logout);
router.post('/google', continueWithGoogle);
router.post('/facebook', continueWithFacebook);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:resetToken', resetPassword);

export { router as authRouter };
