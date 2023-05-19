import React from 'react';
import Dashboard from '../../../components/shared/Dashboard';
import CustomTourSummary from '../../../components/client/CustomTourSummary';
import useFetch from '../../../hooks/useFetch';
import { TbH1 } from 'react-icons/tb';

const ViewCustomTourSummary = () => {
  const { data, isError, isPending } = useFetch('/api/v1/district-data');

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <h1>LOADINGG.....</h1>}
            {data && !isPending && (
              <CustomTourSummary distanceData={data.data} />
            )}
          </>
        }
      />
    </>
  );
};

export default ViewCustomTourSummary;
