import React, { useState, useEffect } from 'react';
import * as v from './VehicleListElements';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { FiMapPin, FiUsers, FiClock } from 'react-icons/fi';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import Rating from 'react-rating';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckBox } from '../../shared/Form Elements/Checkbox';
import Slider, { SliderThumb } from '@mui/material/Slider';
import useFetch from '../../../hooks/useFetch';
import BounceLoader from 'react-spinners/ClipLoader';
import NoRecordFound from '../../shared/NoRecordFound';
import RadioButton from '../../shared/Form Elements/RadioButton';

const minDistance = 5;

const VehicleListComp = ({}) => {
  const [fuel, setFuel] = useState('petrol');
  const [transmission, setTransmission] = useState('auto');

  const [vehicleType, setVehicleType] = useState([]);

  const [checkBoxState, setCheckBox] = useState({
    car: false,
    van: false,
    bike: false,
    suv: false,
  });
  const [value2, setValue2] = React.useState([10, 40]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  const sliderStyle = {
    color: '#FC6522', // change the color to your desired color
  };

  let url = `/api/v1/vehicles?vehicle_state=available&limit=10${
    vehicleType.length > 0 ? `&vehicle_type=${vehicleType}` : ''
  }&price_per_day_without_dr[gte]=${
    value2[0] * 0.5
  }&price_per_day_without_dr[lte]=${
    value2[1] * 0.5
  }&fuel=${fuel}&transmission=${transmission}  `;

  const { data, isPending, isError } = useFetch(url);

  const handleCheckboxChange = (event) => {
    let { id, checked } = event.target;
    setCheckBox({
      ...checkBoxState,
      [id]: checked,
    });
  };

  useEffect(() => {
    let categories = Object.keys(checkBoxState).filter(
      (category) => checkBoxState[category]
    );
    // console.log({ categories });

    categories.forEach((str, index, arr) => {
      arr[index] = str.replace(/&/g, '%26');
    });
    // console.log({ categories });
    setVehicleType(categories);
  }, [checkBoxState]);

  return (
    <>
      <v.ContentContainer>
        <v.VehicleSection>
          <v.VehicleListContainer>
            {isPending && (
              <BounceLoader
                size={60}
                cssOverride={{
                  display: 'block',
                  margin: '15rem auto',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  // position: 'absolute',
                  // top: '50%',
                  // left: '50%',
                  // transform: 'translate(-50%, -50%)',
                }}
              />
            )}
            {isError && <p>error</p>}
            {data && data.data.length === 0 && !isPending && <NoRecordFound />}

            {data &&
              !isPending &&
              data.data.map((vehicle, id) => {
                return (
                  <>
                    <v.VehicleItemContainer key={id}>
                      <v.VehicleImgContainer
                        img={`${process.env.PUBLIC_URL}/vehicle-uploads/${vehicle.cover_URL}`}
                      >
                        {/* mui check box with icon can use here */}

                        <v.FavouriteBtn>
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            sx={{
                              color: '#333',
                              '&.Mui-checked': {
                                color: 'var(--main-color)',
                              },
                              '& .MuiSvgIcon-root': { fontSize: 20 },
                            }}
                          />
                        </v.FavouriteBtn>
                      </v.VehicleImgContainer>
                      <v.VehicleDescContainer>
                        <v.VehicleTitle>
                          {`${vehicle.brand} ${vehicle.model}`}
                        </v.VehicleTitle>
                        <v.Row>
                          <v.VehicleSecondaryTitleContainer>
                            <v.VehicleSecondaryTitle>
                              {vehicle.status}
                            </v.VehicleSecondaryTitle>
                          </v.VehicleSecondaryTitleContainer>
                          <v.ReviewsContainer>
                            <Rating
                              emptySymbol={
                                <BsFillStarFill color="#888" size={15} />
                              }
                              fullSymbol={
                                <BsFillStarFill
                                  color={'var(--main-color)'}
                                  size={15}
                                />
                              }
                              initialRating={
                                (vehicle?.driverRatingsAverage +
                                  vehicle?.vehicleRatingsAverage) /
                                  2 || 0
                              }
                              readonly
                            />
                            <v.ReviewTitle>
                              {vehicle.ratingsQuantity || 0} review(s)
                            </v.ReviewTitle>
                          </v.ReviewsContainer>
                        </v.Row>
                        <v.Row>
                          <v.VehicleDesc>{vehicle.features}</v.VehicleDesc>
                        </v.Row>
                      </v.VehicleDescContainer>
                      <v.VehiclePriceContainer>
                        <v.PriceRow>
                          <v.BadgeContainer>
                            <v.BadgeIcon>
                              <FiUsers />
                            </v.BadgeIcon>
                            {vehicle.seats} seats
                          </v.BadgeContainer>
                        </v.PriceRow>
                        <v.Price>$ {vehicle.price_per_day_without_dr}</v.Price>
                        <v.ExploreBtn to={`/vehicles/${vehicle._id}`}>
                          View
                        </v.ExploreBtn>
                      </v.VehiclePriceContainer>
                    </v.VehicleItemContainer>
                  </>
                );
              })}
          </v.VehicleListContainer>

          <v.TourFilterContainer>
            <v.TourFilterTitle>Filter Vehicles</v.TourFilterTitle>
            <v.TourFilterRow>
              <v.TourFilterRowTitle>Veicle Types</v.TourFilterRowTitle>
              <v.CheckBoxContainer>
                <CheckBox
                  checked={checkBoxState['car']}
                  onChange={handleCheckboxChange}
                  labelTxt={'car'}
                />
                <CheckBox
                  checked={checkBoxState['van']}
                  onChange={handleCheckboxChange}
                  labelTxt={'van'}
                />
                <CheckBox
                  checked={checkBoxState['suv']}
                  onChange={handleCheckboxChange}
                  labelTxt={'suv'}
                />
                <CheckBox
                  checked={checkBoxState['bike']}
                  onChange={handleCheckboxChange}
                  labelTxt={'bike'}
                />
              </v.CheckBoxContainer>
            </v.TourFilterRow>
            <v.TourFilterRow>
              <v.TourFilterRowTitle>Fuel Type</v.TourFilterRowTitle>
              <v.CheckBoxContainer>
                <form onSubmit={(e) => e.preventDefault()}>
                  <RadioButton
                    checked={fuel === 'petrol' ? true : false}
                    onChange={() => {
                      setFuel('petrol');
                    }}
                    labelTxt={'Petrol'}
                  />
                  <RadioButton
                    checked={fuel === 'diesal' ? true : false}
                    onChange={() => {
                      setFuel('diesal');
                    }}
                    labelTxt={'Diesal'}
                  />
                </form>
              </v.CheckBoxContainer>
            </v.TourFilterRow>
            <v.TourFilterRow>
              <v.TourFilterRowTitle>Transmission</v.TourFilterRowTitle>
              <v.CheckBoxContainer>
                <form onSubmit={(e) => e.preventDefault()}>
                  <RadioButton
                    checked={transmission === 'auto' ? true : false}
                    onChange={() => {
                      setTransmission('auto');
                    }}
                    labelTxt={'Auto'}
                  />
                  <RadioButton
                    checked={transmission === 'manuel' ? true : false}
                    onChange={() => {
                      setTransmission('manuel');
                    }}
                    labelTxt={'Manuel'}
                  />
                </form>
              </v.CheckBoxContainer>
            </v.TourFilterRow>
            <v.TourFilterRow>
              <v.TourFilterRowTitle>Reviews Score</v.TourFilterRowTitle>
              <v.CheckBoxContainer>
                <CheckBox
                  value={'5'}
                  labelTxt={'⭐⭐⭐⭐⭐'}
                  // onChange={handleReviewCheck}
                  // checked={reviews['5']}
                />
                <CheckBox
                  value={'4'}
                  labelTxt={'⭐⭐⭐⭐'}
                  // onChange={handleReviewCheck}
                  // checked={reviews['4']}
                />
                <CheckBox
                  labelTxt={'⭐⭐⭐'}
                  value={'3'}
                  // onChange={handleReviewCheck}
                  // checked={reviews['3']}
                />
                <CheckBox
                  labelTxt={'⭐⭐'}
                  value={'2'}
                  // onChange={handleReviewCheck}
                  // checked={reviews['2']}
                />
                <CheckBox
                  labelTxt={'⭐'}
                  value={'1'}
                  // onChange={handleReviewCheck}
                  // checked={reviews['1']}
                />
              </v.CheckBoxContainer>
            </v.TourFilterRow>
            <v.TourFilterRow>
              <v.TourFilterRowTitle>Filter Price</v.TourFilterRowTitle>
              <v.SliderContainer>
                <Slider
                  getAriaLabel={() => 'Minimum distance shift'}
                  value={value2}
                  onChange={handleChange2}
                  valueLabelDisplay="auto"
                  // getAriaValueText={valuetext}
                  disableSwap
                  // color="secondary"
                  style={sliderStyle}
                />
              </v.SliderContainer>
              <v.PriceBoxContainer>
                <v.PriceBox>
                  <p>$ &nbsp;{value2[0] * 0.5}</p>
                </v.PriceBox>
                <v.PriceBox>
                  <p>$ &nbsp;{value2[1] * 0.5}</p>
                </v.PriceBox>
                {/* <p>Selected maximum: {value2[1] * 10}</p> */}
              </v.PriceBoxContainer>
            </v.TourFilterRow>
          </v.TourFilterContainer>
        </v.VehicleSection>
      </v.ContentContainer>
    </>
  );
};

export default VehicleListComp;
