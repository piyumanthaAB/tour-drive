import React from 'react';
import { useState, useEffect } from 'react';
import * as n from './NavbarElements';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/home');
  const { isAuthenticated, logout } = useAuth();

  const authLinks = [
    {
      text: 'Login',
      selected: false,
      url: '/login',
    },
    {
      text: 'Signup',
      selected: true,
      url: '/signup',
    },
  ];
  const generalLinks = [
    {
      text: 'Logout',
      selected: true,
      url: '/',
      onClick: logout,
    },
  ];

  const [links, setLinks] = useState(generalLinks);

  useEffect(() => {
    // console.log({ currentPath: location.pathname });
    setCurrentPath(location.pathname);

    if (isAuthenticated) {
      setLinks(generalLinks);
    } else {
      setLinks(authLinks);
    }
  }, [location, isAuthenticated]);

  return (
    <>
      <n.NavbarContainer>
        <n.NavBrandCOntainer to="/" />
        <n.NavLinksContainer>
          <n.NavLink selected={currentPath === '/' ? true : false} to="/">
            Home
          </n.NavLink>
          <n.NavLink
            selected={currentPath === '/tours' ? true : false}
            to="/tours"
          >
            Tours
          </n.NavLink>
          <n.NavLink
            selected={currentPath === '/vehicles' ? true : false}
            to="/vehicles"
          >
            Vehicles
          </n.NavLink>
          <n.NavLink
            selected={currentPath === '/blogs' ? true : false}
            to="/blogs"
          >
            Blog
          </n.NavLink>
          <n.NavLink
            selected={currentPath === '/contact-us' ? true : false}
            to="/contact-us"
          >
            Contact Us
          </n.NavLink>
        </n.NavLinksContainer>
        <n.NavAuthButtonsContainer>
          {links.map((link, i) => {
            return (
              <n.AuthButton
                onClick={() => {
                  link.onClick && link.onClick();
                }}
                key={i}
                to={`${link.url}`}
                selected={link.selected}
              >
                {link.text}
              </n.AuthButton>
            );
          })}
        </n.NavAuthButtonsContainer>
      </n.NavbarContainer>
    </>
  );
};

export default Navbar;
