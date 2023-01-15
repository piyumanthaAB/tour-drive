import React, { useEffect, useState } from 'react'
import * as d from './DashboardElements';
import { adminlinks,clientLinks } from '../../data/links';
import DashboardNav from './DashboardNav';

const Dashboard = ({ rightContainerContent }) => {

    const [nav, setNav] = useState(0)
    const [links, setLinks] = useState(adminlinks);
    const [selected, setSelected] = useState(0);
    const [linkSelected, setLinkSelected] = useState(null);

    const currentUserRole = 'admin'
    
    useEffect(() => {
       switch (currentUserRole) {
        case 'admin':
               setLinks(adminlinks);
            break;
           case 'client':
               setLinks(clientLinks)
               break;       
        default:
            break;
       } 
    },[])

    return (
        <d.Conatiner>
            <d.ContainerLeft>
                
                <d.LeftTopContainer>
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
                                <d.IconContainer selected={selected === i ? true : false} onClick={() => {
                                    setNav(i)
                                    setSelected(i)
                                    setLinkSelected(null)
                                }} key={i} > {e.icon} </d.IconContainer>
                                
                            )
                        })}
                    </d.MenueBar>
                    <d.OptionsContainer>
                        
                        <d.OptionsTitle>{links[nav].resourceType}</d.OptionsTitle>
                        {links[nav].options.map((e, i) => {
                            return (
                                <d.OptionContainer
                                    selected={linkSelected === i ? true : false}
                                    onClick={
                                        () => {
                                            setLinkSelected(i)
                                        }
                                    }
                                    key={i}
                                    to={`${e.redirectURL}`}
                                >
                                    <d.OptionIconContainer>{e.icon}</d.OptionIconContainer>
                                    <d.Option>{e.text}</d.Option>
                                </d.OptionContainer>
                            )
                        })}

                    </d.OptionsContainer>
                                      
                                    
                </d.LeftBottomContainer>

            </d.ContainerLeft>
    
            <d.ContainerRight>
                <DashboardNav/>
                {rightContainerContent}
            </d.ContainerRight>
        </d.Conatiner>
    );
}

export default Dashboard