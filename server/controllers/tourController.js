import { Tour } from "../models/tourModel.js";

//  @desc       Get all tours
//  @route      GET /api/v1/tours
//  @access     Public
const getTours = async (req, res, next) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({ success: true, data: tours });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//  @desc       Get single tour
//  @route      GET /api/v1/tours/:id
//  @access     Public
const getTour = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      res.status(400).json({ succes: false });
    }

    res.status(200).json({ success: true, data: tour });
  } catch (err) {
    // res.status(400).json({ succes: false });
    next(err);
  }
};

//  @desc       Create new tour
//  @route      POST /api/v1/tours/
//  @access     Private
const createTour = async (req, res, next) => {
  const tour = await Tour.create(req.body);
  // console.log(req.body);
  res.status(201).json({
    success: true,
    data: tour,
  });
};

//  @desc       Update tour
//  @route      PUT /api/v1/tours/:id
//  @access     Private
const updateTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!tour) {
      return res.status(400).json({ succes: false });
    }

    res.status(200).json({ success: true, data: tour });
  } catch (err) {
    res.status(400).json({ succes: false });
  }
};

//  @desc       Delete tour
//  @route      DELETE /api/v1/tours/:id
//  @access     Private
const deleteTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(400).json({ succes: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ succes: false });
  }
};

export { getTour, getTours, updateTour, deleteTour, createTour };
