import express from 'express';
import * as emergencyController from './../controllers/emergencyController.js';
import * as authController from './../controllers/authController.js';

const router = express.Router();

router
  .route('/')
  .get(emergencyController.getAllEmergencyrequests)
  .post(emergencyController.createEmergencyRequest);

router
  .route('/:id')
  .get(emergencyController.getSingleEmergencyRequest)
  .patch(
    authController.protect,
    authController.restrictTo('customer_care'),
    emergencyController.updateEmergencyRequest
  );

export { router as emergencyRouter };
