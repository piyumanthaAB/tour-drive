import React from 'react'
import Dashboard from '../../../components/shared/Dashboard'
import AdminVehicleUpdateForm from '../../../components/admin/vehicle related/AdminVehicleUpdateForm'

const AdminVehicleUpdate = () => {
    return (
        <>
            <Dashboard rightContainerContent=
                {
                    <>
                       <AdminVehicleUpdateForm/> 
                    </>
                } />
        </>
    )
}

export default AdminVehicleUpdate