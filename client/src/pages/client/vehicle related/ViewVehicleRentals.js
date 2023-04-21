import React from 'react';
import { VehicleRentals } from '../../../components/client/ViewVehicleRentals';
import Dashboard from '../../../components/shared/Dashboard';
import useFetch from '../../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};

const ViewVehicleRentals = () => {
  const { data, isPending, isError } = useFetch(
    '/api/v1/booking/my-bookings/vehicles'
  );
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && <VehicleRentals rentals={data.data.bookings} />}

            {/* <VehicleRentals /> */}
          </>
        }
      />
    </>
  );
};

export default ViewVehicleRentals;
