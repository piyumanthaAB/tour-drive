import React from "react";
import HomeCover from "../../components/Home/HomeCover";
import HomeCoverNew from "../../components/Home/HomeCoverNew";
import TourSlider from "../../components/Home/TourSlider";
import CustomerReview from "../../components/Home/CustomerReview";
import VehicleSlider from "../../components/Home/VehicleSlider";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const vehicles = useFetch("/api/v1/vehicles");
  const tours = useFetch("/api/v1/tours");

  return (
    <>
      <HomeCover />
      {/* <HomeCoverNew/> */}
      <TourSlider
        data={tours.data}
        isPending={tours.isPending}
        isError={tours.isError}
      />
      <VehicleSlider
        data={vehicles.data}
        isError={vehicles.isError}
        isPending={vehicles.isPending}
      />
      <CustomerReview />
    </>
  );
};

export default Home;
