import React from 'react';
import * as t from './SingleTourHeaderElements';
import { FiMapPin } from 'react-icons/fi';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { RxCalendar } from 'react-icons/rx';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
const SigleTourHeader = ({
  name,
  duration,
  capacity,
  age_limit,
  tour_gallery,
}) => {
  console.log({ name });
  return (
    <>
      <t.HeaderSection>
        <t.HeaderTitleContainer>
          <t.HeaderMainTitle>
            {name} – {duration} Days
          </t.HeaderMainTitle>
          <t.HeaderSubTitleContainer>
            <t.IconContainer>
              <FiMapPin color='var(--main-color)' />
            </t.IconContainer>

            <t.HeaderSubTitle>Dambulla, Sri Lanka</t.HeaderSubTitle>

            <t.ReviewsContainer>
              <t.IconContainer
                color='var(--main-color)'
                width={'2rem'}
                height={'2rem'}
              >
                <AiFillStar />
              </t.IconContainer>
              <t.IconContainer
                color='var(--main-color)'
                width={'2rem'}
                height={'2rem'}
              >
                <AiFillStar />
              </t.IconContainer>
              <t.IconContainer
                color='var(--main-color)'
                width={'2rem'}
                height={'2rem'}
              >
                <AiFillStar />
              </t.IconContainer>
              <t.IconContainer
                color='var(--main-color)'
                width={'2rem'}
                height={'2rem'}
              >
                <AiOutlineStar />
              </t.IconContainer>
              <t.IconContainer
                color='var(--main-color)'
                width={'2rem'}
                height={'2rem'}
              >
                <AiOutlineStar />
              </t.IconContainer>
              <t.HeaderReviewText>( 3 reviews )</t.HeaderReviewText>
            </t.ReviewsContainer>
          </t.HeaderSubTitleContainer>
        </t.HeaderTitleContainer>

        <t.HeaderGalleryContainer>
          {tour_gallery.map((img, i) => {
            return (
              <t.HeaderImgContainer
                img={`${process.env.PUBLIC_URL}/tour-uploads/${img}`}
              />
            );
          })}

          {/* <t.HeaderImgContainer
            img={'https://www.gov.lk/assets/images/theme2/5.jpg'}
          />
          <t.HeaderImgContainer
            img={
              'https://travellersworldwide.com/wp-content/uploads/2022/12/Shutterstock_1046627314.jpg.webp'
            }
          /> */}
        </t.HeaderGalleryContainer>

        <t.HeaderIconCardsContainer>
          <t.IconCard>
            <t.IconContainer fontsize={'3rem'}>
              {' '}
              <RxCalendar color='var(--main-color)' />{' '}
            </t.IconContainer>
            <t.IconCardTextContainer>
              <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>
                Duration
              </t.IconContainerText>
              <t.IconContainerText
                color={'#777'}
                fontsize={'1.5rem'}
                fontweight={'500'}
              >
                {duration} Days
              </t.IconContainerText>
            </t.IconCardTextContainer>
          </t.IconCard>
          <t.IconCard>
            <t.IconContainer fontsize={'3rem'}>
              {' '}
              <HiOutlineUserGroup color='var(--main-color)' />{' '}
            </t.IconContainer>
            <t.IconCardTextContainer>
              <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>
                Max People
              </t.IconContainerText>
              <t.IconContainerText
                color={'#777'}
                fontsize={'1.5rem'}
                fontweight={'500'}
              >
                {capacity}
              </t.IconContainerText>
            </t.IconCardTextContainer>
          </t.IconCard>
          <t.IconCard>
            <t.IconContainer fontsize={'3rem'}>
              {' '}
              <AiOutlineUser color='var(--main-color)' />{' '}
            </t.IconContainer>
            <t.IconCardTextContainer>
              <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>
                Min Age
              </t.IconContainerText>
              <t.IconContainerText
                color={'#777'}
                fontsize={'1.5rem'}
                fontweight={'500'}
              >
                {age_limit}
              </t.IconContainerText>
            </t.IconCardTextContainer>
          </t.IconCard>
          <t.IconCard>
            <t.IconContainer fontsize={'3rem'}>
              {' '}
              <FiMapPin color='var(--main-color)' />{' '}
            </t.IconContainer>
            <t.IconCardTextContainer>
              <t.IconContainerText fontsize={'1.8rem'} fontweight={'600'}>
                Pickup
              </t.IconContainerText>
              <t.IconContainerText
                color={'#777'}
                fontsize={'1.5rem'}
                fontweight={'500'}
              >
                Airport
              </t.IconContainerText>
            </t.IconCardTextContainer>
          </t.IconCard>
        </t.HeaderIconCardsContainer>
      </t.HeaderSection>
    </>
  );
};

export default SigleTourHeader;
