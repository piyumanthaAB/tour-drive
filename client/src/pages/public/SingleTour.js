import React from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import CreateReviewForm from '../../components/public/single tour/CreateReviewForm';
import DisplayReviews from '../../components/public/single tour/DisplayReviews';
import ReviewSummary from '../../components/public/single tour/ReviewSummary';
import SigleTourHeader from '../../components/public/single tour/SigleTourHeader';
import SingleTourIncludes from '../../components/public/single tour/SingleTourIncludes';
import SingleTourMap from '../../components/public/single tour/SingleTourMap';
import SIngleTourOverview from '../../components/public/single tour/SIngleTourOverview';
import TourPlan from '../../components/public/single tour/TourPlan';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SingleTour = () => {
  const { id } = useParams();

  const { data, isPending, isError } = useFetch(`/api/v1/tours/${id}`);

  return (
    <>
      {isPending && (
        <SpinnerContainer>
          {' '}
          <ClipLoader size={60} />
        </SpinnerContainer>
      )}
      {isError && <p>Error</p>}
      {data && (
        <>
          <SigleTourHeader
            name={data.data.name}
            duration={data.data.duration}
            capacity={data.data.capacity}
            age_limit={data.data.age_limit}
            tour_gallery={data.data.tour_gallery}
          />
          <SIngleTourOverview
            highlights={data.data.highlights}
            description={data.data.description}
            price={data.data.price}
            tour={data.data}
          />
          <SingleTourIncludes
            includes={data.data.includes}
            excludes={data.data.excludes}
          />
          <SingleTourMap locations={data.data.locations} />
          <TourPlan plan={data.data.tourPlan} />
          <ReviewSummary />
          <DisplayReviews />
          <CreateReviewForm />
        </>
      )}
    </>
  );
};

export default SingleTour;
