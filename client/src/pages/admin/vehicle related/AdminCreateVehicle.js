import React from 'react'
import AdminVehicleCreateForm from  '../../../components/admin/vehicle related/AdminVehicleCreateForm'
import Dashboard from '../../../components/shared/Dashboard'

const AdminCreateVehicle = () => {
    return (
        <>
            <Dashboard rightContainerContent=
                {
                    <>
                       <AdminVehicleCreateForm/> 
                    </>
                } />
        </>
    )
}

export default AdminCreateVehicle