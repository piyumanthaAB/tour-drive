import React from 'react';
import * as n from './DashboardNavElements';
import { TbMessages, TbLogout } from 'react-icons/tb';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const DashboardNav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <n.Container>
        <n.NavContainer>
          <n.NavBrand to={'/'} />
          <n.NavLinksContainer>
            <n.NavBtn
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              <TbLogout />
            </n.NavBtn>
          </n.NavLinksContainer>
        </n.NavContainer>
      </n.Container>
    </>
  );
};

export default DashboardNav;
