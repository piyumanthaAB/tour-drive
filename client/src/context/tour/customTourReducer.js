/* eslint-disable no-duplicate-case */
import {
  CUSTOM_TOUR_UPDATE,
  LOCATION_ONE_UPDATE,
  LOCATION_TWO_UPDATE,
  LOCATION_THREE_UPDATE,
  LOCATION_FOUR_UPDATE,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case CUSTOM_TOUR_UPDATE:
      return {
        ...state,
        // customTour: state.customTour.concat(action.payload),
        customTour: state.customTour[0].visitingLocations.loc_1,
      };
    case LOCATION_ONE_UPDATE:
      return {
        ...state,
        tour: {
          day: state.tour.day,
          city: state.tour.city,
          visitingLocations: {
            loc_1: action.payload,
            loc_2: state.tour.visitingLocations,
            loc_3: state.tour.visitingLocations,
            loc_4: state.tour.visitingLocations,
          },
          accomodation: state.tour.accomodation,
        },
      };

    default:
      return state;
  }
};
