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
    required: true,
    enum: {
      values: ['car', 'van', 'bike', 'suv'],
      message: `category should be one of these: < 'car', 'van', 'bike', 'suv' >`,
    },
  },
  driver: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    // required: [true, 'A Booking must have a user'],
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
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  driverRatingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must above 1.0'],
    max: [5, 'Rating must below 5.0'],
    set: (val) => Math.round(val * 10) / 10,
  },
  vehicleRatingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must above 1.0'],
    max: [5, 'Rating must below 5.0'],
    set: (val) => Math.round(val * 10) / 10,
  },
  // self_driving_price: {
  //   type: Number,
  //   required: true,
  // },
  // self_driving_extra_price: {
  //   type: Number,
  //   required: true,
  // },
  // with_dr_price: {
  //   type: Number,
  //   required: true,
  // },
  // with_dr_extra_price: {
  //   type: Number,
  //   required: true,
  // },
  price_per_day_with_dr: {
    type: Number,
  },
  price_per_day_without_dr: {
    type: Number,
  },
  images_URL: [String],
  cover_URL: {
    type: String,
  },

  AC_non_AC: {
    type: Boolean,
  },
  deposit: {
    type: Number,
  },
  vehicle_state: {
    type: String,
    default: 'available',
    required: [true, 'A vehicle must have a state'],
    enum: {
      values: ['rented', 'available', 'maintenance'],
      message:
        "vehicle state values  must be one of :< 'rented', 'available', 'maintenance > ",
    },
  },
  fuel: {
    type: String,
  },
  description: {
    type: String,
    required: ['true', 'A Vehicle must have a description'],
  },
  features: {
    type: String,
    required: ['true', 'A Vehicle must have features'],
  },
  fuel_type: {
    type: String,
  },
  milage: {
    type: Number,
  },
  transmission: {
    type: String,
  },
});

vehicleSchema.pre(/^find/, function (next) {
  this.populate('driver');

  next();
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
