import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';
import { QA } from '../models/qaModel.js';

// @ DESCRIPTION            =>  create qa document
// @ ENDPOINT               =>  /api/v1/qa[POST]
// @ ACCESS                 =>  'any'
const createQA = catchAsync(async (req, res, next) => {
  const data = {
    question: req.body.question,
    tour: req.body.tour,
  };

  console.log({ data });

  const qa = await QA.create(data);

  res.status(201).json({
    status: 'success',
    data: {
      qa,
    },
  });
});
// @ DESCRIPTION            =>  create qa document
// @ ENDPOINT               =>  /api/v1/qa/answer/:id[PATCH]
// @ ACCESS                 =>  'customer-care-officer'
const answerQA = catchAsync(async (req, res, next) => {
  const data = {
    answer: req.body.answer,
    status: true,
  };

  console.log({ data });

  const qa = await QA.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: 'success',
    data: {
      qa,
    },
  });
});

// @ DESCRIPTION            =>  get all qa documents realted to a single tour
// @ ENDPOINT               =>  /api/v1/qa/:tourID[GET]
// @ ACCESS                 =>  'any'
const getAllAnsweredQAofSingleTour = catchAsync(async (req, res, next) => {
  const qa = await QA.find({ tour: req.params.tourId, status: true });

  res.status(201).json({
    status: 'success',
    data: {
      qa,
    },
  });
});

// @ DESCRIPTION            =>  create qa document
// @ ENDPOINT               =>  /api/v1/qa/pending[GET]
// @ ACCESS                 =>  'any'
const getAllPendingQA = catchAsync(async (req, res, next) => {
  const qa = await QA.find({ status: false });

  res.status(201).json({
    status: 'success',
    data: {
      qa,
    },
  });
});
// @ DESCRIPTION            =>  getSingleQA doc
// @ ENDPOINT               =>  /api/v1/qa/:id[GET]
// @ ACCESS                 =>  'any'
const getSingleQA = catchAsync(async (req, res, next) => {
  const qa = await QA.findById(req.params.id);

  res.status(201).json({
    status: 'success',
    data: {
      qa,
    },
  });
});

export {
  createQA,
  getAllAnsweredQAofSingleTour,
  answerQA,
  getAllPendingQA,
  getSingleQA,
};
