import express from 'express';
import {
  getTour,
  getTours,
  updateTour,
  deleteTour,
  createTour,
  uploadTourPhoto,
  updateTourGuides,
} from '../controllers/tourController.js';
const router = express.Router();

router.route('/').get(getTours).post(uploadTourPhoto, createTour);

router.patch('/guides/:id', updateTourGuides);

router
  .route('/:id')
  .get(getTour)
  .patch(uploadTourPhoto, updateTour)
  .delete(deleteTour);

export { router as tourRouter };
