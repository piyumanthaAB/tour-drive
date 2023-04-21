import mongoose from 'mongoose';

const emergencySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'An emergency must have a user'],
    },
    solvedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      required: [true, 'An emergency must have a status. '],
      default: 'pending',
      enum: {
        values: ['pending', 'solved', 'reviewing'],
        message:
          "emergency status values should be either 'pending', 'solved', 'reviewing' ",
      },
    },
    message: {
      type: String,
    },
    coordinates: {
      lat: Number,
      long: Number,
    },
  },
  { timestamps: true }
);

emergencySchema.pre(/^find/, function (next) {
  this.populate('user').populate('solvedBy');

  next();
});

const Emergency = mongoose.model('Emergency', emergencySchema);
export { Emergency };
