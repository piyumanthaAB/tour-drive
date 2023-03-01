import express from "express";
import * as bookingController from './../controllers/bookingController.js';

const router = express.Router();

router.post('/create-checkout-session', bookingController.createBooking);

export {router as bookingRouter}

