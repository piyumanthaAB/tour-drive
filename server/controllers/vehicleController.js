import Vehicle from '../models/vehicleModel.js';
import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';
import multer from 'multer';

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/public/vehicle-uploads');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `vehicle-${Date.now()}.${ext}`);
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

const uploadVehiclePhoto = upload.fields([
  { name: 'vehicle_cover', maxCount: 1 },
  { name: 'vehicle_gallery', maxCount: 3 },
]);
//  @desc        Get all vehicles
//  @route       GET /api/v1/vehicles
//  @access      Public
const getVehicles = catchAsync(async (req, res, next) => {
  const vehicles = await Vehicle.find({ vehicle_state: 'available' });

  res.status(200).json({ success: true, data: vehicles });
});

//  @desc        Get single vehicle
//  @route       GET /api/v1/vehicles/:id
//  @access      Public
const getVehicle = catchAsync(async (req, res, next) => {
  const vehicle = await Vehicle.findById(req.params.id);

  if (!vehicle) {
    return next(
      new AppError(`Vehicle not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: vehicle });
});

//  @desc       Add new vehicle
//  @route      POST /api/v1/vehicles/
//  @access     Private
const addVehicle = catchAsync(async (req, res, next) => {
  // console.log({
  //   cover: req.files.vehicle_cover,
  //   gallery: req.files.vehicle_gallery,
  // });

  const data = {
    vehicle_No: req.body.vehicleNo,
    vehicle_type: req.body.type,
    milage: req.body.milage,
    seats: req.body.seatsCount,
    brand: req.body.vehicleBrand,
    model: req.body.vehicleModel,
    images_URL: req.files.vehicle_gallery.map((img) => {
      return img.filename;
    }),
    cover_URL: req.files.vehicle_cover[0].filename,
    description: req.body.desc,
    features: req.body.features,
    transmission: req.body.transmission,
    fuel: req.body.fuel,
    price_per_day_with_dr: req.body.price_per_day_with_dr,
    price_per_day_without_dr: req.body.price_per_day_without_dr,
  };

  console.log({ data });

  const vehicle = await Vehicle.create(data);

  res.status(201).json({
    success: true,
    message: 'vehicle added successfully',
    data: vehicle,
  });
});

//  @desc       Update vehicle
//  @route      PUT /api/v1/vehicles/:id
//  @access     Private
const updateVehicle = catchAsync(async (req, res, next) => {
  const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!vehicle) {
    return next(
      new AppError(`Vehicle not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: vehicle });
});

//  @desc       Delete vehicle
//  @route      DELETE /api/v1/vehicles/:id
//  @access     Private
const deleteVehicle = catchAsync(async (req, res, next) => {
  const vehicle = await Vehicle.findByIdAndDelete(req.params.id);

  if (!vehicle) {
    return next(
      new AppError(`Vehicle not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});

export {
  getVehicle,
  getVehicles,
  updateVehicle,
  deleteVehicle,
  addVehicle,
  uploadVehiclePhoto,
};
