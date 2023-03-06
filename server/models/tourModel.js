import mongoose from "mongoose";
import { stringify } from "ts-jest";

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  //   tour_cover: {
  //     type: String,
  //   },
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
  //   locations: {
  //     type: [String],
  //   },
  //   active: {
  //     type: Boolean,
  //   },
  //   description: {
  //     types: String,
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

const Tour = mongoose.model("tour", tourSchema);
export { Tour };
