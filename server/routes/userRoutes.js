import express from 'express';
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deactiveUser,
  getAvailableTourGuides,
} from './../controllers/userController.js';
import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

// router.use(protect);
router.get('/available-tour-guides', getAvailableTourGuides);

router.get('/', getAllUsers).post('/', createUser);
router
  .get('/:id', getSingleUser)
  .patch('/:id', updateUser)
  .delete('/:id', deactiveUser);

export { router as userRouter };
