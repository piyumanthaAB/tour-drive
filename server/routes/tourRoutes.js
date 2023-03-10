import express from "express";
import {
  getTour,
  getTours,
  updateTour,
  deleteTour,
  createTour,
} from "../controllers/tourController.js";
const router = express.Router();

router.route("/").get(getTours).post(createTour);

router.route("/:id").get(getTour).put(updateTour).delete(deleteTour);

export { router as tourRouter };
