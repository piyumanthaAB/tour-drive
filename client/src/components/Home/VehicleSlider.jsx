import React, { Component } from 'react';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import Slider from 'react-slick';
import { GoPrimitiveDot } from 'react-icons/go';
import * as s from './VehicleSliderElements';
import BounceLoader from 'react-spinners/ClipLoader.js';
import NoRecordFound from '../shared/NoRecordFound';
import Rating from 'react-rating';
// import { tours } from "../../data/tours";

export default function VehicleSlider({ data, isPending, isError }) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  // isPending = true;

  // data = {
  //   data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  // };

  const style = { color: 'var(--main-color)' };
  console.log(data);

  return (
    <>
      <s.SliderSection>
        <s.TopSliderSection>
          <s.Text margin={'3rem 0'} fontsize={'4.5rem'} fontweight={'700'}>
            Select Your Vehicle
          </s.Text>
          <s.Text fontsize={'2rem'} color={'gray'}>
            you can choose your favourite vehicle here.
          </s.Text>
        </s.TopSliderSection>

        {isError ? (
          <p>Error</p>
        ) : isPending ? (
          <BounceLoader
            size={60}
            cssOverride={{
              display: 'block',
              margin: '15rem auto',
              justifyContent: 'center',
            }}
          />
        ) : data?.data.length == 0 ? (
          <NoRecordFound />
        ) : (
          <>
            <s.StyledSlider {...settings}>
              {data.data.map((vehicle, index) => (
                <s.TourCard key={index}>
                  <s.CardContainer>
                    <s.SliderImgContainer
                      img={`${process.env.PUBLIC_URL}/vehicle-uploads/${vehicle.cover_URL}`}
                    ></s.SliderImgContainer>
                    <s.SliderDescContainer>
                      <s.SliderTitle>{`${vehicle.brand} ${vehicle.model}`}</s.SliderTitle>
                      <s.Row>
                        <s.SliderSecondaryTitleContainer>
                          <s.SliderSecondaryTitle>
                            <GoPrimitiveDot style={style} />
                            {vehicle.vehicle_type} <s.br />
                            <GoPrimitiveDot style={style} />
                            {`${vehicle.seats}  Passenger`} <s.br />
                            <GoPrimitiveDot style={style} />
                            {vehicle.transmission}
                          </s.SliderSecondaryTitle>
                        </s.SliderSecondaryTitleContainer>
                        <s.ReviewsContainer>
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
                          />
                        </s.ReviewsContainer>
                      </s.Row>
                      <s.TourPriceContainer>
                        <s.Price>{`$ ${vehicle.price_per_day_with_dr} /km`}</s.Price>
                        <s.ExploreBtn to={`/vehicles/${vehicle._id}`}>
                          Preview
                        </s.ExploreBtn>
                      </s.TourPriceContainer>
                    </s.SliderDescContainer>
                  </s.CardContainer>
                </s.TourCard>
              ))}
            </s.StyledSlider>
          </>
        )}
      </s.SliderSection>
    </>
  );
}
