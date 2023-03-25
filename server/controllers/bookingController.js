import { Booking } from '../models/bookingModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import Stripe from 'stripe';

// @ DESCRIPTION            =>  deactive a single user account
// @ ENDPOINT               =>  api/v1/bookings/create-checkout-session [POST]
// @ ACCESS                 =>  'admin'
const createBooking = catchAsync(async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);

  const { bookingType, tourID, tourName, tourDesc, price, vehicle, user } =
    req.body;

  console.log({
    bookingType,
    tourID,
    tourName,
    tourDesc,
    price,
    vehicle,
    user,
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: tourName,
            description: tourDesc,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url:
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/client/my-tour-bookings`
        : `${req.protocol}://${req.get('host')}/client/my-tour-bookings`,
    cancel_url: `${req.protocol}://${req.get('host')}/tours`,
  });

  // need to create the bookin doc in bookingCollection
  const booking = await Booking.create({
    bookingType,
    tour: tourID,
    price,
    vehicle,
    user,
  });

  res.status(201).json({
    status: 'success',
    message: 'booking created success',
    data: {
      url: session.url,
    },
  });
});

// @ DESCRIPTION            =>  get currently loggedin users bookings
// @ ENDPOINT               =>  api/v1/bookings/my-bookings [GET]
// @ ACCESS                 =>  'user'
const getMyBookings = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user._id });

  res.status(200).json({
    status: 'success',
    records: bookings.length,
    data: {
      bookings,
    },
  });
});

export { createBooking, getMyBookings };
