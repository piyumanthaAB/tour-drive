import express from 'express';
import * as bookingController from './../controllers/bookingController.js';
import * as authController from './../controllers/authController.js';
const router = express.Router();

router.post('/create-checkout-session', bookingController.createBooking);
router.get(
  '/my-bookings/:type',
  authController.protect,
  authController.restrictTo('user'),
  bookingController.getMyTourBookings
);

export { router as bookingRouter };
