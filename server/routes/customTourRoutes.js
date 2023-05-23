import express from 'express';
import {
  getCustomTour,
  getCustomTours,
  createCustomTour,
  deleteCustomTour,
  uploadCustomTourPhoto,
  updateCustomTour,
  getMyCustomTourOne,
  getMyCustomTours,
} from '../controllers/customTourController.js';

import { protect } from './../controllers/authController.js';

const router = express.Router();

router.route('/').get(getCustomTours).post(createCustomTour);

router.get('/my-custom-tours', protect, getMyCustomTours);
router.get('/my-custom-tours/:id', protect, getMyCustomTourOne);

router
  .route('/:id')
  .get(getCustomTour)
  .delete(deleteCustomTour)
  .patch(updateCustomTour);

export { router as customTourRouter };
