import express from 'express';
import * as statController from './../controllers/statController.js';

const router = express.Router();

// tour stat routes start

router.get(
  '/categories-vs-bookings',
  statController.getTourBookingsVSCategories
);
router.get('/categories-vs-income', statController.getTourCategoriesVsIncome);
router.get(
  '/categories-vs-average-ratings',
  statController.getTourCategoryVsRatingsAverage
);

// vehicle stat routes start

router.get(
  '/rentings-vs-vehicle-types',
  statController.getVehicleTypeVsRentingsCount
);
router.get('/type-vs-income', statController.getVehicleTypeVsIncome);
router.get(
  '/type-vs-ratings-average',
  statController.getVehicleTypeVsRatingsAverage
);

export { router as statRouter };
