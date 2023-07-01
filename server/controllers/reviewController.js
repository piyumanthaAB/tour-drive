import { Review } from '../models/reviewModel.js';
import APIFeatures from '../utils/APIFeatures.js';
import { User } from '../models/userModel.js';
import { Booking } from '../models/bookingModel.js';
import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';

const createReview = catchAsync(async (req, res, next) => {
  const data = {
    review: req.body.review,
    serviceRating: req.body.serviceRating,
    locationRating: req.body.locationRating,
    tour: req.body.tour,
    vehicle: req.body.vehicle,
    name: req.body.name,
    email: req.body.email,
    reviewType: req.body.reviewType,
    vehicleRating: req.body.vehicleRating,
    driverRating: req.body.driverRating,
  };

  console.log({ data });

  // need to check if current user has booked this tour?
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('No user found for this email', 404));
  }

  if (req.body.reviewType === 'tour') {
    const booking = await Booking.find({
      bookingType: 'tour',
      user: user._id,
      tour: req.body.tour,
    });
    console.log({ booking });

    if (booking.length === 0) {
      return next(
        new AppError('You have not booked this tour, cannot make review', 401)
      );
    }
  }

  const review = await Review.create(data);

  res.status(201).json({
    status: 'success',
    message: 'Review created successfully',
    data: {
      review,
    },
  });
});

const getAllReviews = catchAsync(async (req, res, next) => {
  //   const reviews = await Review.find();

  const features = new APIFeatures(Review.find(), req.query)
    .filter()
    .sort()
    .limiting()
    .paging();

  const reviews = await features.query;

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

export { createReview, getAllReviews };
