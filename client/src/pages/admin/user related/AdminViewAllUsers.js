import React from 'react'
import ViewAllUsers from '../../../components/admin/user related/ViewAllUsers'
import Dashboard from '../../../components/shared/Dashboard'

const AdminViewAllUsers = () => {
  return (
      <>
          <Dashboard
              rightContainerContent={
                  <>
                      <ViewAllUsers/>
                  </>
              }
          />
    </>
  )
}

export default AdminViewAllUsers