import React from 'react';
import defaultUser from './../../../images/default_user_avatar.png';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { MdOutlineDateRange } from 'react-icons/md';
import * as d from './DisplayReviewsElements';
import useFetch from '../../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DisplayReviews = ({ vehicleId }) => {
  const { data, isPending, isError } = useFetch(
    `/api/v1/reviews?vehicle=${vehicleId}`
  );
  return (
    <>
      <d.Section>
        <d.Container>
          <d.ReviewContainerTopBar>
            <d.Text fontsize="1.7rem" color="#555" fontweight="600">
              Reviewed by {data?.data?.reviews.length} customer(s)
            </d.Text>
          </d.ReviewContainerTopBar>

          {isPending && (
            <SpinnerContainer>
              {' '}
              <ClipLoader size={60} />
            </SpinnerContainer>
          )}

          {data && !isPending && data.data.reviews.length === 0 && (
            <h1>No reviews for this vehicle yet</h1>
          )}

          {data &&
            !isPending &&
            data.data.reviews.map((review, i) => {
              return (
                <d.ReviewRowContainer key={i}>
                  <d.ReviewRowContainerLeft>
                    <d.AvatarContainer img={defaultUser} />
                    <d.Text
                      fontsize="1.7rem"
                      color="#444"
                      fontweight="600"
                      margin="2rem 0 0"
                    >
                      {review.name || 'anonymous'}
                    </d.Text>
                  </d.ReviewRowContainerLeft>
                  <d.ReviewRowContainerRight>
                    <d.ReviewStarsContainer>
                      <h2>Driver &nbsp; </h2>
                      <ReactStars
                        count={5}
                        //   onChange={handlelocationRating}
                        size={20}
                        edit={false}
                        value={review.driverRating || 3}
                        activeColor="var(--main-color)"
                        char={<BsFillStarFill />}
                      />
                    </d.ReviewStarsContainer>
                    <d.ReviewStarsContainer>
                      <h2>Vehicle </h2>
                      <ReactStars
                        count={5}
                        //   onChange={handlelocationRating}
                        size={20}
                        edit={false}
                        value={review.vehicleRating || 3}
                        activeColor="var(--main-color)"
                        char={<BsFillStarFill />}
                      />
                    </d.ReviewStarsContainer>

                    <d.Text
                      fontsize="1.7rem"
                      color="#444"
                      fontweight="600"
                      margin="2rem 0 0"
                    >
                      {review.review}
                    </d.Text>

                    <d.ReviewDateRow>
                      <d.IconContainer
                        margin="0 0.2rem"
                        fontsize="1.8rem"
                        color="#777"
                      >
                        <MdOutlineDateRange />
                      </d.IconContainer>
                      <d.Text
                        fontsize="1.7rem"
                        color="#777"
                        fontweight="500"
                        margin="0 0 0 1rem"
                      >
                        {review.createdAt?.split('T')[0] || 'not available'}
                      </d.Text>
                    </d.ReviewDateRow>
                  </d.ReviewRowContainerRight>
                </d.ReviewRowContainer>
              );
            })}
        </d.Container>
      </d.Section>
    </>
  );
};

export default DisplayReviews;
