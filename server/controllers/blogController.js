import { AppError } from '../utils/AppError.js';
import { Blog } from '../models/blogModel.js';
import { catchAsync } from '../utils/catchAsync.js';

// @ DESCRIPTION            =>  create blog document
// @ ENDPOINT               =>  /api/v1/blogs[POST]
// @ ACCESS                 =>  'customer-care-officer'
const createBlog = catchAsync(async (req, res, next) => {
  const data = {
    title: req.body.title,
    p1: req.body.p1,
    p2: req.body.p2,
    p3: req.body.p3,
    coverURL: req.body.coverURL,
    galleryImages: req.body.galleryImages,
  };

  //   console.log({ data });

  const blog = await Blog.create(data);

  res.status(201).json({
    status: 'success',
    data: {
      blog,
    },
  });
});
// @ DESCRIPTION            =>  get all blog documents
// @ ENDPOINT               =>  /api/v1/blogs[GET]
// @ ACCESS                 =>  'customer-care-officer'
const getAllBlogs = catchAsync(async (req, res, next) => {
  const blogs = await Blog.find();

  res.status(200).json({
    status: 'success',
    results: blogs.length,
    data: {
      blogs,
    },
  });
});

// @ DESCRIPTION            =>  get a single blog document
// @ ENDPOINT               =>  /api/v1/blogs/:id[GET]
// @ ACCESS                 =>  'customer-care-officer'
const getSingleBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  res.status(200).json({
    status: 'success',
    data: { blog },
  });
});

// @ DESCRIPTION            =>  update a single blog document
// @ ENDPOINT               =>  /api/v1/blogs/:id[PATCH]
// @ ACCESS                 =>  'customer-care-officer'
const updateBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const data = {
    title: req.body.title,
    p1: req.body.p1,
    p2: req.body.p2,
    p3: req.body.p3,
    coverURL: req.body.coverURL,
    galleryImages: req.body.galleryImages,
  };

  const updatedBlog = await Blog.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({
    status: 'success',
    data: { updatedBlog },
  });
});

// @ DESCRIPTION            =>  delete a single blog document
// @ ENDPOINT               =>  /api/v1/blogs/:id[DELETE]
// @ ACCESS                 =>  'customer-care-officer'
const deleteBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const blog = await Blog.findByIdAndDelete(id);

  res.status(204).json({
    status: 'success',
    data: {},
  });
});

export { deleteBlog, updateBlog, getSingleBlog, getAllBlogs, createBlog };
