import React, { useState, useEffect } from 'react';
import {
  PriceBoxContainer,
  PriceBox,
  TourItemContainer,
  TourPriceContainer,
  TourDescContainer,
  TourImgContainer,
  TourTitle,
  Price,
  ExploreBtn,
  ContentContainer,
  TourFilterContainer,
  TourSecondaryTitleContainer,
  TourSecondaryTitle,
  BadgeIcon,
  BadgeContainer,
  PriceRow,
  TourFilterRow,
  TourListContainer,
  ToursSection,
  SecondaryTitleIcon,
  ReviewTitle,
  TourFilterRowTitle,
  ReviewsContainer,
  ReviewIcon,
  Row,
  TourDesc,
  FavouriteBtn,
  TourFilterTitle,
  CheckBoxContainer,
  SliderContainer,
} from './TourListElements';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { FiMapPin, FiUsers, FiClock, FiCompass } from 'react-icons/fi';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import { CheckBox } from './../../shared/Form Elements/Checkbox';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { css } from 'styled-components';
import './../../../variables.css';
import useFetch from '../../../hooks/useFetch';
import BounceLoader from 'react-spinners/ClipLoader';
import NoRecordFound from '../../shared/NoRecordFound';
import Rating from 'react-rating';

const minDistance = 5;

