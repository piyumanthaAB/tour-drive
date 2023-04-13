import React from 'react';
import styled from 'styled-components';
import Dashboard from '../../../components/shared/Dashboard';
import TourStatsComp from '../../../components/admin/tour related/TourStatsComp';

const Container = styled.div``;

const TourStats = () => {
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            <TourStatsComp />
          </>
        }
      />
    </>
  );
};

export default TourStats;
