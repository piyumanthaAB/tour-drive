import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import DropDown from './Form Elements/DropDown';
import CustomTourContext from '../../context/tour/customTourContext';
export const CardContainer = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 0px 32px 0px rgba(143, 143, 143, 0.2);
  margin: 1rem 0;
`;

export const CardHeader = styled.div`
  width: 100%;
  background-color: var(--main-color);
  min-height: 5rem;
  /* border-radius: 1rem; */
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  display: flex;
`;

export const CardDayContainer = styled.div`
  flex: 0 1 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
`;
export const CardCityContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.8rem;
  color: #fff;
  padding: 0 2rem;
  font-weight: 700;
`;

export const CardBodyContainer = styled.div`
  padding: 2rem;
`;

export const DropdownContainer = styled.div`
  margin: 1rem 0;
`;

const CradSUbmitBtn = styled.button``;

const AccomodationContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  border-top: 1px solid #333;
  padding: 1rem 0;
`;
const CustomTourCard = ({ cityName, locationsInCity, day, setTour, tour }) => {
  const { updateCustomTour } = useContext(CustomTourContext);

  const [cardTour, setCardTour] = useState({
    city: cityName,
    locationOne: null,
    locationTwo: null,
    locationThree: null,
    locationFour: null,
    accomodation: null,
  });

  const [cityOne, setCityOne] = useState({
    label: 'Select location',
    value: null,
  });
  const [cityTwo, setCityTwo] = useState({
    label: 'Select location',
    value: null,
  });
  const [cityThree, setCityThree] = useState({
    label: 'Select location',
    value: null,
  });
  const [cityFour, setCityFour] = useState({
    label: 'Select location',
    value: null,
  });
  const [accomodation, setAccomodation] = useState({
    label: 'Select accomodation type',
    value: null,
  });

  const cityDropdownValues = locationsInCity?.availableLocations.map((loc) => {
    return {
      label: loc || 'not available',
      value: loc || 'not available',
    };
  });

  const accomodationValues = [
    { label: 'Not required', value: 'not-required' },
    { label: 'Guest house', value: 'guest-house' },
    { label: '3 Star', value: '3-star' },
  ];

  useEffect(() => {
    setCardTour({
      city: cityName,
      locationOne: cityOne.value,
      locationTwo: cityTwo.value,
      locationThree: cityThree.value,
      locationFour: cityFour.value,
      accomodation: accomodation.value,
    });
    // updateCustomTour({
    //   city: cityName,
    //   locationOne: cityOne.value,
    //   locationTwo: cityTwo.value,
    //   locationThree: cityThree.value,
    //   locationFour: cityFour.value,
    // });
  }, [cityOne, cityTwo, cityThree, cityFour, accomodation]);

  // updateCustomTour({
  //   day,
  //   city: cityName,
  //   visitingLocations: {
  //     loc_1: cityOne,
  //     loc_2: cityTwo,
  //     loc_3: cityThree,
  //     loc_4: cityFour,
  //   },
  //   accomodation: '',
  // });

  // setTour([
  //   ...tour,
  //   {
  //     day,
  //     city: cityName,
  //     visitingLocations: {
  //       loc_1: cityOne,
  //       loc_2: cityTwo,
  //       loc_3: cityThree,
  //       loc_4: cityFour,
  //     },
  //     accomodation: '',
  //   },
  // ]);

  return (
    <CardContainer>
      <CardHeader>
        <CardDayContainer>Day 0{day}</CardDayContainer>
        <CardCityContainer> {cityName} </CardCityContainer>
      </CardHeader>
      <CardBodyContainer>
        <DropdownContainer>
          <DropDown
            dropDownValues={cityDropdownValues}
            currentDropdownVal={cityOne}
            setCurrentDropdownVal={setCityOne}
            onChange={() => {}}
          />
        </DropdownContainer>
        <DropdownContainer>
          <DropDown
            dropDownValues={cityDropdownValues}
            currentDropdownVal={cityTwo}
            setCurrentDropdownVal={setCityTwo}
            onChange={() => {}}
          />
        </DropdownContainer>
        <DropdownContainer>
          <DropDown
            dropDownValues={cityDropdownValues}
            currentDropdownVal={cityThree}
            setCurrentDropdownVal={setCityThree}
            onChange={() => {}}
          />
        </DropdownContainer>
        <DropdownContainer>
          <DropDown
            dropDownValues={cityDropdownValues}
            currentDropdownVal={cityFour}
            setCurrentDropdownVal={setCityFour}
            onChange={() => {}}
          />
        </DropdownContainer>
        <AccomodationContainer>
          <h2>Select Accomodation</h2>
          <DropdownContainer>
            <DropDown
              dropDownValues={accomodationValues}
              currentDropdownVal={accomodation}
              setCurrentDropdownVal={setAccomodation}
              onChange={() => {}}
            />
          </DropdownContainer>
        </AccomodationContainer>
      </CardBodyContainer>
      <button
        onClick={(e) => {
          e.preventDefault();
          updateCustomTour(cardTour);
          // setTour([...tour, cardTour]);
          // console.log({ tour });
        }}
      >
        Complete
      </button>
    </CardContainer>
  );
};

export default CustomTourCard;
