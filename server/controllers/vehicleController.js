import Vehicle from "../models/vehicleModel.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

//  @desc        Get all vehicles
//  @route       GET /api/v1/vehicles
//  @access      Public
const getVehicles = catchAsync(async (req, res, next) => {
    const vehicles = await Vehicle.find();

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
      const vehicle = await Vehicle.create(req.body);
    
      res.status(201).json({
        success: true,
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
    
    export { getVehicle, getVehicles, updateVehicle, deleteVehicle, addVehicle };
    