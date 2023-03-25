import { Booking } from '../models/bookingModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import Stripe from 'stripe';

// @ DESCRIPTION            =>  deactive a single user account
// @ ENDPOINT               =>  api/v1/bookings/create-checkout-session [POST]
// @ ACCESS                 =>  'admin'
const createBooking = catchAsync(async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'tour-1',
            description: 'my sample tour',
          },
          unit_amount: 20 * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url:
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/tours`
        : `${req.protocol}://${req.get('host')}/tours`,
    cancel_url: `${req.protocol}://${req.get('host')}/tours`,
  });

  // need to create the bookin doc in bookingCollection

  res.status(201).json({
    status: 'success',
    message: 'booking created success',
    data: {
      url: session.url,
    },
  });
});

export { createBooking };
