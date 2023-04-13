import React from "react";
import Dashboard from "../../../components/shared/Dashboard";
import ViewCustomTour from "../../../components/admin/tour related/ViewCustomTour";
import useFetch from "../../../hooks/useFetch";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  position: "absolute",
  margin: "0 auto",
  top: "30%",
  left: "60%",
  transfomr: "translate(-50%, -50%)",
};

const AdminViewCustomTour = () => {
  const { data, isPending, isError } = useFetch("/api/v1/custom-tours");

  console.log({ data });

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {isError && <h1>ERROR</h1>}
            {data && <ViewCustomTour tours={data?.data} />}
          </>
        }
      />
    </>
  );
};

export default AdminViewCustomTour;
