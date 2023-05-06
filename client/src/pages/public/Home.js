import React from "react";
import HomeCover from "../../components/Home/HomeCover";
import HomeCoverNew from "../../components/Home/HomeCoverNew";
import TourSlider from "../../components/Home/TourSlider";
import CustomerReview from "../../components/Home/CustomerReview";
import VehicleSlider from "../../components/Home/VehicleSlider";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { data, isPending, isError } = useFetch("/api/v1/tours");
  return (
    <>
      <HomeCover />
      {/* <HomeCoverNew/> */}
      <TourSlider data={data} isPending={isPending} isError={isError} />
      <VehicleSlider />
      <CustomerReview />
    </>
  );
};

export default Home;
