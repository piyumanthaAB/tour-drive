import React from 'react';
import { ViewAllToursForm } from '../../../components/admin/tour related/ViewAllTours';
import Dashboard from './../../../components/shared/Dashboard';
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

const ViewAllTours = () => {
  const { data, isPending, isError } = useFetch('/api/v1/tours');

  console.log({ data });

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {isError && <h1>ERROR</h1>}
            {data && <ViewAllToursForm tours={data?.data} />}
          </>
        }
      />
    </>
  );
};

export default ViewAllTours;
