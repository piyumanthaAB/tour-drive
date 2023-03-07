import React from 'react'
import Dashboard from '../../../components/shared/Dashboard'
import AdminTourCreateForm from '../../../components/admin/tour related/AdminTourCreateForm'

const AdminTourCreate = () => {
    return (
        <>
            <Dashboard rightContainerContent={
                <>
                    
                    <AdminTourCreateForm />
                </>
            } />
            
            
        </>
      
    )
};

export default AdminTourCreate