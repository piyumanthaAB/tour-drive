import express from "express";
import {
  getCustomTour,
  getCustomTours,
  createCustomTour,
  deleteCustomTour,
  uploadCustomTourPhoto,
} from "../controllers/customTourController.js";
const router = express.Router();

router
  .route("/")
  .get(getCustomTours)
  .post(uploadCustomTourPhoto, createCustomTour);

router.route("/:id").get(getCustomTour).delete(deleteCustomTour);

export { router as customTourRouter };
