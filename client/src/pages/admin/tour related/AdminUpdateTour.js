import React from 'react'
import UpdateTour from '../../../components/admin/tour related/UpdateTour'
import Dashboard from '../../../components/shared/Dashboard'

const AdminUpdateTour = () => {
  return (
      <>
          <Dashboard
              rightContainerContent={
                  <>
                      <UpdateTour/>
                  </>
              }
          />
    </>
  )
}

export default AdminUpdateTour