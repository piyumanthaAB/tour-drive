import React from 'react';
import Dashboard from '../../../components/shared/Dashboard';
import CustomTourSummary from '../../../components/client/CustomTourSummary';
import useFetch from '../../../hooks/useFetch';
import { TbH1 } from 'react-icons/tb';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};

const ViewCustomTourSummary = () => {
  const { data, isError, isPending } = useFetch('/api/v1/district-data');

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}

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
