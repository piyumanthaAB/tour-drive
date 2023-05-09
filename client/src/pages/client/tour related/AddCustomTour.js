import React from 'react';
import ClientCustomTour from '../../../components/client/ClientCustomTour';
import Dashboard from '../../../components/shared/Dashboard';
import { customTourLocations } from '../../../data/custom-tour-locations';
import useFetch from '../../../hooks/useFetch';

const AddCustomTour = () => {
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>{<ClientCustomTour customTourLocations={customTourLocations} />}</>
        }
      />
    </>
  );
};

export default AddCustomTour;
