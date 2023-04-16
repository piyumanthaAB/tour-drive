import mongoose from 'mongoose';
import { stringify } from 'ts-jest';

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  tour_cover: {
    type: String,
  },
  tour_gallery: [String],
  highlights: {
    type: String,
  },
  excludes: {
    type: String,
  },
  includes: {
    type: String,
  },
  locations: [[Number]],
  tourPlan: [String],
  max_seats: {
    type: Number,
  },
  guide_1: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    // required: [true, 'A Booking must have a user'],
  },
  guide_2: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    // required: [true, 'A Booking must have a user'],
  },
  age_limit: {
    type: Number,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  locationRatingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must above 1.0'],
    max: [5, 'Rating must below 5.0'],
    set: (val) => Math.round(val * 10) / 10,
  },
  serviceRatingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must above 1.0'],
    max: [5, 'Rating must below 5.0'],
    set: (val) => Math.round(val * 10) / 10,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ['city', 'hiking', 'adventure', 'historical', 'cultural'],
      message: `category should be one of these: < 'city','hiking','adventure','historical','cultural' >`,
    },
  },
  cities: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
  },
  capacity: {
    type: String,
  },
  description: {
    type: String,
    required: ['true', 'A tour must have a description'],
  },
  //   locations: {
  //     type: [String],
  //   },
  //   active: {
  //     type: Boolean,
  //   },

  //   tour_guides: {
  //     type: [String],
  //   },
  //   type: {
  //     type: String,
  //   },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  //   rating_average: {
  //     type: Number,
  //   },
});

tourSchema.pre(/^find/, function (next) {
  this.populate('guide_2').populate('guide_1');

  next();
});

const Tour = mongoose.model('Tour', tourSchema);
export default Tour;
