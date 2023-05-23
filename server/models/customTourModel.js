import mongoose from 'mongoose';
import { stringify } from 'ts-jest';

const customTourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'custom tour must have a name'],
    },
    customTour: {
      type: [
        {
          city: String,
          locationOne: String,
          locationTwo: String,
          locationThree: String,
          locationFour: String,
          accomodation: String,
        },
      ],
      required: [true, 'custom tour must have a customtour'],
    },
    startDate: {
      type: String,
      required: [true, 'custom tour must have a start date'],
    },
    endDate: {
      type: String,
      required: [true, 'custom tour must have a end date'],
    },
    vehicleType: {
      type: String,
      required: [true, 'custom tour must have a vehicleType'],
    },
    vehicleTransmission: {
      type: String,
      required: [true, 'custom tour must have a vehicle transmission'],
    },
    vehicleFuel: {
      type: String,
      required: [true, 'custom tour must have a vehicle fuel type'],
    },

    passengerCount: {
      type: Number,
      required: [true, 'custom tour must have a passenger count'],
    },
    totalDistance: {
      type: Number,
      required: [true, 'custom tour must have a totla distance'],
    },
    estimatedVehicleCost: {
      type: Number,
      required: [true, 'custom tour must have an estimated  vehicle cost'],
    },
    estimatedAccomodationCost: {
      type: Number,
      required: [true, 'custom tour must have an estimated  accomodation cost'],
    },
    estimatedTotalCost: {
      type: Number,
      required: [true, 'custom tour must have an estimated total cost'],
    },
    finalCost: {
      type: Number,
      // required: true,
    },
    duration: {
      type: Number,
      required: [true, 'custom tour must have a duration'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A custom tour must have a user'],
    },
    status: {
      type: String,
      default: 'pending',
      required: [true, 'A custom tour must have a status'],
      enum: {
        values: ['pending', 'approved', 'rejected'],
        message:
          "custom tour status must be one of :< 'pending', 'approved', 'rejected' > ",
      },
    },
    adminPriceComment: {
      type: String,
    },
    adminLocationComment: {
      type: String,
    },
    adminVehicleComment: {
      type: String,
    },
    adminOtherComment: {
      type: String,
    },
  },
  { timestamps: true }
);

const CustomTour = mongoose.model('CustomTour', customTourSchema);
export default CustomTour;
