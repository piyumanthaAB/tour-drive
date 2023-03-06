import React from 'react'
import * as t from './SingleVehicleElements';
import { FiMapPin} from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { RxCalendar } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

import { BsSpeedometer2 } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { MdAirlineSeatReclineNormal ,MdLocalGasStation} from "react-icons/md";
const SIngleVehicleHEader = () => {
  return (
      <>
          <t.HeaderSection>
              
              <t.HeaderTitleContainer>
                  <t.HeaderMainTitle>Mercedes Grand Sedan</t.HeaderMainTitle>
                  <t.HeaderSubTitleContainer>
                      
                      {/* <t.IconContainer>
                          <FiMapPin color='var(--main-color)' />
                      </t.IconContainer>

                      <t.HeaderSubTitle>Auto, Petrol</t.HeaderSubTitle> */}

                      <t.ReviewsContainer>
                          <t.IconContainer color='var(--main-color)' width={'2rem'} height={'2rem'}>
                              <AiFillStar />
                          </t.IconContainer>
                          <t.IconContainer color='var(--main-color)' width={'2rem'} height={'2rem'}>
                              <AiFillStar />
                          </t.IconContainer>
                          <t.IconContainer color='var(--main-color)' width={'2rem'} height={'2rem'}>
                              <AiFillStar />
                          </t.IconContainer>
                          <t.IconContainer color='var(--main-color)' width={'2rem'} height={'2rem'}>
                              <AiOutlineStar />
                          </t.IconContainer>
                          <t.IconContainer color='var(--main-color)' width={'2rem'} height={'2rem'}>
                              <AiOutlineStar />
                          </t.IconContainer>
                          <t.HeaderReviewText>
                              ( 3 reviews )
                          </t.HeaderReviewText>
                      </t.ReviewsContainer>

                  </t.HeaderSubTitleContainer>
              </t.HeaderTitleContainer>

              <t.HeaderGalleryContainer>
                  <t.HeaderImgContainer img={'https://c.ndtvimg.com/2021-12/2jmp60hg_mercedesbenz-eqs_625x300_11_December_21.jpg'} />
                  <t.HeaderImgContainer img={'https://impx.hwntcdn.com/i/raw:1/plain/https://composer.hwntcdn.com/39/used/mercedes-benz-s-class-s-350-d-l-grand-ed-d493db6f99704ae.jpg'} />
                  <t.HeaderImgContainer img={'https://images.squarespace-cdn.com/content/v1/5842abb215d5dbb709f2fd87/1482248116618-63J4YWP4BMMN5I0WTTB7/Gstaad+Limousine+Service+by+Taxi+Simon+Fleet+S+trunk'} />
                
              </t.HeaderGalleryContainer>

              <t.HeaderIconCardsContainer>
                  <t.IconCard>
                      <t.IconContainer fontsize={'3rem'} > <BsSpeedometer2 color='var(--main-color)' /> </t.IconContainer>
                      <t.IconCardTextContainer>
                          <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>Milage</t.IconContainerText>
                          <t.IconContainerText color={'#777'} fontsize={'1.5rem'} fontweight={'500'}>40,000</t.IconContainerText>
                      </t.IconCardTextContainer>
                  </t.IconCard>
                  <t.IconCard>
                      <t.IconContainer fontsize={'3rem'} > <TbManualGearbox color='var(--main-color)' /> </t.IconContainer>
                      <t.IconCardTextContainer>
                          <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>Transmission</t.IconContainerText>
                          <t.IconContainerText color={'#777'} fontsize={'1.5rem'} fontweight={'500'}>Auto</t.IconContainerText>
                      </t.IconCardTextContainer>
                  </t.IconCard>
                  <t.IconCard>
                      <t.IconContainer fontsize={'3rem'} > <MdAirlineSeatReclineNormal color='var(--main-color)' /> </t.IconContainer>
                      <t.IconCardTextContainer>

                          <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>Seats</t.IconContainerText>
                          <t.IconContainerText color={'#777'} fontsize={'1.5rem'} fontweight={'500'}>5 Adults</t.IconContainerText>
                      </t.IconCardTextContainer>
                  </t.IconCard>
                  <t.IconCard>
                      <t.IconContainer fontsize={'3rem'} > <MdLocalGasStation color='var(--main-color)' /> </t.IconContainer>
                      <t.IconCardTextContainer>

                          <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>Fuel</t.IconContainerText>
                          <t.IconContainerText color={'#777'} fontsize={'1.5rem'} fontweight={'500'}>Petrol</t.IconContainerText>
                      </t.IconCardTextContainer>
                  </t.IconCard>
              </t.HeaderIconCardsContainer>
          </t.HeaderSection>
    </>
  )
}

export default SIngleVehicleHEader