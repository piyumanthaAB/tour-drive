import React from 'react';
import Dashboard from '../../components/shared/Dashboard';
import SingleRequest from '../../components/customer-care/SingleRequest';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = {
  position: 'absolute',
  margin: '0 auto',
  top: '30%',
  left: '60%',
  transform: 'translate(-50%,-50%)',
  // borderColor: "red",
};

const ViewSingleEmergencyRequest = () => {
  const { id } = useParams();

  const { data, isPending, isError } = useFetch(`/api/v1/emergencies/${id}`);

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>
            {isPending && (
              <SpinnerContainer>
                {' '}
                <ClipLoader size={60} cssOverride={override} />
              </SpinnerContainer>
            )}
            {isError && <p>Error</p>}
            {data && !isPending && (
              <SingleRequest request={data.data.request} />
            )}
          </>
        }
      />
    </>
  );
};

export default ViewSingleEmergencyRequest;
