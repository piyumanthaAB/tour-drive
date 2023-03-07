import React from 'react'
import VehicleHeroComponent from '../../components/public/vehicles/VehicleHero';
import VehicleListComp from '../../components/public/vehicles/VehicleListComp';
// import TourListComponent from '../../components/public/tours/TourListComponent'

 import { vehicles } from '../../data/vehicles'

const Tours = () => {
  return (
    <>
      <VehicleHeroComponent />
      <VehicleListComp vehicles={vehicles} />
    </>
  )
}

export default Tours