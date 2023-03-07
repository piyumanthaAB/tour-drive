import React from 'react'
import { TourBookings } from '../../../components/client/ViewTourBookings'
import Dashboard from '../../../components/shared/Dashboard'

const ViewTourBookings = () => {
  return (
      <>
          <Dashboard
              rightContainerContent={
                  <>
                      <TourBookings/>
                  </>
              }
          />
    </>
  )
}

export default ViewTourBookings