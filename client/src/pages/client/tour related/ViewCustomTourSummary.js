import React from 'react';
import Dashboard from '../../../components/shared/Dashboard';
import CustomTourSummary from '../../../components/client/CustomTourSummary';

const ViewCustomTourSummary = () => {
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            <CustomTourSummary />
          </>
        }
      />
    </>
  );
};

export default ViewCustomTourSummary;
