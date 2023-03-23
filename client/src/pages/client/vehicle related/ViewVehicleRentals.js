import React from 'react'
import { VehicleRentals } from '../../../components/client/ViewVehicleRentals'
import Dashboard from '../../../components/shared/Dashboard'

const ViewVehicleRentals = () => {
  return (
      <>
          <Dashboard
              rightContainerContent={
                  <>
                      <VehicleRentals/>
                  </>
              }
          />
    </>
  )
}

export default ViewVehicleRentals