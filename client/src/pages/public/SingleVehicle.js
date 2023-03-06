import React from 'react'
import CreateReviewForm from '../../components/public/single vehicle/CreateReviewForm'
import DisplayReviews from '../../components/public/single vehicle/DisplayReviews'
import ReviewSummary from '../../components/public/single vehicle/ReviewSummary'
import SIngleVehicleHEader from '../../components/public/single vehicle/SIngleVehicleHEader'
import SingleVehicleOverview from '../../components/public/single vehicle/SingleVehicleOverview'

const SingleVehicle = () => {
  return (
      <>
      <SIngleVehicleHEader />
      <SingleVehicleOverview />
      <ReviewSummary />
      <DisplayReviews />
      <CreateReviewForm/>
    </>
  )
}

export default SingleVehicle