import React from 'react';
import * as o from './SingleTourOverviewElements';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiPurchaseTag } from 'react-icons/bi';
import { TbTag } from 'react-icons/tb';
import { AiOutlineCompass } from 'react-icons/ai';
import axios from 'axios';

const SIngleTourOverview = ({ description, highlights, price }) => {
  const onCheckout = async () => {
    const tourData = {
      name: 'sample-tour-1',
      price: '20',
    };

    try {
      const res = await axios.post('/api/v1/booking/create-checkout-session', {
        tourData,
      });

      if (res.status === 201) {
        window.location.href = res.data.data.url;
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <o.OverviewSection>
        <o.TourBookingContainer>
          <o.BookingTopContainer>
            <o.PriceTagContainer>
              <o.IconContainer color='var(--main-color)' fontsize={'3rem'}>
                <TbTag />
              </o.IconContainer>
              <o.Text margin={'0 1rem'} fontsize={'2rem'} fontweight={'600'}>
                {' '}
                From
              </o.Text>
            </o.PriceTagContainer>

            <o.Text
              color='#00bb98'
              margin={'2rem 1rem'}
              fontsize={'4rem'}
              fontweight={'600'}
            >
              {' '}
              ${price}
            </o.Text>
          </o.BookingTopContainer>

          {/* <o.HR /> */}

          <o.BookingBodyContainer>
            <o.Group>
              <o.Text
                color='#555'
                margin={'1rem 1rem'}
                fontsize={'1.8rem'}
                fontweight={'600'}
              >
                {' '}
                Check In
              </o.Text>
              <o.DateInput type={'date'} />
            </o.Group>
            <o.Group>
              <o.Text
                color='#555'
                margin={'1rem 1rem'}
                fontsize={'1.8rem'}
                fontweight={'600'}
              >
                {' '}
                Check Out
              </o.Text>
              <o.DateInput type={'date'} />
            </o.Group>
            <o.Group>
              <o.Text
                color='#555'
                margin={'1rem 1rem'}
                fontsize={'1.8rem'}
                fontweight={'600'}
              >
                {' '}
                Available Seats
              </o.Text>
              <o.Banner>
                <o.Text
                  fontfamily={'var(--secondary-font)'}
                  color='#555'
                  fontsize={'1.5rem'}
                  fontweight={'500'}
                >
                  {' '}
                  10
                </o.Text>
              </o.Banner>
            </o.Group>
          </o.BookingBodyContainer>

          <o.BookNowBtn onClick={onCheckout}>
            <o.Text
              color='#fff'
              margin='0 1rem 0 0'
              fontsize={'1.7rem'}
              fontweight='600'
            >
              Book Now
            </o.Text>
            <o.IconContainer color='#fff' fontsize={'2rem'}>
              <AiOutlineCompass />
            </o.IconContainer>
          </o.BookNowBtn>
        </o.TourBookingContainer>

        <o.OverviewContainer>
          <o.Text
            margin={'1rem 0 2rem 0'}
            color='#222'
            fontsize={'4.5rem'}
            fontweight={'700'}
          >
            Overview
          </o.Text>
          <o.Text
            margin={'1rem 0 4rem 0'}
            color='#333'
            fontsize={'1.7rem'}
            fontweight={'500'}
            fontfamily={'var(--primary-font)'}
          >
            {description}
          </o.Text>
        </o.OverviewContainer>
        <o.TourHighlightContainer>
          <o.Text
            margin={'1rem 0 2rem 0'}
            color='#222'
            fontsize={'2.5rem'}
            fontweight={'600'}
          >
            Tour Highlights
          </o.Text>
          {highlights.map((item, i) => {
            return (
              <o.HighLightRow key={i}>
                <o.IconContainer fontsize={'1.8rem'} color='var(--main-color)'>
                  <GoPrimitiveDot />
                </o.IconContainer>
                <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '}>
                  {item}
                </o.Text>
              </o.HighLightRow>
            );
          })}
        </o.TourHighlightContainer>
      </o.OverviewSection>
    </>
  );
};

export default SIngleTourOverview;
