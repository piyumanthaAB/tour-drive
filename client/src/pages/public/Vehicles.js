import React from 'react';
import VehicleHeroComponent from '../../components/public/vehicles/VehicleHero';
import VehicleListComp from '../../components/public/vehicles/VehicleListComp';
// import TourListComponent from '../../components/public/tours/TourListComponent'
import useFetch from './../../hooks/useFetch';

const Tours = () => {
  return (
    <>
      <VehicleHeroComponent />

      {<VehicleListComp />}

      {/* <VehicleListComp vehicles={vehicles} /> */}
    </>
  );
};

export default Tours;
