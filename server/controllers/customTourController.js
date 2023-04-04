import CustomTour from "../models/CustomTourModel";
import APIFeatures from "../utils/APIFeatures";
import { AppError } from "../utils/AppError";
import { catchAsync } from "../utils/catchAsync";

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

  if(!customTour){
    retunr next(
        new AppError(`custom tour not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: customTour});
});

//@Desc Create new cutom tour
//@route POST /api/v1/custom-tour/
//@access Public
const createCustomTour = catchAsync( async (req, res, next ) => {

    const {
        Cname,price,category,vehicle,duration,description,highlights,location,tourType,
    } = req.body;


    const galleryImg = req.files.galleryImg((img) => {
        return img.filename;
    });

    let data = {
        Cname,
        price,
        category,
        vehicle,
        duration,
        description,
        highlights,
        location,
        tourType,
    };

    let locs = location;

    let regex = /(\[.*?\])/g;
    let matches = locs.match(regex);
    let loc_array = JSON.parse(`[${matches}]`);

    data.location = loc_array;

    console.log({ loc_array });

    const customTour = await CustomTour.create(data);

    res.status(201).json({
        success: true,
        message: "Custom Tour added successfully.",
        data: {
            customTour,
        },
    });
});
