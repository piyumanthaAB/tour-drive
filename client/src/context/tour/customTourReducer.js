/* eslint-disable no-duplicate-case */
import { ADD_CITY, RESET_CUSTOM_TOUR, UPDATE_STATE } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        customTour: state.customTour.concat(action.payload),
        // customTour: [...state, action.payload],
      };
    case RESET_CUSTOM_TOUR:
      return {
        ...state,
        customTour: [],
        // customTour: [...state, action.payload],
      };
    case UPDATE_STATE:
      console.log({ payload: action.payload });
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        passengerCount: action.payload.passengerCount,
        vehicleType: action.payload.vehicleType,
        vehicleTransmission: action.payload.vehicleTransmission,
        vehicleFuel: action.payload.vehicleFuel,
      };

    default:
      return state;
  }
};
