import React from 'react';
import CreateReviewForm from '../../components/public/single vehicle/CreateReviewForm';
import DisplayReviews from '../../components/public/single vehicle/DisplayReviews';
import ReviewSummary from '../../components/public/single vehicle/ReviewSummary';
import SIngleVehicleHEader from '../../components/public/single vehicle/SIngleVehicleHEader';
import SingleVehicleOverview from '../../components/public/single vehicle/SingleVehicleOverview';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SingleVehicle = () => {
  const { id } = useParams();

  const { data, isPending, isError } = useFetch(`/api/v1/vehicles/${id}`);

  return (
    <>
      {isPending && (
        <SpinnerContainer>
          {' '}
          <ClipLoader size={60} />
        </SpinnerContainer>
      )}
      {data && (
        <>
          <SIngleVehicleHEader vehicle={data.data} />
          <SingleVehicleOverview vehicle={data.data} />
          <ReviewSummary vehicle={data.data} vehicleId={id} />
          <DisplayReviews vehicle={data.data} vehicleId={id} />
          <CreateReviewForm vehicle={data.data} vehicleId={id} />
        </>
      )}
    </>
  );
};

export default SingleVehicle;
