import React, { useState, useContext } from 'react';
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
const CustomTourCard = ({ cityName, locationsInCity, day, setTour, tour }) => {
  const { updateCustomTour, updateLocationOne } = useContext(CustomTourContext);

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

  const cityDropdownValues = locationsInCity.availableLocations.map((loc) => {
    return {
      label: loc,
      value: loc,
    };
  });

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
            // onChange={() => {
            //   updateLocationOne(cityOne.value);
            // }}
          />
        </DropdownContainer>
        <DropdownContainer>
          <DropDown
            dropDownValues={cityDropdownValues}
            currentDropdownVal={cityTwo}
            setCurrentDropdownVal={setCityTwo}
          />
        </DropdownContainer>
        <DropdownContainer>
          <DropDown
            dropDownValues={cityDropdownValues}
            currentDropdownVal={cityThree}
            setCurrentDropdownVal={setCityThree}
          />
        </DropdownContainer>
        <DropdownContainer>
          <DropDown
            dropDownValues={cityDropdownValues}
            currentDropdownVal={cityFour}
            setCurrentDropdownVal={setCityFour}
          />
        </DropdownContainer>
      </CardBodyContainer>
    </CardContainer>
  );
};

export default CustomTourCard;
