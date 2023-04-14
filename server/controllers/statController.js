import Tour from './../models/tourModel.js';
import { Booking } from './../models/bookingModel.js';
import Vehicles from './../models/vehicleModel.js';
import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';

const getTourBookingsVSCategories = catchAsync(async (req, res, next) => {
  let data = {
    name: 'Tour Categories',
    city: 0,
    hiking: 0,
    adventure: 0,
    historical: 0,
    cultural: 0,
  };

  const bookings = await Booking.find();

  bookings.forEach((booking) => {
    if (booking?.tour?.category === 'city') {
      data.city += 1;
    }
    if (booking?.tour?.category === 'hiking') {
      data.hiking += 1;
    }
    if (booking?.tour?.category === 'adventure') {
      data.adventure += 1;
    }
    if (booking?.tour?.category === 'historical') {
      data.historical += 1;
    }
    if (booking?.tour?.category === 'cultural') {
      data.cultural += 1;
    }
  });

  res.status(200).json({
    status: 'success',
    data: { data },
  });
});

const getTourCategoriesVsIncome = catchAsync(async (req, res, next) => {
  let data = {
    name: 'Tour Categories',
    city: 0,
    hiking: 0,
    adventure: 0,
    historical: 0,
    cultural: 0,
  };

  const bookings = await Booking.find();

  bookings.forEach((booking) => {
    if (booking?.tour?.category === 'city') {
      data.city += booking.price;
    }
    if (booking?.tour?.category === 'hiking') {
      data.hiking += booking.price;
    }
    if (booking?.tour?.category === 'adventure') {
      data.adventure += booking.price;
    }
    if (booking?.tour?.category === 'historical') {
      data.historical += booking.price;
    }
    if (booking?.tour?.category === 'cultural') {
      data.cultural += booking.price;
    }
  });
  res.status(200).json({
    status: 'success',
    data: { data },
  });
});

const getTourCategoryVsRatingsAverage = catchAsync(async (req, res, next) => {
  let ratingsAverage = {
    city: 0,
    hiking: 0,
    adventure: 0,
    historical: 0,
    cultural: 0,
  };

  let data = [];

  const tours = await Tour.find();

  tours.forEach((tour) => {
    if (tour.category === 'city') {
      ratingsAverage.city +=
        (tour.locationRatingsAverage + tour.serviceRatingsAverage) /
        2 /
        tour.ratingsQuantity;
    }
    if (tour.category === 'hiking') {
      ratingsAverage.hiking +=
        (tour.locationRatingsAverage + tour.serviceRatingsAverage) /
        2 /
        tour.ratingsQuantity;
    }
    if (tour.category === 'adventure') {
      ratingsAverage.adventure +=
        (tour.locationRatingsAverage + tour.serviceRatingsAverage) /
        2 /
        tour.ratingsQuantity;
    }
    if (tour.category === 'historical') {
      ratingsAverage.historical +=
        (tour.locationRatingsAverage + tour.serviceRatingsAverage) /
        2 /
        tour.ratingsQuantity;
    }
    if (tour.category === 'cultural') {
      ratingsAverage.cultural +=
        (tour.locationRatingsAverage + tour.serviceRatingsAverage) /
        2 /
        tour.ratingsQuantity;
    }
  });

  for (let key in ratingsAverage) {
    data.push({ name: key, avg: ratingsAverage[key].toFixed(2) });
  }

  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  });
});

const getVehicleTypeVsRentingsCount = catchAsync(async (req, res, next) => {
  let data = {
    name: 'Vehicle types',
    car: 0,
    van: 0,
    bike: 0,
    suv: 0,
  };

  const bookings = await Booking.find();

  bookings.forEach((booking) => {
    if (booking?.vehicle?.vehicle_type === 'car') {
      data.car += 1;
    }
    if (booking?.vehicle?.vehicle_type === 'van') {
      data.van += 1;
    }
    if (booking?.vehicle?.vehicle_type === 'suv') {
      data.suv += 1;
    }
    if (booking?.vehicle?.vehicle_type === 'bike') {
      data.bike += 1;
    }
  });

  res.status(200).json({
    status: 'success',
    data: { data },
  });
});

const getVehicleTypeVsIncome = catchAsync(async (req, res, next) => {
  let data = {
    name: 'Vehicle types',
    car: 0,
    van: 0,
    bike: 0,
    suv: 0,
  };

  const bookings = await Booking.find();

  bookings.forEach((booking) => {
    if (booking?.vehicle?.vehicle_type === 'car') {
      data.car += booking.price;
    }
    if (booking?.vehicle?.vehicle_type === 'van') {
      data.van += booking.price;
    }
    if (booking?.vehicle?.vehicle_type === 'suv') {
      data.suv += booking.price;
    }
    if (booking?.vehicle?.vehicle_type === 'bike') {
      data.bike += booking.price;
    }
  });

  res.status(200).json({
    status: 'success',
    data: { data },
  });
});

const getVehicleTypeVsRatingsAverage = catchAsync(async (req, res, next) => {
  let ratingsAverage = {
    car: 0,
    van: 0,
    bike: 0,
    suv: 0,
  };

  let data = [];

  const vehicles = await Vehicles.find();

  vehicles.forEach((vehicle) => {
    if (vehicle.vehicle_type === 'car') {
      ratingsAverage.car +=
        (vehicle.driverRatingsAverage + vehicle.vehicleRatingsAverage) /
        2 /
        vehicle.ratingsQuantity;
    }
    if (vehicle.vehicle_type === 'van') {
      ratingsAverage.van +=
        (vehicle.driverRatingsAverage + vehicle.vehicleRatingsAverage) /
        2 /
        vehicle.ratingsQuantity;
    }
    if (vehicle.vehicle_type === 'bike') {
      ratingsAverage.bike +=
        (vehicle.driverRatingsAverage + vehicle.vehicleRatingsAverage) /
        2 /
        vehicle.ratingsQuantity;
    }
    if (vehicle.vehicle_type === 'suv') {
      ratingsAverage.suv +=
        (vehicle.driverRatingsAverage + vehicle.vehicleRatingsAverage) /
        2 /
        vehicle.ratingsQuantity;
    }
  });

  for (let key in ratingsAverage) {
    data.push({ name: key, avg: ratingsAverage[key].toFixed(2) });
  }

  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  });
});

export {
  getTourBookingsVSCategories,
  getTourCategoriesVsIncome,
  getTourCategoryVsRatingsAverage,
  getVehicleTypeVsRentingsCount,
  getVehicleTypeVsIncome,
  getVehicleTypeVsRatingsAverage,
};
