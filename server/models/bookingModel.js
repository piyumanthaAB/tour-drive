import mongoose from 'mongoose';
import moment from 'moment';

const bookingSchema = new mongoose.Schema(
  {
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      // required: [true, 'A Booking must have a tour']
    },
    customTour: {
      type: mongoose.Schema.ObjectId,
      ref: 'CustomTour',
    },
    vehicle: {
      type: mongoose.Schema.ObjectId,
      ref: 'Vehicle',
      // required: [true, 'A Booking must have a vehicle']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A Booking must have a user'],
    },
    noOfSeats: {
      type: Number,
      // required: [true, 'Booking must have number of seats required'],
    },
    bookingType: {
      type: String,
      required: [true, 'A booking must have a type. '],
      enum: {
        values: ['tour', 'vehicle', 'custom-tour'],
        message:
          'bookingType values should be either <tour> or <vehicle> or <custom-tour> ',
      },
    },
    price: {
      type: Number,
      required: [true, 'A Booking must have a price'],
    },
    paid: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: String,
      default: '-',
    },
  },
  { timestamps: true }
);

// const currentMonth = moment().format('YYYY-MM');

// console.log({
//   gte: moment(currentMonth, 'YYYY-MM').toDate(),
//   lte: moment(currentMonth, 'YYYY-MM').endOf('month').toDate(),
// });

bookingSchema.pre(/^find/, function (next) {
  this.populate('user')
    .populate('tour')
    .populate('vehicle')
    .populate('customTour');

  next();
});

const Booking = mongoose.model('Booking', bookingSchema);
export { Booking };
