import React from 'react'
import HomeCover from '../../components/Home/HomeCover'
import HomeCoverNew from '../../components/Home/HomeCoverNew'
import TourSlider from '../../components/Home/TourSlider'
import CustomerReview from '../../components/Home/CustomerReview'


const Home = () => {
  return (
    <>
      <HomeCover/>
      {/* <HomeCoverNew/> */}
      <TourSlider/>
      {/* <CustomerReview/> */}
    </>
  )
}

export default Home