import express from 'express';
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from './../controllers/userController.js';
import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

// router.use(protect);

router.get('/', getAllUsers).post('/', createUser);
router.get('/:id', getSingleUser).patch('/:id', updateUser);

export { router as userRouter };
