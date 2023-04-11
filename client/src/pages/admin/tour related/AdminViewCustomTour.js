import React from "react";
import Dashboard from "../../../components/shared/Dashboard";
import ViewCustomTour from "../../../components/admin/tour related/ViewCustomTour";

const AdminViewCustomTour = () => {
  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            <ViewCustomTour />
          </>
        }
      />
    </>
  );
};

export default AdminViewCustomTour;
