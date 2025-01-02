import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A blog must have a title'],
      unique: true,
    },
    p1: {
      type: String,
      required: [true, 'A blog must have a body'],
    },
    p2: {
      type: String,
      required: [true, 'A blog must have a body'],
    },
    p3: {
      type: String,
      required: [true, 'A blog must have a body'],
    },
    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: 'User',
    //   required: [true, 'A blog must have a user'],
    // },
    coverURL: {
      type: String,
      required: [true, 'A blog must have a coverURL'],
    },
    galleryImages: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);
export { Blog };
