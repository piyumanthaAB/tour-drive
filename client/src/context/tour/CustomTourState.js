import {
  CUSTOM_TOUR_UPDATE,
  LOCATION_ONE_UPDATE,
  LOCATION_TWO_UPDATE,
  LOCATION_THREE_UPDATE,
  LOCATION_FOUR_UPDATE,
} from '../types';

import React, { useReducer } from 'react';
import customTourReducer from './customTourReducer';
import CustomTourContext from './customTourContext';

const CustomTourState = (props) => {
  const initialState = {
    customTour: [],
    tour: {
      day: null,
      city: null,
      visitingLocations: {
        loc_1: null,
        loc_2: null,
        loc_3: null,
        loc_4: null,
      },
      accomodation: null,
    },
  };

  // ================= customTour should look like this ============================
  // const customTour = [
  // {
  //   day: 1,
  //   city: 'galle',
  //   visitingLocations: {
  //     loc_1: 'galle_location one',
  //     loc_2: 'galle_location two',
  //     loc_3: 'galle_location three',
  //     loc_4: 'galle_location four',
  //   },
  //   accomodation: '',
  // },
  //   {
  //     day: 2,
  //     city: 'matara',
  //     visitingLocations: {
  //       loc_1: 'matara_location one',
  //       loc_2: 'matara_location two',
  //       loc_3: 'matara_location three',
  //       loc_4: 'matara_location four',
  //     },
  //     accomodation: '',
  //   },
  // ];

  // ================= ===================================== ============================

  const [state, dispatch] = useReducer(customTourReducer, initialState);

  const updateCustomTour = (data) => {
    console.log('tour updated');
    console.log({ 'here is data': data });
    dispatch({
      type: CUSTOM_TOUR_UPDATE,
      payload: data,
    });
  };

  const updateLocationOne = (location) => {
    console.log({ location });
    dispatch({
      type: LOCATION_ONE_UPDATE,
      payload: location,
    });
  };

  return (
    <CustomTourContext.Provider
      value={{
        customTour: state.customTour,
        tour: state.tour,
        updateCustomTour,
        updateLocationOne,
      }}
    >
      {props.children}
    </CustomTourContext.Provider>
  );
};

export default CustomTourState;
