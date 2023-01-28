import React from 'react'
import { useState,useEffect } from 'react';
import * as n from './NavbarElements';
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/home');

  useEffect(() => {
    // console.log({ currentPath: location.pathname });
    setCurrentPath(location.pathname);
  },[location])


  return (
    <>
      <n.NavbarContainer>
        <n.NavBrandCOntainer to='/' />
        <n.NavLinksContainer>
          <n.NavLink selected={currentPath==='/'?true:false}  to='/'>Home</n.NavLink>
          <n.NavLink selected={currentPath==='/tours'?true:false}  to='/tours'>Tours</n.NavLink>
          <n.NavLink selected={currentPath==='/vehicles'?true:false}  to='/vehicles'>Vehicles</n.NavLink>
          <n.NavLink selected={currentPath==='/blog'?true:false}  to='/blog'>Blog</n.NavLink>
          <n.NavLink selected={currentPath==='/contact-us'?true:false}  to='/contact-us'>Contact Us</n.NavLink>
        </n.NavLinksContainer>
        <n.NavAuthButtonsContainer>
          <n.AuthButton to='/login' selected={false}>Login</n.AuthButton>
          <n.AuthButton to='/signup' selected={true}>Sign Up</n.AuthButton>
        </n.NavAuthButtonsContainer>
      </n.NavbarContainer>
    </>
  )
}

export default Navbar