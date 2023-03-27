import express from 'express';
import {
  getVehicle,
  getVehicles,
  updateVehicle,
  deleteVehicle,
  addVehicle,
  uploadVehiclePhoto,
} from '../controllers/vehicleController.js';
const router = express.Router();

router.route('/').get(getVehicles).post(uploadVehiclePhoto, addVehicle);

router.route('/:id').get(getVehicle).put(updateVehicle).delete(deleteVehicle);

export { router as vehicleRouter };
