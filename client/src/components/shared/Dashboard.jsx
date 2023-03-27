import React, { useEffect, useState } from 'react';
import * as d from './DashboardElements';
import { adminlinks, clientLinks } from '../../data/links';
import DashboardNav from './DashboardNav';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import {
  FiMap,
  FiTruck,
  FiUser,
  FiActivity,
  FiPlusCircle,
  FiBarChart2,
  FiBookOpen,
  FiSliders,
  FiXCircle,
} from 'react-icons/fi';

const Dashboard = ({ rightContainerContent }) => {
  const { user } = useAuth();

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/admin/tours/add');

  const [links, setLinks] = useState(adminlinks);

  const [nav, setNav] = useState(0);
  const [selected, setSelected] = useState(0);
  const [linkSelected, setLinkSelected] = useState(null);

  //   const currentUserRole = user?.role;
  const currentUserRole = 'admin';
  // const currentUserRole = 'user';

  useEffect(() => {
    switch (currentUserRole) {
      case 'admin':
        setLinks(adminlinks);
        break;
      case 'user':
        setLinks(clientLinks);
        break;
      default:
        break;
    }
    // setCurrentPath(location.pathname);
  }, [user]);

  return (
    <d.Conatiner>
      <d.ContainerLeft>
        <d.LeftTopContainer to='/'>
          <d.AvatarContainer />
          <d.LeftContainerNameContainer>
            <d.WelcomeText>Welcome ,</d.WelcomeText>
            <d.NameText>John Doe</d.NameText>
          </d.LeftContainerNameContainer>
        </d.LeftTopContainer>
        <d.HR />
        <d.LeftBottomContainer>
          <d.MenueBar>
            {links.map((e, i) => {
              return (
                <d.IconContainer
                  selected={selected === i ? true : false}
                  onClick={() => {
                    setNav(i);
                    setSelected(i);
                    setLinkSelected(null);
                  }}
                  key={i}
                >
                  {' '}
                  {e.icon}{' '}
                </d.IconContainer>
              );
            })}

            {/* {links.map((e, i) => {
                            return (
                                <d.IconContainer selected={selected === i ? true : false} onClick={() => {
                                    setNav(i)
                                    setSelected(i)
                                    setLinkSelected(null)
                                }} key={i} > {e.icon} </d.IconContainer>
                                
                            )
                        })} */}
          </d.MenueBar>
          <d.OptionsContainer>
            <d.OptionsTitle>{links[nav].resourceType}</d.OptionsTitle>
            {/* <d.OptionsTitle>Tours</d.OptionsTitle> */}
            {/* {links[nav].options.map((e, i) => {
                            return (
                                <d.OptionContainer
                                    selected={currentPath === e.redirectURL }
                                    onClick={
                                        () => {
                                            setCurrentPath(e.redirectURL)
                                        }
                                    }
                                    key={i}
                                    to={`${e.redirectURL}`}
                                >
                                    <d.OptionIconContainer>{e.icon}</d.OptionIconContainer>
                                    <d.Option>{e.text}</d.Option>
                                </d.OptionContainer>
                            )
                        })} */}
            {links[nav].options.map((e, i) => {
              return (
                <d.OptionContainer
                  // selected={linkSelected === i ? true : false}
                  // selected={currentPath === e.redirectURL }

                  onClick={() => {
                    // setLinkSelected(i)
                  }}
                  key={i}
                  to={`${e.redirectURL}`}
                >
                  <d.OptionIconContainer>{e.icon}</d.OptionIconContainer>
                  <d.Option>{e.text}</d.Option>
                </d.OptionContainer>
              );
            })}
          </d.OptionsContainer>
        </d.LeftBottomContainer>
      </d.ContainerLeft>

      <d.ContainerRight>
        <DashboardNav />
        {rightContainerContent}
      </d.ContainerRight>
    </d.Conatiner>
  );
};

export default Dashboard;
