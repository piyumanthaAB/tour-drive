import express from "express";
import {
  getDistance,
  getSortedLocations,
} from "../controllers/districtDataController.js";

const router = express.Router();

router.route("/").get(getDistance);

router.route("/locations").post(getSortedLocations);

export { router as DistrictDataRouter };
