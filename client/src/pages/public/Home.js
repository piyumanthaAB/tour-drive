import React from 'react'
import HomeCover from '../../components/Home/HomeCover'
import HomeCoverNew from '../../components/Home/HomeCoverNew'
import TourSlider from '../../components/Home/TourSlider'
import CustomerReview from '../../components/Home/CustomerReview'
import VehicleSlider from '../../components/Home/VehicleSlider'


const Home = () => {
  return (
    <>
      <HomeCover/>
      {/* <HomeCoverNew/> */}
      <TourSlider/>
      <VehicleSlider/>
      <CustomerReview/>
    </>
  )
}

export default Home