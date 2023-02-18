import express from 'express';
import { createUser } from './../controllers/userController.js';
import { protect,restrictTo } from '../controllers/authController.js';


const router = express.Router();

router.use(protect);

router.post('/',restrictTo('user'), createUser);

export{ router as userRouter};