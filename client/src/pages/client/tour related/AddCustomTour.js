import React from "react";
import ClientCustomTour from "../../../components/client/ClientCustomTour";
import Dashboard from "../../../components/shared/Dashboard";

const AddCustomTour = () => {
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            <ClientCustomTour />
          </>
        }
      />
    </>
  );
};

export default AddCustomTour;
