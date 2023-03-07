import { AppError } from "../utils/AppError.js";
import { User } from "./../models/userModel.js";
import { catchAsync } from "../utils/catchAsync.js";

// ============== MIDDLEWARE STACK START =================

// ============== MIDDLEWARE STACK END =================

// ######### controllers START #############

// @ DESCRIPTION            =>  create user account
// @ ENDPOINT               =>  api/v1/users [POST]
// @ ACCESS                 =>  'admin'
// @ CREATED BY             =>  piyumantha
// @ CREATED DATE & TIME    =>  2022/12/6 @ 7.10pm
const createUser = catchAsync(async (req, res, next) => {
  const { email, name } = req.body;

  //  const newUser = await User.create({email,name});

  res.status(201).json({
    status: "success",
    msg: "user account created successfully",
    data: {
      newUser: "newUser",
    },
  });
});

// ######### controllers END #############

export { createUser };
