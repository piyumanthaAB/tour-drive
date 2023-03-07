import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

const WithColoredFooter = () => {
  return (
    
    <>
      <Navbar />
      <Outlet />
      <Footer color={'#1A1A3D'} textColor={'#ddd'} headingColor={ '#fff'} iconColor={'#999'} />
    </>
  )
}

export default WithColoredFooter