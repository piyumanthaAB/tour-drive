import React from 'react';
import * as t from './SingleVehicleElements';
import { FiMapPin } from 'react-icons/fi';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { RxCalendar } from 'react-icons/rx';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Rating from 'react-rating';

import { BsSpeedometer2 } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdAirlineSeatReclineNormal, MdLocalGasStation } from 'react-icons/md';
const SIngleVehicleHEader = ({ vehicle }) => {
  // console.log({ vehicle });

  return (
    <>
      <t.HeaderSection>
        <t.HeaderTitleContainer>
          <t.HeaderMainTitle>{`${vehicle.brand} ${vehicle.model}`}</t.HeaderMainTitle>
          <t.HeaderSubTitleContainer>
            {/* <t.IconContainer>
                          <FiMapPin color='var(--main-color)' />
                      </t.IconContainer>

                      <t.HeaderSubTitle>Auto, Petrol</t.HeaderSubTitle> */}

            <t.ReviewsContainer>
              <Rating
                emptySymbol={<BsFillStarFill color="#888" size={15} />}
                fullSymbol={
                  <BsFillStarFill color={'var(--main-color)'} size={15} />
                }
                initialRating={
                  (vehicle?.driverRatingsAverage +
                    vehicle?.vehicleRatingsAverage) /
                    2 || 0
                }
                readonly
              />
              <t.HeaderReviewText>
                ( {vehicle.ratingsQuantity} reviews )
              </t.HeaderReviewText>
            </t.ReviewsContainer>
          </t.HeaderSubTitleContainer>
        </t.HeaderTitleContainer>

        <t.HeaderGalleryContainer>
          {vehicle.images_URL.map((img, i) => {
            return (
              <t.HeaderImgContainer
                img={`${process.env.PUBLIC_URL}/vehicle-uploads/${img}`}
              />
            );
          })}
        </t.HeaderGalleryContainer>

        <t.HeaderIconCardsContainer>
          <t.IconCard>
            <t.IconContainer fontsize={'3rem'}>
              {' '}
              <BsSpeedometer2 color="var(--main-color)" />{' '}
            </t.IconContainer>
            <t.IconCardTextContainer>
              <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>
                Milage
              </t.IconContainerText>
              <t.IconContainerText
                color={'#777'}
                fontsize={'1.5rem'}
                fontweight={'500'}
              >
                {vehicle.milage || 'not available'}
              </t.IconContainerText>
            </t.IconCardTextContainer>
          </t.IconCard>
          <t.IconCard>
            <t.IconContainer fontsize={'3rem'}>
              {' '}
              <TbManualGearbox color="var(--main-color)" />{' '}
            </t.IconContainer>
            <t.IconCardTextContainer>
              <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>
                Transmission
              </t.IconContainerText>
              <t.IconContainerText
                color={'#777'}
                fontsize={'1.5rem'}
                fontweight={'500'}
              >
                {vehicle.transmission || 'not available'}
              </t.IconContainerText>
            </t.IconCardTextContainer>
          </t.IconCard>
          <t.IconCard>
            <t.IconContainer fontsize={'3rem'}>
              {' '}
              <MdAirlineSeatReclineNormal color="var(--main-color)" />{' '}
            </t.IconContainer>
            <t.IconCardTextContainer>
              <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>
                Seats
              </t.IconContainerText>
              <t.IconContainerText
                color={'#777'}
                fontsize={'1.5rem'}
                fontweight={'500'}
              >
                {vehicle.seats} Adults
              </t.IconContainerText>
            </t.IconCardTextContainer>
          </t.IconCard>
          <t.IconCard>
            <t.IconContainer fontsize={'3rem'}>
              {' '}
              <MdLocalGasStation color="var(--main-color)" />{' '}
            </t.IconContainer>
            <t.IconCardTextContainer>
              <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>
                Fuel
              </t.IconContainerText>
              <t.IconContainerText
                color={'#777'}
                fontsize={'1.5rem'}
                fontweight={'500'}
              >
                {vehicle.fuel || 'not available'}
              </t.IconContainerText>
            </t.IconCardTextContainer>
          </t.IconCard>
        </t.HeaderIconCardsContainer>
      </t.HeaderSection>
    </>
  );
};

export default SIngleVehicleHEader;
