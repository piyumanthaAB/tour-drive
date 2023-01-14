import React from 'react'
import Dashboard from '../../components/shared/Dashboard'
import ClientHomeComp from './../../components/client/ClientHomeComp';
const ClientHome = () => {
  return (
    <>
          <Dashboard rightContainerContent={ <ClientHomeComp/>} />


    </>
  )
}

export default ClientHome