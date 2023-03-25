import mongoose from 'mongoose';
import { stringify } from 'ts-jest';

const vehicleSchema = new mongoose.Schema({
  vehicle_No: {
    type: String,
    unique: true,
    required: true,
  },
  vehicle_type: {
    type: String,
  },
  seats: {
    type: Number,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  self_driving_price: {
    type: Number,
    required: true,
  },
  self_driving_extra_price: {
    type: Number,
    required: true,
  },
  with_dr_price: {
    type: Number,
    required: true,
  },
  with_dr_extra_price: {
    type: Number,
    required: true,
  },
  images_URL: {
    type: String,
  },
  rating_avarage: {
    type: Number,
  },
  AC_non_AC: {
    type: Boolean,
  },
  deposit: {
    type: Number,
  },
  vehicle_state: {
    type: Boolean,
  },
  description: {
    types: String,
  },
  fuel_type: {
    type: String,
  },
  initial_millage: {
    type: Number,
  },
  transmission: {
    type: String,
  },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
