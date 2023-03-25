import React from 'react';
import { TourBookings } from '../../../components/client/ViewTourBookings';
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
const ViewTourBookings = () => {
  const { data, isPending, isError } = useFetch('/api/v1/booking/my-bookings');

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && <TourBookings bookings={data.data.bookings} />}
            {/* <TourBookings /> */}
          </>
        }
      />
    </>
  );
};

export default ViewTourBookings;
