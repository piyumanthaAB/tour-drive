import React from 'react'
import UpdateUser from '../../../components/admin/user related/UpdateUser'
import Dashboard from '../../../components/shared/Dashboard'

const AdminUpdateUser = () => {
  return (
      <>
          <Dashboard
              rightContainerContent={
                  <>
                      <UpdateUser/>
                  </>
              }
          />
    </>
  )
}

export default AdminUpdateUser