const TourListComponent = ({ setUrl }) => {
  const [category, setCategory] = useState([]);
  const [reviewArr, setReviewArr] = useState([]);
  const [reviews, setReviews] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [checkBoxState, setCheckBox] = useState({
    city: false,
    hiking: false,
    adventure: false,
    historical: false,
    cultural: false,
  });

  const [value2, setValue2] = React.useState([20, 75]);

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

  let url = `/api/v1/tours?limit=10${
    category.length > 0 ? `&category=${category}` : ''
  }&price[gte]=${value2[0] * 20}&price[lte]=${value2[1] * 20}${
    reviewArr.length > 0 ? `&ratingsAverage[gte]=` : ''
  }`;

  const { data, isPending, isError } = useFetch(url);

  const handleCheckboxChange = (event) => {
    let { id, checked } = event.target;
    setCheckBox({
      ...checkBoxState,
      [id]: checked,
    });
  };

  const handleReviewCheck = (e) => {
    // console.log({ event: e.target });
    const { checked, value } = e.target;

    setReviews({ ...reviews, [value]: checked });
    console.log({ reviews });
  };

  useEffect(() => {
    let categories = Object.keys(checkBoxState).filter(
      (category) => checkBoxState[category]
    );
    let reviewsArray = Object.keys(reviews).filter((r) => reviews[r]);
    // console.log({ categories });

    categories.forEach((str, index, arr) => {
      arr[index] = str.replace(/&/g, '%26');
    });
    // console.log({ categories });
    setReviews(reviewsArray);
    setCategory(categories);

    console.log(reviewArr);
  }, [checkBoxState, reviewArr]);

  return (
    <>
      <ContentContainer>
        <ToursSection>
          <TourListContainer>
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
              data.data.map((tour, id) => {
                // console.log({ tour });
                return (
                  <>
                    <TourItemContainer key={tour?._id}>
                      <TourImgContainer
                        img={`${process.env.PUBLIC_URL}/tour-uploads/${tour.tour_cover}`}
                      >
                        {/* mui check box with icon can use here */}
                        {/* 
                        <FavouriteBtn>
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
                        </FavouriteBtn> */}
                      </TourImgContainer>
                      <TourDescContainer>
                        <TourTitle>{tour?.name}</TourTitle>
                        <Row>
                          <TourSecondaryTitleContainer>
                            <SecondaryTitleIcon>
                              <FiMapPin />
                            </SecondaryTitleIcon>
                            <TourSecondaryTitle>
                              {tour?.cities?.split(',').map((city, i) => {
                                return `${city}, `;
                              })}
                            </TourSecondaryTitle>
                          </TourSecondaryTitleContainer>

                          <ReviewsContainer>
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
                                (tour?.locationRatingsAverage +
                                  tour?.serviceRatingsAverage) /
                                  2 || 0
                              }
                              readonly
                            />
                            <ReviewTitle>
                              {tour.ratingsQuantity || 0} review(s)
                            </ReviewTitle>
                          </ReviewsContainer>
                        </Row>
                        <Row>
                          <TourDesc>
                            {tour.description.slice(0, 70) + '...'}
                          </TourDesc>
                        </Row>
                        <Row>
                          <TourSecondaryTitleContainer>
                            <SecondaryTitleIcon>
                              <FiCompass />
                            </SecondaryTitleIcon>
                            <TourSecondaryTitle>
                              {tour.category}
                            </TourSecondaryTitle>
                          </TourSecondaryTitleContainer>
                        </Row>
                      </TourDescContainer>

                      <TourPriceContainer>
                        <PriceRow>
                          <BadgeContainer>
                            <BadgeIcon>
                              <FiUsers />
                            </BadgeIcon>
                            {tour.capacity}
                          </BadgeContainer>
                          <BadgeContainer>
                            <BadgeIcon>
                              <FiClock />
                            </BadgeIcon>
                            {tour.duration} Days
                          </BadgeContainer>
                        </PriceRow>
                        <Price>$ {tour.price}</Price>
                        <ExploreBtn to={`/tours/${tour._id}`}>
                          Explore
                        </ExploreBtn>
                      </TourPriceContainer>
                    </TourItemContainer>
                  </>
                );
              })}
          </TourListContainer>

          <TourFilterContainer>
            <TourFilterTitle>Filter Tours </TourFilterTitle>
            <TourFilterRow>
              <TourFilterRowTitle>Categories</TourFilterRowTitle>
              <CheckBoxContainer>
                <CheckBox
                  checked={checkBoxState['city']}
                  onChange={handleCheckboxChange}
                  labelTxt={'city'}
                />
                <CheckBox
                  checked={checkBoxState['hiking']}
                  onChange={handleCheckboxChange}
                  labelTxt={'hiking'}
                />
                <CheckBox
                  checked={checkBoxState['adventure']}
                  onChange={handleCheckboxChange}
                  labelTxt={'adventure'}
                />
                <CheckBox
                  checked={checkBoxState['historical']}
                  onChange={handleCheckboxChange}
                  labelTxt={'historical'}
                />
                <CheckBox
                  checked={checkBoxState['cultural']}
                  onChange={handleCheckboxChange}
                  labelTxt={'cultural'}
                />
              </CheckBoxContainer>
            </TourFilterRow>
            {/* <TourFilterRow>
              <TourFilterRowTitle>Reviews Score</TourFilterRowTitle>
              <CheckBoxContainer>
                <CheckBox
                  value={'5'}
                  labelTxt={'⭐⭐⭐⭐⭐'}
                  onChange={handleReviewCheck}
                  checked={reviews['5']}
                />
                <CheckBox
                  value={'4'}
                  labelTxt={'⭐⭐⭐⭐'}
                  onChange={handleReviewCheck}
                  checked={reviews['4']}
                />
                <CheckBox
                  labelTxt={'⭐⭐⭐'}
                  value={'3'}
                  onChange={handleReviewCheck}
                  checked={reviews['3']}
                />
                <CheckBox
                  labelTxt={'⭐⭐'}
                  value={'2'}
                  onChange={handleReviewCheck}
                  checked={reviews['2']}
                />
                <CheckBox
                  labelTxt={'⭐'}
                  value={'1'}
                  onChange={handleReviewCheck}
                  checked={reviews['1']}
                />
              </CheckBoxContainer>
            </TourFilterRow> */}
            <TourFilterRow>
              <TourFilterRowTitle>Filter Price</TourFilterRowTitle>
              <SliderContainer>
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
              </SliderContainer>
              <PriceBoxContainer>
                <PriceBox>
                  <p>$ &nbsp;{value2[0] * 20}</p>
                </PriceBox>
                <PriceBox>
                  <p>$ &nbsp;{value2[1] * 20}</p>
                </PriceBox>
                {/* <p>Selected maximum: {value2[1] * 10}</p> */}
              </PriceBoxContainer>
            </TourFilterRow>
          </TourFilterContainer>
        </ToursSection>
      </ContentContainer>
    </>
  );
};

export default TourListComponent;
