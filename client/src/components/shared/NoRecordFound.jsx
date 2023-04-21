import React from 'react';
import styled from 'styled-components';
import img from './../../images/no-results.png';

const Container = styled.div`
  width: 100%;
  min-height: 10rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 15%;
  height: 9rem;
  /* background-image: url(${img}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10rem auto 5rem;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 13rem;
  width: auto;
`;

const NoRecordFound = () => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={img} alt="Sorry" />
        </ImageContainer>
        <h2>
          Sorry, we couldn't find any results that match your search criteria.
        </h2>
      </Container>
    </>
  );
};

export default NoRecordFound;
