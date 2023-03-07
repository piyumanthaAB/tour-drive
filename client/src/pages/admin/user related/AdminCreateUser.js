import React from 'react'
import AdminUserCreateForm from '../../../components/admin/user related/AdminUserCreateForm'
import Dashboard from '../../../components/shared/Dashboard'

const AdminCreateUser = () => {
  return (
      <>
          <Dashboard rightContainerContent={
              <>
                  <AdminUserCreateForm/>
              </>
          } 
              
          />
    </>
  )
}

export default AdminCreateUser