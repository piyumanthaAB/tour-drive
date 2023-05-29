import React, { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { BiPurchaseTag } from 'react-icons/bi';
import { TbTag } from 'react-icons/tb';
import { AiOutlineCompass, AiOutlineCar } from 'react-icons/ai';
import { FiKey } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import * as o from './SingleVehicleOverviewElements';
import DropDown from '../../shared/Form Elements/DropDown';
import useAuth from './../../../hooks/useAuth';
import axios from 'axios';

const SingleVehicleOverview = ({ vehicle }) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [drivingOptDropdownVal, setDrivingOptDropdownVal] = useState({
    label: 'Without driver',
    value: 'Without driver',
  });
  const drivingOptDropDownValues = [
    { label: 'With driver', value: 'With driver' },
    { label: 'Without driver', value: 'Without driver' },
  ];

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const onCheckout = async () => {
    // console.log({ user, tour });

    if (!isAuthenticated) {
      navigate(
        `/login?redirect=${encodeURIComponent(window.location.pathname)}`
      );
    }

    const vehicleData = {
      vehicleName: `${vehicle.brand} ${vehicle.model}`,
      price: vehicle.price_per_day_with_dr,
      bookingType: 'vehicle',
      tourID: null,
      vehicle: vehicle._id,
      user: user._id,
      from,
      to,
    };
    console.log({ vehicleData });
    const from_new = new Date(vehicleData.from);
    const to_new = new Date(vehicleData.to);

    if (from_new < to_new) {
      try {
        const res = await axios({
          method: 'POST',
          url: '/api/v1/booking/create-checkout-session',
          data: vehicleData,
          headers: {
            Content: 'application/json',
          },
        });

        if (res.status === 201) {
          window.location.href = res.data.data.url;
        }
      } catch (error) {
        console.log(error.response.data);
      }
    } else {
      // "from" is greater than or equal to "to"
      toast.error('Please enter valid data range', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '1.7rem',
        },
      });
    }
  };

  return (
    <>
      <o.OverviewSection>
        <o.TourBookingContainer>
          <o.BookingTopContainer>
            <o.PriceTagContainer>
              <o.IconContainer color="var(--main-color)" fontsize={'3rem'}>
                <TbTag />
              </o.IconContainer>
              <o.Text margin={'0 1rem'} fontsize={'2rem'} fontweight={'600'}>
                {' '}
                Per day
              </o.Text>
            </o.PriceTagContainer>

            <o.Text
              color="#00bb98"
              margin={'2rem 1rem'}
              fontsize={'4rem'}
              fontweight={'600'}
            >
              {' '}
              $
              {drivingOptDropdownVal.value === 'Without driver'
                ? vehicle.price_per_day_without_dr
                : vehicle.price_per_day_with_dr}
              {/* $9.99 */}
            </o.Text>
          </o.BookingTopContainer>

          {/* <o.HR /> */}

          <o.BookingBodyContainer>
            <o.Group>
              <o.Text
                color="#555"
                margin={'1rem 1rem'}
                fontsize={'1.8rem'}
                fontweight={'600'}
              >
                {' '}
                From
              </o.Text>
              <o.DateInput
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                type={'date'}
              />
            </o.Group>
            <o.Group>
              <o.Text
                color="#555"
                margin={'1rem 1rem'}
                fontsize={'1.8rem'}
                fontweight={'600'}
              >
                {' '}
                To
              </o.Text>
              <o.DateInput
                value={to}
                onChange={(e) => setTo(e.target.value)}
                type={'date'}
              />
            </o.Group>
            <o.Group>
              <o.Text
                color="#555"
                margin={'1rem 1rem'}
                fontsize={'1.8rem'}
                fontweight={'600'}
              >
                {' '}
                Driving Option
              </o.Text>

              <DropDown
                dropDownValues={drivingOptDropDownValues}
                currentDropdownVal={drivingOptDropdownVal}
                setCurrentDropdownVal={setDrivingOptDropdownVal}
              />
            </o.Group>
          </o.BookingBodyContainer>

          <o.BookNowBtn onClick={onCheckout}>
            <o.Text
              color="#fff"
              margin="0 1rem 0 0"
              fontsize={'1.7rem'}
              fontweight="600"
            >
              {isAuthenticated ? 'Rent Now' : 'Log In to rent a vehicle'}
            </o.Text>
            <o.IconContainer color="#fff" fontsize={'2rem'}>
              <AiOutlineCar />
            </o.IconContainer>
          </o.BookNowBtn>
        </o.TourBookingContainer>

        <o.OverviewContainer>
          <o.Text
            margin={'1rem 0 2rem 0'}
            color="#222"
            fontsize={'4.5rem'}
            fontweight={'700'}
          >
            Description
          </o.Text>
          <o.Text
            margin={'1rem 0 2rem 0'}
            color="#333"
            fontsize={'1.7rem'}
            fontweight={'500'}
            fontfamily={'var(--primary-font)'}
          >
            {vehicle.description}
          </o.Text>
          {/* <o.Text
            margin={'1rem 0 2rem 0'}
            color='#333'
            fontsize={'1.7rem'}
            fontweight={'500'}
            fontfamily={'var(--primary-font)'}
          >
            In addition to its impressive performance capabilities, the Mercedes
            Grand Sedan is also loaded with advanced safety features and driver
            assistance technologies that make it one of the safest vehicles on
            the road.{' '}
          </o.Text> */}
          {/* <o.Text margin={'1rem 0 2rem 0'} color='#333' fontsize={'1.7rem'} fontweight={'500'} fontfamily={'var(--primary-font)'}>
                    The sedan is equipped with adaptive cruise control, automatic emergency braking, lane departure warning, and blind-spot monitoring, among other features. With its exceptional performance, luxurious interior, and advanced safety technologies, the Mercedes Grand Sedan is a top choice for drivers who demand the best in luxury and performance.</o.Text> */}
        </o.OverviewContainer>
        <o.TourHighlightContainer>
          <o.Text
            margin={'1rem 0 2rem 0'}
            color="#222"
            fontsize={'2.5rem'}
            fontweight={'600'}
          >
            Features
          </o.Text>

          {vehicle.features.split('\n').map((feature, key) => {
            return (
              <o.HighLightRow key={key}>
                <o.IconContainer fontsize={'1.8rem'} color="var(--main-color)">
                  <GoPrimitiveDot />
                </o.IconContainer>
                <o.Text fontsize={'1.7rem'} margin={'1rem 2rem '}>
                  {feature}
                </o.Text>
              </o.HighLightRow>
            );
          })}
        </o.TourHighlightContainer>
      </o.OverviewSection>
    </>
  );
};

export default SingleVehicleOverview;
