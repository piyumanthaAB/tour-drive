import { AppError } from '../utils/AppError.js';
import { User } from './../models/userModel.js';
import Tour from './../models/tourModel.js';
import { catchAsync } from '../utils/catchAsync.js';

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================

// ######### controllers START #############

// @ DESCRIPTION            =>  create user account
// @ ENDPOINT               =>  api/v1/users [POST]
// @ ACCESS                 =>  'admin'
const createUser = catchAsync(async (req, res, next) => {
  const { fName, lName, email, role, id, mobile } = req.body;

  const newUser = await User.create({
    name: `${fName} ${lName}`,
    email,
    role,
    id,
    mobile,
    password: 'test1234',
    passwordConfirm: 'test1234',
  });

  res.status(201).json({
    status: 'success',
    message: 'user account created successfully',
    data: {
      newUser,
    },
  });
});

// @ DESCRIPTION            =>  get all user accounts
// @ ENDPOINT               =>  api/v1/users [GET]
// @ ACCESS                 =>  'admin'
const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find().select('+active');

  res.status(201).json({
    status: 'success',
    records: users.length,
    data: {
      users,
    },
  });
});

// @ DESCRIPTION            =>  get a single user account
// @ ENDPOINT               =>  api/v1/users/:id [GET]
// @ ACCESS                 =>  'admin'
const getSingleUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id).select('+active');

  res.status(201).json({
    status: 'success',
    data: {
      user,
    },
  });
});

// @ DESCRIPTION            =>  update a single user account
// @ ENDPOINT               =>  api/v1/users/:id [PATCH]
// @ ACCESS                 =>  'admin'
const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, mobile, role } = req.body;

  const user = await User.findByIdAndUpdate(
    id,
    { name, mobile, id: req.body.id, role },
    { runValidators: true, new: true }
  );

  res.status(201).json({
    status: 'success',
    message: 'User updated successfully',
    data: {
      user,
    },
  });
});

// @ DESCRIPTION            =>  deactive a single user account
// @ ENDPOINT               =>  api/v1/users/:id [DELETE]
// @ ACCESS                 =>  'admin'
const deactiveUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(
    id,
    { active: false },
    { runValidators: true, new: true }
  );

  res.status(204).json({
    status: 'success',
    message: 'User deactivated successfully',
    data: {
      user,
    },
  });
});

const getAvailableTourGuides = catchAsync(async (req, res, next) => {
  const users = await User.find({ role: 'tour_guide', assignedToTour: false });

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: { users },
  });
});

const getAvailableDrivers = catchAsync(async (req, res, next) => {
  const users = await User.find({ role: 'driver', assignedToVehicle: false });

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: { users },
  });
});

// ######### controllers END #############

export {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deactiveUser,
  getAvailableTourGuides,
  getAvailableDrivers,
};
