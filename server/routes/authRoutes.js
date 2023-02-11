const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/google', authController.continueWithGoogle);
router.post('/facebook', authController.continueWithFacebook);

module.exports = router;