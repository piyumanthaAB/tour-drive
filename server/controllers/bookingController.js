import { Booking } from '../models/bookingModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import Stripe from 'stripe';

// @ DESCRIPTION            =>  create a booking
// @ ENDPOINT               =>  api/v1/bookings/create-checkout-session [POST]
// @ ACCESS                 =>  'admin'
const createBooking = catchAsync(async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_KEY);

  const {
    bookingType,
    tourID,
    tourName,
    tourDesc,
    price,
    vehicle,
    user,
    vehicleName,
    from,
    to,
  } = req.body;

  console.log({
    bookingType,
    tourID,
    tourName,
    tourDesc,
    price,
    vehicle,
    user,
    vehicleName,
    from,
    to,
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: tourName || vehicleName,
            description: tourDesc || ' ',
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url:
      process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/client/${
            bookingType === 'tour' ? 'my-tour-bookings' : 'my-vehicle-bookings'
          }`
        : `${req.protocol}://${req.get('host')}/client/${
            bookingType === 'tour' ? 'my-tour-bookings' : 'my-vehicle-bookings'
          }`,
    cancel_url: `${req.protocol}://${req.get('host')}/tours`,
  });

  // need to create the bookin doc in bookingCollection
  const booking = await Booking.create({
    bookingType,
    tour: tourID,
    price,
    vehicle,
    user,
    duration: `${from} - ${to}`,
  });

  res.status(201).json({
    status: 'success',
    message: 'booking created success',
    data: {
      url: session.url,
      booking,
    },
  });
});

// @ DESCRIPTION            =>  get currently loggedin users vehicle bookings
// @ ENDPOINT               =>  api/v1/bookings/my-bookings/vehicles [GET]
// @ ACCESS                 =>  'user'
const getMyVehicleBookings = catchAsync(async (req, res, next) => {
  let bookings = await Booking.find({ user: req.user._id });

  bookings = bookings.filter((booking) => booking.bookingType === 'vehicle');

  res.status(200).json({
    status: 'success',
    records: bookings.length,
    data: {
      bookings,
    },
  });
});
// @ DESCRIPTION            =>  get currently loggedin users tour bookings
// @ ENDPOINT               =>  api/v1/bookings/my-bookings/tours [GET]
// @ ACCESS                 =>  'user'
const getMyTourBookings = catchAsync(async (req, res, next) => {
  let bookings = await Booking.find({ user: req.user._id });

  bookings = bookings.filter((booking) => booking.bookingType === 'tour');

  res.status(200).json({
    status: 'success',
    records: bookings.length,
    data: {
      bookings,
    },
  });
});

export { createBooking, getMyVehicleBookings, getMyTourBookings };
