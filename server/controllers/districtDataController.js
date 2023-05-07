import { loadOptions } from "@babel/core";
import { customTourLocations } from "../data/locationData.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

//@desc Get all custom tours request
//@route GET /api/v1/district-data
//@access Private
const getDistance = catchAsync(async (req, res, nex) => {
  // console.log(req.query.from);
  let index = 0;
  customTourLocations.map((loc, i) => {
    const from = req.query.from;
    // const to = req.query.to;
    if (loc.city === req.query.from) {
      index = i;
      console.log(customTourLocations[index].city);
    }
  });

  // customTourLocations[index].distances.map((distance, i) => {
  //   console.log(distance.Colombo);
  // });
  const data = customTourLocations[index];
  // console.log(distance);
  // console.log("test");
  res.status(201).json({ success: true, data: data });
});

//@desc Get all sorted location
//@route POST /api/v1/district-data/locations
//@access Private
const getSortedLocations = catchAsync(async (req, res, next) => {
  // console.log("inside controller");
  const input = req.body.customSelectedLocations;
  // console.log(array);

  // ################################### test code

  // const started_city = array[0];
  // let closest_city = array[0];
  // const sorted_array = [];
  // for (let i = 0; i < array.length; i++) {
  //   const city = array[i];
  //   let min_distance_city = city;
  //   for (let j = i + 2; j < array.length; j++) {
  //     if (
  //       customTourLocations[array[i]].distances[array[j - 1]] <=
  //       customTourLocations[array[i]].distances[array[j]]
  //     ) {
  //       // console.log(array[j - 1]);
  //       closest_city = array[j - 1];
  //     } else {
  //       // console.log(array[j]);
  //       closest_city = array[j];
  //     }
  //   }
  //   console.log(closest_city);
  // }

  //######################test code end here

  const starting_index = 0;

  const output = [input[starting_index]];
  let rem_cities = [...input.filter((city) => city != input[starting_index])];

  let distance = 0;

  while (rem_cities.length !== 0) {
    const check_city = output[output.length - 1];
    let min_city = rem_cities[0];
    for (let j = 0; j <= rem_cities.length; j++) {
      if (
        customTourLocations[check_city].distances[rem_cities[j]] <=
        customTourLocations[check_city].distances[min_city]
      )
        min_city = rem_cities[j];
    }
    output.push(min_city);
    distance += customTourLocations[check_city].distances[min_city];
    rem_cities = rem_cities.filter((city) => city != min_city);
  }

  let outputData = [];
  let tourDistance = 0;
  const limit = 250;
  for (let i = 0; i < output.length; i++) {
    outputData.push(output[i]);
    tourDistance += customTourLocations[output[i]].distances[output[i + 1]];
    if (tourDistance >= limit) {
      console.log(tourDistance);
      tourDistance = 0;
      outputData.push("acc");
    }
    console.log(output[i]);
  }

  // const location = ["galle", "matara", "kandy"];

  res.status(201).json({
    success: true,
    message: "success",
    data: {
      outputData,
      distance,
    },
  });
});

export { getDistance, getSortedLocations };
