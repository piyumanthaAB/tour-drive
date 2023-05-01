import express from "express";
import {
  getCustomTour,
  getCustomTours,
  createCustomTour,
  deleteCustomTour,
  uploadCustomTourPhoto,
  updateCustomTour,
} from "../controllers/customTourController.js";
const router = express.Router();

router
  .route("/")
  .get(getCustomTours)
  .post(uploadCustomTourPhoto, createCustomTour);

router
  .route("/:id")
  .get(getCustomTour)
  .delete(deleteCustomTour)
  .patch(updateCustomTour);

export { router as customTourRouter };
