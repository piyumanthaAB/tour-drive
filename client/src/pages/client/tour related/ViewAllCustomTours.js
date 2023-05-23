import React from 'react';
import Dashboard from '../../../components/shared/Dashboard';
import useFetch from '../../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';
import ViewAllCustomToursTable from '../../../components/client/ViewAllCustomToursTable';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};
const ViewAllCustomTours = () => {
  const { data, isPending, isError } = useFetch(
    '/api/v1/custom-tours/my-custom-tours'
  );
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && !isPending && (
              <ViewAllCustomToursTable tours={data?.data?.myCustomTours} />
            )}
          </>
        }
      />
    </>
  );
};

export default ViewAllCustomTours;
