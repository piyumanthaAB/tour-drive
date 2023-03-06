import React from 'react'
import Dashboard from '../../../components/shared/Dashboard'
import AdminVehicleViewForm from '../../../components/admin/vehicle related/AdminVehicleViewForm'

const AdminVehicleView = () => {
    return (
        <>
            <Dashboard rightContainerContent=
                {
                    <>
                       <AdminVehicleViewForm/> 
                    </>
                } />
        </>
    )
}

export default AdminVehicleView