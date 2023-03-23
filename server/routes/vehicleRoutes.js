import express from "express";
import {
  getVehicle, 
  getVehicles, 
  updateVehicle, 
  deleteVehicle, 
  addVehicle,
} from "../controllers/vehicleController.js";
const router = express.Router();

router.route("/").get(getVehicles).post(addVehicle);

router.route("/:id").get(getVehicle).put(updateVehicle).delete(deleteVehicle);

export { router as vehicleRouter };