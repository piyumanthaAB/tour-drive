import React from 'react'
import { ViewAllToursForm } from '../../../components/admin/tour related/ViewAllTours'
import Dashboard from './../../../components/shared/Dashboard'

const ViewAllTours = () => {
  return (
      <>
          <Dashboard
              rightContainerContent={
                  <>
                      <ViewAllToursForm/>
                  </>
              }
          />
    </>
  )
}

export default ViewAllTours