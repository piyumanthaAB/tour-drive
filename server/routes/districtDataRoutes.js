import express from "express";
import { getDistance } from "../controllers/districtDataController.js";

const router = express.Router();

router.route("/").get(getDistance);

export { router as DistrictDataRouter };
