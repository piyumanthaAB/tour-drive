import mongoose from 'mongoose';
import Tour from './tourModel.js';
import Vehicle from './vehicleModel.js';
import { Booking } from './bookingModel.js';

const statSchema = new mongoose.Schema(
  {
    tourBookingsVScategories: {
      type: {
        category: {
          type: String,
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
      },
    },
  },
  { timestamps: true }
);

const Stats = mongoose.model('Stat', statSchema);
export { Stats };
