import React, { useEffect, useState } from 'react'
import * as d from './DashboardElements';
import { adminlinks,clientLinks } from '../../data/links';

const Dashboard = ({ rightContainerContent }) => {

    const [nav, setNav] = useState(1)
    const [links, setLinks] = useState(adminlinks);

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
                        {links.map((e,i) => {
                            return (
                                <d.IconContainer onClick={() => {
                                    setNav(i)
                                }} key={i} > {e.icon} </d.IconContainer>
                                
                            )
                        })}
                    </d.MenueBar>
                    <d.OptionsContainer>
                        
                        <d.OptionsTitle>{links[nav].resourceType}</d.OptionsTitle>
                        {links[nav].options.map((e,i) => {
                            return (
                                <d.OptionContainer key={i} to={`${e.redirectURL}`}>
                                    <d.OptionIconContainer>{e.icon}</d.OptionIconContainer>
                                    <d.Option>{e.text}</d.Option>
                                </d.OptionContainer>
                            )
                        })}
                        
                        {/* <d.OptionsTitle>Tours</d.OptionsTitle>
                        <d.OptionContainer>
                            <d.OptionIconContainer><FiBarChart2/></d.OptionIconContainer>
                            <d.Option>Tour Statistics</d.Option>
                        </d.OptionContainer>
                        <d.OptionContainer>
                            <d.OptionIconContainer><FiPlusCircle/></d.OptionIconContainer>
                            <d.Option>Add Tours</d.Option>
                        </d.OptionContainer>
                        <d.OptionContainer>
                            <d.OptionIconContainer><FiSliders/></d.OptionIconContainer>
                            <d.Option>Update Tours</d.Option>
                        </d.OptionContainer>
                        <d.OptionContainer>
                            <d.OptionIconContainer><FiBookOpen/></d.OptionIconContainer>
                            <d.Option>View All Bookings</d.Option>
                        </d.OptionContainer> */}

                    </d.OptionsContainer>
                                      
                                    
                </d.LeftBottomContainer>

            </d.ContainerLeft>
    
            <d.ContainerRight>
                {rightContainerContent}
            </d.ContainerRight>
        </d.Conatiner>
    )
}

export default Dashboard