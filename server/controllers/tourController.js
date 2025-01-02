import Tour from "../models/tourModel.js";
import { User } from "../models/userModel.js";
import APIFeatures from "../utils/APIFeatures.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import multer from "multer";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/tour-uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `tour-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image!", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const uploadTourPhoto = upload.fields([
  { name: "tour_cover", maxCount: 1 },
  { name: "tour_gallery", maxCount: 3 },
]);

//  @desc       Get all tours
//  @route      GET /api/v1/tours
//  @access     Public
const getTours = catchAsync(async (req, res, next) => {
  // console.log({ query: req.query });
  const allRecords = await Tour.find();

  let query = Tour.find();
  const categories = req?.query?.category?.split(",");

  if (req?.query?.category) {
    query = Tour.find({
      category: { $in: categories },
    });
    delete req.query.category;
  }

  const features = new APIFeatures(query, req.query)
    .filter()
    .sort()
    .limiting()
    .paging();

  const tours = await features.query;

  res.status(200).json({
    success: true,
    results: tours.length,
    data: tours,
    totalRecords: allRecords.length,
  });
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
    tourPlan,
    cities,
    category,
  } = req.body;

  console.log({ locations });

  const tour_cover = req.files.tour_cover[0].filename;
  const tour_gallery = req.files.tour_gallery.map((img) => {
    return img.filename;
  });

  let data = {
    name,
    price,
    age_limit: ageLimit,
    capacity,
    tour_cover,
    tour_gallery,
    description,
    duration,
    highlights,
    includes,
    excludes,
    locations,
    start_date: startDate,
    end_date: endDate,
    tourPlan,
    cities,
    category,
  };

  let locs = locations;

  let regex = /(\[.*?\])/g;
  let matches = locs.match(regex);
  let loc_array = JSON.parse(`[${matches}]`);

  data.locations = loc_array;

  console.log({ loc_array });

  let plans_arr = tourPlan.match(/\[([^\]]*)\]/g).map(function (item) {
    return item.slice(1, -1);
  });

  data.tourPlan = plans_arr;

  // console.log({ plans_arr });

  const tour = await Tour.create(data);

  res.status(201).json({
    success: true,
    message: "Tour added successfully !",
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
    startDate,
    endDate,
    tourPlan,
    cities,
    category,
  } = req.body;

  const tour_cover = req.files?.tour_cover[0].filename;
  const tour_gallery = req.files?.tour_gallery.map((img) => {
    return img.filename;
  });

  let data = {
    name,
    price,
    age_limit: ageLimit,
    capacity,
    tour_cover,
    tour_gallery,
    description,
    duration,
    highlights,
    includes,
    excludes,
    locations,
    start_date: startDate,
    end_date: endDate,
    tourPlan,
    cities,
    category,
  };

  console.log({ data });

  let locs = locations;

  let regex = /(\[.*?\])/g;
  let matches = locs.match(regex);
  let loc_array = JSON.parse(`[${matches}]`);

  data.locations = loc_array;

  let plans_arr = tourPlan.match(/\[([^\]]*)\]/g).map(function (item) {
    return item.slice(1, -1);
  });

  data.tourPlan = plans_arr;

  console.log({ plans_arr });

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
    message: "Tour updated successfully !",
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

//  @desc       update tour guides of a given tour
//  @route      PATCH /api/v1/tours/guides/:id
//  @access     Private
const updateTourGuides = catchAsync(async (req, res, next) => {
  console.log({ body: req.body });

  const { id } = req.params;

  const data = {
    guide_1: req.body.guide_1,
    guide_2: req.body.guide_2,
  };

  if (req.body.action === "update") {
    const updatedUser_1 = await User.findByIdAndUpdate(data?.guide_1, {
      assignedToTour: true,
    });
    const updatedUser_2 = await User.findByIdAndUpdate(data?.guide_2, {
      assignedToTour: true,
    });
    const updatedTour = await Tour.findByIdAndUpdate(id, data);
  } else {
    const updatedUser_1 = await User.findByIdAndUpdate(data?.guide_1, {
      assignedToTour: false,
    });
    const updatedUser_2 = await User.findByIdAndUpdate(data?.guide_2, {
      assignedToTour: false,
    });
    const updatedTour = await Tour.findByIdAndUpdate(id, {
      guide_1: null,
      guide_2: null,
    });
  }

  // if (!updatedTour) {
  //   return next(new AppError('No tour found for this ID', 400));
  // }

  res.status(201).json({
    success: true,
    message: "Tour guides updated successfully !",
    data: {
      // tour,
      // updatedTour,
    },
  });
});

export {
  getTour,
  getTours,
  updateTour,
  deleteTour,
  createTour,
  uploadTourPhoto,
  updateTourGuides,
};
