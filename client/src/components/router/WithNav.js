import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'

const WithNav = () => {
  return (
    
      <>
          <Navbar />
          <Outlet/>
      </>
  )
}

export default WithNav