import React from 'react'
import { useState } from 'react';
import * as n from './NavbarElements';

const Navbar = () => {

  const [selected, setSelected] = useState('home');

  return (
    <>
      <n.NavbarContainer>
        <n.NavBrandCOntainer to='/' />
        <n.NavLinksContainer>
          <n.NavLink selected={selected==='home'?true:false} onClick={()=>setSelected('home')} to='/'>Home</n.NavLink>
          <n.NavLink selected={selected==='tours'?true:false} onClick={()=>setSelected('tours')} to='/tours'>Tours</n.NavLink>
          <n.NavLink selected={selected==='vehicles'?true:false} onClick={()=>setSelected('vehicles')} to='/vehicles'>Vehicles</n.NavLink>
          <n.NavLink selected={selected==='blog'?true:false} onClick={()=>setSelected('blog')} to='/blog'>Blog</n.NavLink>
          <n.NavLink selected={selected==='contact'?true:false} onClick={()=>setSelected('contact')} to='/contact-us'>Contact Us</n.NavLink>
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