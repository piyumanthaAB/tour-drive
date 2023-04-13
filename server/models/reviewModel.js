import mongoose from 'mongoose';
import validator from 'validator';
import Tour from './tourModel.js';

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A review user must have a name'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'A review must have an email'],
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
    review: {
      type: String,
      required: [true, 'A review must have a body!'],
    },
    locationRating: {
      type: Number,
      min: 1,
      max: 5,
    },
    serviceRating: {
      type: Number,
      min: 1,
      max: 5,
    },
    reviewType: {
      type: String,
      required: [true, 'A review must have a type. '],
      enum: {
        values: ['tour', 'vehicle'],
        message: 'reviewType values should be either <tour> or <vehicle> ',
      },
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      //   required: [true, 'A review must belong to a tour !'],
    },
    vehicle: {
      type: mongoose.Schema.ObjectId,
      ref: 'Vehicle',
      //   required: [true, 'A review must belong to a tour !'],
    },
    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'User',
    //   required: [true, 'A tour must belong to a user !'],
    // },
  },
  { timestamps: true }
);

reviewSchema.statics.calcAvgRatings = async function (tourId) {
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgLocationRating: { $avg: '$locationRating' },
        avgServiceRating: { $avg: '$serviceRating' },
      },
    },
  ]);

  console.log({ stats });
  await Tour.findByIdAndUpdate(tourId, {
    serviceRatingsAverage: stats[0].avgServiceRating,
    locationRatingsAverage: stats[0].avgLocationRating,
    ratingsQuantity: stats[0].nRating,
  });
};

reviewSchema.post('save', function () {
  this.constructor.calcAvgRatings(this.tour);
});

reviewSchema.pre(/^find/, function (next) {
  this.populate('tour').populate('vehicle');

  next();
});

const Review = mongoose.model('Review', reviewSchema);
export { Review };
