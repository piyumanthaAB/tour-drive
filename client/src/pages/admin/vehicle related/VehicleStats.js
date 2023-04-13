import React from 'react';
import Dashboard from '../../../components/shared/Dashboard';
import VehicleStatsComp from '../../../components/admin/vehicle related/VehicleStatsComp';

const VehicleStats = () => {
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            <VehicleStatsComp />
          </>
        }
      />
    </>
  );
};

export default VehicleStats;
