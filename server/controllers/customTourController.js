import CustomTour from '../models/customTourModel.js';
import APIFeatures from '../utils/APIFeatures.js';
import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';
import multer, { MulterError } from 'multer';

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/public/customTour-uploads');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `tour-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image!', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const uploadCustomTourPhoto = upload.fields([
  { name: 'galleryImg', maxCount: 3 },
]);

//@desc Get all custom tours request
//@route GET /api/v1/custom-tour
//@access Private
const getCustomTours = catchAsync(async (req, res, nex) => {
  const features = new APIFeatures(CustomTour.find(), req.query)
    .paging()
    .sort()
    .limiting();

  const customTours = await features.query;

  res.status(200).json({
    success: true,
    results: customTours.length,
    data: customTours,
  });
});

//@desc Get single tour
//@route GET /api/v1/custom-tour/:id
//@access Private
const getCustomTour = catchAsync(async (req, res, next) => {
  const customTour = await CustomTour.findById(req.params.id);

  if (!customTour) {
    return next(
      new AppError(`custom tour not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: customTour });
});

//@Desc Create new cutom tour
//@route POST /api/v1/custom-tours/
//@access Logged in users
const createCustomTour = catchAsync(async (req, res, next) => {
  const data = {
    name: req.body.name,
    customTour: req.body.customTour,
    endDate: req.body.endDate,
    startDate: req.body.startDate,
    vehicleType: req.body.vehicleType,
    vehicleTransmission: req.body.vehicleTransmission,
    vehicleFuel: req.body.vehicleFuel,
    passengerCount: req.body.passengerCount,
    totalDistance: req.body.totalDistance,
    estimatedVehicleCost: req.body.estimatedVehicleCost,
    estimatedAccomodationCost: req.body.estimatedAccomodationCost,
    estimatedTotalCost: req.body.estimatedTotalCost,
    duration: req.body.duration,
    user: req.body.user,
  };

  // console.log({ data });

  const customTour = await CustomTour.create(data);

  res.status(201).json({
    success: true,
    message: 'Custom Tour added successfully.',
    data: {
      customTour,
    },
  });
});

//@Desc  Update cutom tour
//@route PATCH /api/v1/custom-tour/:id
//@access Private
const updateCustomTour = catchAsync(async (req, res, next) => {
  console.log({ body: req.body });
  const { id } = req.params;
  const data = {
    adminPriceComment: req.body.adminPriceComment,
    adminLocationComment: req.body.adminLocationComment,
    adminVehicleComment: req.body.adminVehicleComment,
    adminOtherComment: req.body.adminOtherComment,
    status: req.body.status,
  };
  const updatedCustomTour = await CustomTour.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  console.log({ updateCustomTour });

  res.status(200).json({
    success: true,
    message: 'Custom Tour update successfully.',
    data: {
      updatedCustomTour,
    },
  });
});

//@desc Delete tour
//@route DELETE /api/v1/tours/:id
//@access Private
const deleteCustomTour = catchAsync(async (req, res, next) => {
  const customTour = await CustomTour.findByIdAndDelete(req.params.id);

  if (!customTour) {
    return next(
      new AppError(`Tour is not found with id of ${req.params.id}`, 404)
    );
  }
});

export {
  getCustomTour,
  getCustomTours,
  createCustomTour,
  deleteCustomTour,
  uploadCustomTourPhoto,
  updateCustomTour,
};
