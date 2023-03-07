import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

const WithNav = () => {
  return (
    
    <>
      <Navbar />
      <Outlet />
      <Footer color={'#fff'} />
    </>
  )
}

export default WithNav