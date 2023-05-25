import express from 'express';
import * as blogController from './../controllers/blogController.js';

const router = express.Router();

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);
router
  .route('/:id')
  .get(blogController.getSingleBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

export { router as blogRouter };
