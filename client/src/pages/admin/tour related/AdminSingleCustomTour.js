import React from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import SingleCustomTourView from "../../../components/admin/tour related/SingleCustomTourView";
import Dashboard from "../../../components/shared/Dashboard";
import useFetch from "../../../hooks/useFetch";

const override = {
  position: "absolute",
  margin: "0 auto",
  top: "30%",
  left: "60%",
  transform: "translate(-50%,-50%)",
};

const AdminSingleCustomTour = () => {
  const { id } = useParams();

  const { data, isPending, IsError } = useFetch(`/api/v1/custom-tours/${id}`);
  console.log(data);

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && <ClipLoader size={60} cssOverride={override} />}
            {data && <SingleCustomTourView tour={data.data} />}
          </>
        }
      />
    </>
  );
};

export default AdminSingleCustomTour;
