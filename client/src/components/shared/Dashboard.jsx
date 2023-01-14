import React from 'react'
import * as d from './DashboardElements';
import { FiMap,FiTruck,FiUser,FiActivity,FiPlusCircle,FiBarChart2,FiBookOpen,FiSliders } from "react-icons/fi";

const Dashboard = ({rightContainerContent}) => {
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
                <d.HR/>
                <d.LeftBottomContainer>
                    <d.MenueBar>
                        <d.IconContainer> <FiMap/> </d.IconContainer>
                        <d.IconContainer> <FiTruck/> </d.IconContainer>
                        <d.IconContainer> <FiUser/> </d.IconContainer>
                        <d.IconContainer> <FiActivity/> </d.IconContainer>
                    </d.MenueBar>   
                    <d.OptionsContainer>
                        
                        <d.OptionsTitle>Tours</d.OptionsTitle>
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
                        </d.OptionContainer>

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