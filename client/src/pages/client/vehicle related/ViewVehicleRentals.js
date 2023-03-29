import React from 'react';
import { VehicleRentals } from '../../../components/client/ViewVehicleRentals';
import Dashboard from '../../../components/shared/Dashboard';
import useFetch from '../../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';

const ViewVehicleRentals = () => {
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            <VehicleRentals />
          </>
        }
      />
    </>
  );
};

export default ViewVehicleRentals;
