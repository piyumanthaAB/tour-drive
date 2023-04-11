import CustomTour from "../models/customTourModel.js";
import APIFeatures from "../utils/APIFeatures.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import multer, { MulterError } from "multer";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/customTour-uploads");
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

const uploadCustomTourPhoto = upload.fields([
  { name: "galleryImg", maxCount: 3 },
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

  res.status(200).json({ success: true, data: customTours });
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
//@route POST /api/v1/custom-tour/
//@access Public
const createCustomTour = catchAsync(async (req, res, next) => {
  const {
    name,
    price,
    category,
    vehicle,
    duration,
    description,
    highlights,
    // location,
    tourType,
  } = req.body;
  console.log({ body: req.body });
  const galleryImg = req.files.galleryImg.map((img) => {
    return img.filename;
  });

  let data = {
    name,
    price,
    category,
    vehicle,
    duration,
    description,
    highlights,
    // location,
    tourType,
    galleryImg,
  };

  console.log({ data });

  // let locs = location;

  // let regex = /(\[.*?\])/g;
  // let matches = locs.match(regex);
  // let loc_array = JSON.parse(`[${matches}]`);

  // data.location = loc_array;

  // console.log({ loc_array });

  const customTour = await CustomTour.create(data);

  res.status(201).json({
    success: true,
    message: "Custom Tour added successfully.",
    data: {
      customTour,
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
};
