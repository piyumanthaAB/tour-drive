import React from 'react'
import TourHeroComponent from '../../components/public/tours/TourHeroComponent'
import TourListComponent from '../../components/public/tours/TourListComponent'

import { tours } from '../../data/tours'

const Tours = () => {
  return (
    <>
      <TourHeroComponent />
      <TourListComponent tours={tours} />
    </>
  )
}

export default Tours