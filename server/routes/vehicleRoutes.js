import express from 'express';
import {
  getVehicle,
  getVehicles,
  updateVehicle,
  deleteVehicle,
  addVehicle,
  uploadVehiclePhoto,
  updateDriver,
  updateVehicleState,
} from '../controllers/vehicleController.js';
const router = express.Router();

router.route('/').get(getVehicles).post(uploadVehiclePhoto, addVehicle);

router.patch('/driver/:id', updateDriver);
router.patch('/update-state/:id', updateVehicleState);

router
  .route('/:id')
  .get(getVehicle)
  .patch(uploadVehiclePhoto, updateVehicle)
  .delete(deleteVehicle);

export { router as vehicleRouter };
