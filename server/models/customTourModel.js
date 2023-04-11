import mongoose from "mongoose";
import { stringify } from "ts-jest";

const customTourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    // required: true,
  },
  category: {
    type: String,
  },
  // galleryImg: {
  //   type: [String],
  // },
  price: {
    type: Number,
    // required: true,
  },
  vehicle: {
    type: String,
  },
  duration: {
    type: String,
  },
  description: {
    type: String,
    required: ["true", "description must be included."],
  },
  highlights: {
    type: String,
  },
  // location: {
  //   type: [String],
  // },
  tourType: {
    type: String,
    // required: true,
  },
});

const CustomTour = mongoose.model("CustomTour", customTourSchema);
export default CustomTour;
