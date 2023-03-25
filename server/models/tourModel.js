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
  highlights: [String],
  excludes: [String],
  includes: [String],
  locations: [String],
  max_seats: {
    type: Number,
  },
  age_limit: {
    type: Number,
  },
  category: {
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
  //   start_date: {
  //     type: Date,
  //   },
  //   rating_average: {
  //     type: Number,
  //   },
});

const Tour = mongoose.model('Tour', tourSchema);
export default Tour;
