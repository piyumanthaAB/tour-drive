import { Review } from '../models/reviewModel.js';
import APIFeatures from '../utils/APIFeatures.js';
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
