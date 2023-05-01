import { loadOptions } from "@babel/core";
import { customTourLocations } from "../data/locationData.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

//@desc Get all custom tours request
//@route GET /api/v1/custom-tour
//@access Private
const getDistance = catchAsync(async (req, res, nex) => {
  // console.log(req.query.from);

  customTourLocations.map((loc, i) => {
    const from = req.query.from;
    // const to = req.query.to;
    if (loc.city === from) {
      const index = i;
      console.log(customTourLocations[index].distances);
    }
  });

  // customTourLocations[index].distances.map((distance, i) => {
  //   console.log(distance.Colombo);
  // });
  // const distance = customTourLocations["2"].city;
  // console.log(distance);
  // console.log("test");
  // res.status(201).json({ success: true, data: distance });
});

export { getDistance };
