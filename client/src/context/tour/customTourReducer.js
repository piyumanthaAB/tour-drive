/* eslint-disable no-duplicate-case */
import {
  CUSTOM_TOUR_UPDATE,
  LOCATION_ONE_UPDATE,
  LOCATION_TWO_UPDATE,
  LOCATION_THREE_UPDATE,
  LOCATION_FOUR_UPDATE,
  ADD_CITY,
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        customTour: state.customTour.concat(action.payload),
        // customTour: [...state, action.payload],
      };

    default:
      return state;
  }
};
