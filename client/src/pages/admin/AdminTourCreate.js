import React from 'react'
import Dashboard from '../../components/shared/Dashboard'
import AdminTourCreateForm from './../../components/admin/AdminTourCreateForm'

const AdminTourCreate = () => {
    return (
        <>
            <Dashboard rightContainerContent={
                <>
                    <h1>this is AdminTourCreate PAGE 🫡</h1>
                    <AdminTourCreateForm />
                </>
            } />
            
            
        </>
      
    )
};

export default AdminTourCreate