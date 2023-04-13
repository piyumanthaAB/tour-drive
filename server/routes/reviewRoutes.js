import express from 'express';
import * as reviewController from './../controllers/reviewController.js';
import * as authController from './../controllers/authController.js';

const router = express.Router();

router
  .get('/', reviewController.getAllReviews)
  .post('/', reviewController.createReview);

export { router as reviewRouter };
