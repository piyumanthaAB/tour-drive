import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
// import data from "./locationData.js";

//@desc Get all custom tours request
//@route GET /api/v1/custom-tour
//@access Private
const getDistance = catchAsync(async (req, res, nex) => {
  // // console.log(req.query);
  // const distance = data[req.query.from][req.query.to];

  console.log("test");
  // res.status(201).json({ success: true, data: distance });
});

export { getDistance };
