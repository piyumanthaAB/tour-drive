import { Booking } from '../models/bookingModel.js';
import Vehicle from './../models/vehicleModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import Stripe from 'stripe';
import CustomTour from '../models/customTourModel.js';

// @ DESCRIPTION            =>  create a booking
// @ ENDPOINT               =>  /api/v1/bookings/create-checkout-session [POST]
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
    noOfSeats,
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
    success_url: `http://localhost:3000/client/home`,
    // success_url:
    //   process.env.NODE_ENV === 'development'
    //     ? `http://localhost:3000/client/${
    //         bookingType === 'tour' || 'custom-tour'
    //           ? 'my-tour-bookings'
    //           : bookingType === 'vehicle'
    //           ? 'my-vehicle-bookings'
    //           : ''
    //       }`
    //     : `${req.protocol}://${req.get('host')}/client/${
    //         bookingType === 'tour' ? 'my-tour-bookings' : 'my-vehicle-bookings'
    //       }`,
    cancel_url: `${req.protocol}://${req.get('host')}/tours`,
  });

  // need to create the bookin doc in bookingCollection
  const booking = await Booking.create({
    bookingType,
    tour: tourID,
    customTour: tourID,
    price,
    vehicle,
    user,
    duration: `${from} - ${to}`,
    noOfSeats,
  });

  if (bookingType === 'vehicle') {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(vehicle, {
      vehicle_state: 'rented',
    });
  }

  if (bookingType === 'custom-tour') {
    const updateCustomTour = await CustomTour.findByIdAndUpdate(
      tourID,
      { isPaid: true },
      { new: true, runValidators: true }
    );
  }

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

  bookings = bookings.filter(
    (booking) =>
      booking.bookingType === 'tour' || booking.bookingType === 'custom-tour'
  );

  res.status(200).json({
    status: 'success',
    records: bookings.length,
    data: {
      bookings,
    },
  });
});
// @ DESCRIPTION            =>  get currently loggedin users custom-tour bookings
// @ ENDPOINT               =>  api/v1/bookings/my-bookings/custom-tours [GET]
// @ ACCESS                 =>  'user'
const getMyCustomTourBookings = catchAsync(async (req, res, next) => {
  const customTours = await Booking.find({ user: req.user._id });

  res.status(200).json({
    status: 'success',
    results: '',
    data: {},
  });
});

// @ DESCRIPTION            =>  get total bookings of a given tour by tourId
// @ ENDPOINT               =>  api/v1/bookings/bookings-count/:id [GET]
// @ ACCESS                 =>  'user'
const getBookingCounts = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const bookings = await Booking.find({ tour: id });

  let bookedSeatsCount = 0;

  bookings.forEach((book) => {
    bookedSeatsCount += book.noOfSeats;
  });

  res.status(200).json({
    status: 'success',
    data: {
      bookingCount: bookedSeatsCount,
    },
  });
});

export {
  createBooking,
  getMyVehicleBookings,
  getMyTourBookings,
  getBookingCounts,
};
