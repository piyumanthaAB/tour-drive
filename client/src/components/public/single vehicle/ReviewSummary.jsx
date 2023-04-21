import React from 'react';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import * as r from './ReviewSummaryElements';
import useFetch from '../../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';
import Rating from 'react-rating';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewSummary = ({ vehicleId }) => {
  const { data, isPending, isError } = useFetch(
    `/api/v1/reviews?vehicle=${vehicleId}`
  );
  return (
    <>
      {data && data.data.reviews.length > 0 && (
        <r.Section>
          <r.Container>
            {isPending && (
              <SpinnerContainer>
                {' '}
                <ClipLoader size={60} />
              </SpinnerContainer>
            )}
            {data && !isPending && data.data.reviews.length !== 0 && (
              <>
                <r.Text fontsize="3rem" fontweight="600" color="#222">
                  {data.data.reviews.length} Reviews for this vehicle
                </r.Text>
                <r.ReviewsContainer>
                  <r.Left>
                    <r.LeftTop>
                      <r.LeftTopLeft>
                        <r.Text fontsize="2rem" fontweight="600" color="#222">
                          {(data.data.reviews[0].vehicle.driverRatingsAverage +
                            data.data.reviews[0].vehicle
                              .vehicleRatingsAverage) /
                            2}
                          /5
                        </r.Text>
                        <r.ReviewStarsContainer>
                          <Rating
                            emptySymbol={
                              <BsFillStarFill color="#888" size={20} />
                            }
                            fullSymbol={
                              <BsFillStarFill
                                color={'var(--main-color)'}
                                size={20}
                              />
                            }
                            initialRating={
                              (data.data.reviews[0].vehicle
                                .driverRatingsAverage +
                                data.data.reviews[0].vehicle
                                  .vehicleRatingsAverage) /
                              2
                            }
                            readonly
                          />
                        </r.ReviewStarsContainer>
                      </r.LeftTopLeft>
                      <r.LeftTopRight>
                        <r.Text fontsize="1.8rem" fontweight="600" color="#222">
                          Based on {data.data.reviews.length} rating(s)
                        </r.Text>
                      </r.LeftTopRight>
                    </r.LeftTop>
                    <r.LeftBottom>
                      <r.IconContainer
                        fontsize="3rem"
                        bacgroundcolor="#eee"
                        borderradius="50%"
                        padding="2rem"
                      >
                        <AiOutlineLike />
                      </r.IconContainer>
                      <r.Text
                        fontsize="1.7rem"
                        fontweight="600"
                        color="#222"
                        margin="0 0 0 2rem"
                      >
                        {data.data.reviews.length} Customer(s) recommended this
                        item
                      </r.Text>
                    </r.LeftBottom>
                  </r.Left>
                  <r.Right>
                    <r.ReviewRowGroup>
                      <r.Text
                        fontsize="1.7rem"
                        margin="0 0 1rem 0"
                        fontweight="500"
                        color="#222"
                      >
                        Driver
                      </r.Text>
                      <r.Percentage>
                        <r.Text
                          fontsize="1.2rem"
                          margin="0 0 0 0"
                          fontweight="600"
                          color={
                            (data.data.reviews[0].vehicle.driverRatingsAverage /
                              5) *
                              100 <=
                            50
                              ? '#333'
                              : '#eee'
                          }
                        >
                          {`${
                            (data.data.reviews[0].vehicle.driverRatingsAverage /
                              5) *
                            100
                          }%`}
                        </r.Text>
                      </r.Percentage>
                      <r.ReviewRow
                        percentage={`${
                          (data.data.reviews[0].vehicle.driverRatingsAverage /
                            5) *
                          100
                        }%`}
                      />
                    </r.ReviewRowGroup>
                    <r.ReviewRowGroup>
                      <r.Text
                        fontsize="1.7rem"
                        margin="0 0 1rem 0"
                        fontweight="500"
                        color="#222"
                      >
                        Vehicle
                      </r.Text>
                      <r.Percentage>
                        <r.Text
                          fontsize="1.2rem"
                          margin="0 0 0 0"
                          fontweight="600"
                          color={
                            (data.data.reviews[0].vehicle
                              .vehicleRatingsAverage /
                              5) *
                              100 <=
                            50
                              ? '#333'
                              : '#eee'
                          }
                        >
                          {`${
                            (data.data.reviews[0].vehicle
                              .vehicleRatingsAverage /
                              5) *
                            100
                          }%`}
                        </r.Text>
                      </r.Percentage>

                      <r.ReviewRow
                        percentage={`${
                          (data.data.reviews[0].vehicle.vehicleRatingsAverage /
                            5) *
                          100
                        }%`}
                      />
                    </r.ReviewRowGroup>
                    {/* <r.ReviewRowGroup>
                                <r.Text fontsize='1.7rem' margin='0 0 1rem 0' fontweight='500' color='#222' >Service</r.Text>
                                <r.Percentage><r.Text fontsize='1.2rem' margin='0 0 0 0' fontweight='600' color='#eee' >90%</r.Text></r.Percentage>

                                <r.ReviewRow percentage='90%'/>
                            </r.ReviewRowGroup> */}
                  </r.Right>
                </r.ReviewsContainer>
              </>
            )}
          </r.Container>
        </r.Section>
      )}
    </>
  );
};

export default ReviewSummary;
