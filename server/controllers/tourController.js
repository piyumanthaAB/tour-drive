import Tour from '../models/tourModel.js';
import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';
import multer from 'multer';

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/public/tour-uploads');
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

const uploadTourPhoto = upload.fields([
  { name: 'tour_cover', maxCount: 1 },
  { name: 'tour_gallery', maxCount: 3 },
]);

//  @desc       Get all tours
//  @route      GET /api/v1/tours
//  @access     Public
const getTours = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).json({ success: true, data: tours });
});

//  @desc       Get single tour
//  @route      GET /api/v1/tours/:id
//  @access     Public
const getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);

  if (!tour) {
    return next(
      new AppError(`Tour not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: tour });
});

//  @desc       Create new tour
//  @route      POST /api/v1/tours/
//  @access     Private
const createTour = catchAsync(async (req, res, next) => {
  // console.log({
  //   cover: req.files.tour_cover,
  //   gallery:req.files.tour_gallery
  // });

  const {
    name,
    price,
    ageLimit,
    capacity,
    description,
    duration,
    highlights,
    includes,
    excludes,
    locations,
    startDate,
    endDate,
  } = req.body;

  // const tour_cover = req.files.tour_cover[0].filename;
  // const tour_gallery = req.files.tour_gallery.map((img) => {
  //   return img.filename;
  // });

  const data = {
    name,
    price,
    age_limit: ageLimit,
    capacity,
    tour_cover: 'tour-1679110448345.jpeg',
    tour_gallery: [
      'tour-1679110448365.jpeg',
      'tour-1679110448351.jpeg',
      'tour-1679110448350.jpeg',
    ],
    description,
    duration,
    highlights: highlights.split('.'),
    includes: includes.split('.'),
    excludes: excludes.split('.'),
    locations: locations.split('\n'),
    start_date: startDate,
    end_date: endDate,
  };

  // console.log({ data });

  // let loc = data.locations;
  // loc = loc.map((loc) => {
  //   return loc.split(',');
  // });

  const tour = await Tour.create(data);

  console.log({ body: req.body });

  res.status(201).json({
    success: true,
    message: 'Tour added successfully !',
    data: {
      tour,
    },
  });
});

//  @desc       Update tour
//  @route      PATCH /api/v1/tours/:id
//  @access     Private
const updateTour = catchAsync(async (req, res, next) => {
  const {
    name,
    price,
    ageLimit,
    capacity,
    description,
    duration,
    highlights,
    includes,
    excludes,
    locations,
  } = req.body;

  const tour_cover = req.files?.tour_cover[0].filename;
  const tour_gallery = req.files?.tour_gallery.map((img) => {
    return img.filename;
  });

  const data = {
    name,
    price,
    age_limit: ageLimit,
    capacity,
    tour_cover,
    tour_gallery,
    description,
    duration,
    highlights: highlights.split('.'),
    includes: includes.split('.'),
    excludes: excludes.split('.'),
    locations: locations.split('\n'),
  };

  console.log({ data });
  const tour = await Tour.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
  });

  if (!tour) {
    return next(
      new AppError(`Tour not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    message: 'Tour updated successfully !',
    data: {
      tour,
    },
  });
});

//  @desc       Delete tour
//  @route      DELETE /api/v1/tours/:id
//  @access     Private
const deleteTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);

  if (!tour) {
    return next(
      new AppError(`Tour not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});

export {
  getTour,
  getTours,
  updateTour,
  deleteTour,
  createTour,
  uploadTourPhoto,
};
