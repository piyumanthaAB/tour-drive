import React from 'react';
import Dashboard from '../../components/shared/Dashboard';
import ClientHomeComp from './../../components/client/ClientHomeComp';
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
const ClientHome = () => {
  const { data, isPending, isError } = useFetch(
    `/api/v1/auth/get-current-user`
  );

  return (
    <>
      <Dashboard
        rightContainerContent={
          <>{<ClientHomeComp user={data.data.currentUser} />}</>
        }
      />
    </>
  );
};

export default ClientHome;
