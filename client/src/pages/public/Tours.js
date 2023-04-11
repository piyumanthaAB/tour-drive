import React, { useState } from 'react';
import TourHeroComponent from '../../components/public/tours/TourHeroComponent';
import TourListComponent from '../../components/public/tours/TourListComponent';
import useFetch from './../../hooks/useFetch';
// import { tours } from '../../data/tours'
import BounceLoader from 'react-spinners/ClipLoader';

const Tours = () => {
  return (
    <>
      <TourHeroComponent />

      {<TourListComponent />}
    </>
  );
};

export default Tours;
