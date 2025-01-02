import React from 'react';
import useFetch from '../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';
import Dashboard from '../../components/shared/Dashboard';
import ViewAllQATable from '../../components/customer-care/ViewAllQATable';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};

const ViewAllQARequests = () => {
  const { data, isPending, isError } = useFetch('/api/v1/qa/pending');
  return (
    <Dashboard
      rightContainerContent={
        <>
          {isPending && <ClipLoader size={60} cssOverride={override} />}
          {isError && <h1>ERROR</h1>}
          {data && <ViewAllQATable requests={data.data.qa} />}
        </>
      }
    />
  );
};

export default ViewAllQARequests;
