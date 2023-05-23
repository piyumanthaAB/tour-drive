import express from 'express';
import * as bookingController from './../controllers/bookingController.js';
import * as authController from './../controllers/authController.js';
const router = express.Router();

// router.post('/webhook')
router.post('/create-checkout-session', bookingController.createBooking);

router.get('/bookings-count/:id', bookingController.getBookingCounts);

router.get(
  '/my-bookings/tours',
  authController.protect,
  authController.restrictTo('user'),
  bookingController.getMyTourBookings
);
router.get(
  '/my-bookings/vehicles',
  authController.protect,
  authController.restrictTo('user'),
  bookingController.getMyVehicleBookings
);

export { router as bookingRouter };
