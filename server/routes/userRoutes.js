import express from 'express';
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deactiveUser,
  getAvailableTourGuides,
  getAvailableDrivers,
} from './../controllers/userController.js';
import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

// router.use(protect);
router.get('/available-tour-guides', getAvailableTourGuides);
router.get('/available-drivers', getAvailableDrivers);

router.get('/', getAllUsers).post('/', createUser);
router
  .get('/:id', getSingleUser)
  .patch('/:id', updateUser)
  .delete('/:id', deactiveUser);

export { router as userRouter };
