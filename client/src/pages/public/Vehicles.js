import React from 'react';
import VehicleHeroComponent from '../../components/public/vehicles/VehicleHero';
import VehicleListComp from '../../components/public/vehicles/VehicleListComp';
// import TourListComponent from '../../components/public/tours/TourListComponent'
import useFetch from './../../hooks/useFetch';
import BounceLoader from 'react-spinners/ClipLoader';

import { vehicles } from '../../data/vehicles';

const Tours = () => {
  const { data, isPending, isError } = useFetch('/api/v1/vehicles');

  if (data) {
    console.log({ data });
  }

  return (
    <>
      <VehicleHeroComponent />
      {isPending && (
        <BounceLoader
          size={60}
          cssOverride={{
            display: 'block',
            margin: '5rem auto',
          }}
        />
      )}
      {isError && <p>error</p>}
      {data && <VehicleListComp vehicles={data.data} />}

      {/* <VehicleListComp vehicles={vehicles} /> */}
    </>
  );
};

export default Tours;
