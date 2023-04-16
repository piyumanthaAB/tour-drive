import React from 'react';
import Dashboard from '../../components/shared/Dashboard';
import ViewAllRequestsTable from '../../components/customer-care/ViewAllRequestsTable';
import useFetch from '../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};
const ViewAllEmergencyRequests = () => {
  const { data, isPending, isError } = useFetch(
    '/api/v1/emergencies?status=pending'
  );

  return (
    <Dashboard
      rightContainerContent={
        <>
          {isPending && <ClipLoader size={60} cssOverride={override} />}
          {isError && <h1>ERROR</h1>}
          {data && <ViewAllRequestsTable requests={data.data.requests} />}

          {/* <ViewAllRequestsTable requests={data.data.requests} /> */}
        </>
      }
    />
  );
};

export default ViewAllEmergencyRequests;
