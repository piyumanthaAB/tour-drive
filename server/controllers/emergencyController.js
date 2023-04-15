import { Emergency } from '../models/emergencyModel.js';
import APIFeatures from '../utils/APIFeatures.js';
import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';

// @ DESCRIPTION            =>  get all emergency requests
// @ ENDPOINT               =>  api/v1/emergencies/ [GET]
// @ ACCESS                 =>  'customer_care'
const getAllEmergencyrequests = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Emergency.find(), req.query)
    .filter()
    .sort()
    .limiting()
    .paging();

  const requests = await features.query;

  res.status(200).json({
    status: 'success',
    results: requests.length,
    data: { requests },
  });
});

// @ DESCRIPTION            =>  get a single emergency request
// @ ENDPOINT               =>  api/v1/emergencies/:id [GET]
// @ ACCESS                 =>  'customer_care'
const getSingleEmergencyRequest = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const request = await Emergency.findById(id);

  if (!request) {
    return next(new AppError('No request found for this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    results: '',
    data: { request },
  });
});

// @ DESCRIPTION            =>  create an emergency request
// @ ENDPOINT               =>  api/v1/emergencies/ [POST]
// @ ACCESS                 =>  'customer_care'
const createEmergencyRequest = catchAsync(async (req, res, next) => {
  const data = {
    user: req.body?.user || req?.user?._id,
    message: req.body.message,
    coordinates: {
      lat: req.body.latitude,
      long: req.body.longtitude,
    },
  };

  //   console.log({ data });

  const request = await Emergency.create(data);

  res.status(201).json({
    status: 'success',
    message: 'emergency request created successfully',
    data: { request },
  });
});

// @ DESCRIPTION            =>  update emergency request as reviewing or solved
// @ ENDPOINT               =>  api/v1/emergencies/:id [PATCH]
// @ ACCESS                 =>  'customer_care'
const updateEmergencyRequest = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = {
    status: req.body.status,
    solvedBy: req.user._id,
  };

  const updatedRequest = await Emergency.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!updatedRequest) {
    return next(new AppError('No request found for this ID', 404));
  }

  res.status(201).json({
    status: 'success',
    message: 'Emergency request updated successfully',
    data: { updatedRequest },
  });
});

export {
  createEmergencyRequest,
  getAllEmergencyrequests,
  getSingleEmergencyRequest,
  updateEmergencyRequest,
};
