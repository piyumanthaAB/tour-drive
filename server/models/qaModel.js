import mongoose from 'mongoose';

const qaSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Must have a question'],
    },
    answer: {
      type: String,
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Must have a tour'],
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

qaSchema.pre(/^find/, function (next) {
  this.populate('tour');

  next();
});

const QA = mongoose.model('QA', qaSchema);
export { QA };
