import React from 'react'
import Dashboard from '../../components/shared/Dashboard'
import AdminHomeComp from '../../components/admin/AdminHomeComp';
const AdminHome = () => {
  return (
    <>
      <Dashboard rightContainerContent={ <AdminHomeComp/>} />
    </>
  )
}

export default AdminHome