import React, { useState } from 'react'
import { GoPrimitiveDot } from "react-icons/go";
import { BiPurchaseTag } from "react-icons/bi";
import { TbTag } from "react-icons/tb";
import { AiOutlineCompass,AiOutlineCar } from "react-icons/ai";
import { FiKey } from "react-icons/fi";

import * as o from './SingleVehicleOverviewElements';
import DropDown from '../../shared/Form Elements/DropDown';


const SingleVehicleOverview = () => {
    const [drivingOptDropdownVal, setDrivingOptDropdownVal] = useState('Select driving option');
    const drivingOptDropDownValues=['With driver','Without driver']
  return (
      <>
          <o.OverviewSection>
                
                <o.TourBookingContainer>
                    
                    <o.BookingTopContainer>
                        
                        <o.PriceTagContainer>
                            <o.IconContainer color='var(--main-color)' fontsize={'3rem'}>
                                <TbTag />
                            </o.IconContainer>
                            <o.Text margin={'0 1rem'} fontsize={'2rem'} fontweight={'600'}> Per day</o.Text>
                        </o.PriceTagContainer>

                        <o.Text color='#00bb98' margin={'2rem 1rem'} fontsize={'4rem'} fontweight={'600'}> $9.99</o.Text>
                    </o.BookingTopContainer>

                    {/* <o.HR /> */}

                    <o.BookingBodyContainer>
                        <o.Group>
                            <o.Text color='#555' margin={'1rem 1rem'} fontsize={'1.8rem'} fontweight={'600'}> From</o.Text>
                            <o.DateInput type={'date'}/>

                        </o.Group>
                        <o.Group>
                            <o.Text color='#555' margin={'1rem 1rem'} fontsize={'1.8rem'} fontweight={'600'}> To</o.Text>
                              <o.DateInput type={'date'}/>
                        </o.Group>
                        <o.Group>
                            <o.Text color='#555' margin={'1rem 1rem'} fontsize={'1.8rem'} fontweight={'600'}> Driving Option</o.Text>
                            
                          <DropDown
                              dropDownValues={drivingOptDropDownValues}
                              currentDropdownVal={drivingOptDropdownVal}
                              setCurrentDropdownVal={setDrivingOptDropdownVal } />
                        </o.Group>
                        


                    </o.BookingBodyContainer>

                    <o.BookNowBtn >
                        <o.Text color='#fff' margin='0 1rem 0 0' fontsize={'1.7rem'}  fontweight='600'>Rent Now</o.Text>
                        <o.IconContainer color='#fff' fontsize={'2rem'}>
                            <AiOutlineCar />
                        </o.IconContainer>
                    </o.BookNowBtn>

                </o.TourBookingContainer>
                
                
                <o.OverviewContainer>
                    <o.Text margin={'1rem 0 2rem 0'} color='#222' fontsize={'4.5rem'} fontweight={'700'} >Description</o.Text>
                    <o.Text margin={'1rem 0 2rem 0'} color='#333' fontsize={'1.7rem'} fontweight={'500'} fontfamily={'var(--primary-font)'}>
                      The Mercedes Grand Sedan is a luxurious and high-performance sedan that offers the
                      ultimate driving experience for those who crave power, comfort, and style. This vehicle
                      boasts a sleek and elegant design that is complemented by its refined interior, which features
                      premium materials and cutting-edge technology. The Grand Sedan is equipped with a powerful engine
                      that delivers exceptional performance and speed, making it an ideal choice for drivers who enjoy
                      the thrill of driving.
                    </o.Text>
                    <o.Text margin={'1rem 0 2rem 0'} color='#333' fontsize={'1.7rem'} fontweight={'500'} fontfamily={'var(--primary-font)'}>
                    In addition to its impressive performance capabilities, the Mercedes Grand Sedan is also loaded with advanced safety features and driver assistance technologies that make it one of the safest vehicles on the road.                     </o.Text>
                    {/* <o.Text margin={'1rem 0 2rem 0'} color='#333' fontsize={'1.7rem'} fontweight={'500'} fontfamily={'var(--primary-font)'}>
                    The sedan is equipped with adaptive cruise control, automatic emergency braking, lane departure warning, and blind-spot monitoring, among other features. With its exceptional performance, luxurious interior, and advanced safety technologies, the Mercedes Grand Sedan is a top choice for drivers who demand the best in luxury and performance.</o.Text> */}
                </o.OverviewContainer>
                <o.TourHighlightContainer>
                    <o.Text margin={'1rem 0 2rem 0'} color='#222' fontsize={'2.5rem'} fontweight={'600'} >Features</o.Text>
                    
                  <o.HighLightRow>
                      
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                        Powerful engine that delivers exceptional performance and speed
                        </o.Text>
                  </o.HighLightRow>
                  
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                        Advanced safety features, including adaptive cruise control, automatic emergency braking, lane departure warning, and blind-spot monitoring
                        </o.Text>
                    </o.HighLightRow>
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                        Driver assistance technologies, such as parking assistance and rearview camera
                        </o.Text>
                    </o.HighLightRow>
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                        High-quality sound system and entertainment system with cutting-edge technology
                        </o.Text>
                    </o.HighLightRow>
                    <o.HighLightRow>
                        <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                            <GoPrimitiveDot />
                        </o.IconContainer>
                        <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '} >
                        Comfortable seating with ample legroom and headroom for both front and rear passengers
                        </o.Text>
                    </o.HighLightRow>

                </o.TourHighlightContainer>
            </o.OverviewSection>
    </>
  )
}

export default SingleVehicleOverview