import express from 'express';
import * as qaController from './../controllers/qaController.js';

const router = express.Router();

router.route('/').post(qaController.createQA);
router.route('/pending').get(qaController.getAllPendingQA);
router.route('/answer/:id').patch(qaController.answerQA);
router.route('/single/:id').get(qaController.getSingleQA);
router.route('/:tourId').get(qaController.getAllAnsweredQAofSingleTour);

export { router as qaRouter };
