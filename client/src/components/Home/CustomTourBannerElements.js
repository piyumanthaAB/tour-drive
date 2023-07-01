import styled from 'styled-components';
import img from './../../images/banner_background.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 50rem;

  /* background-color: var(--main-color); */
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 999999999999999999999;
`;

export const HeadingText = styled.p`
  font-family: var(--primary-font);
  font-size: 5rem;
  color: #fff;
  text-align: center;
  font-weight: 900;
`;

export const SignUpBtn = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  padding: 1.5rem 5rem;
  border-radius: 5rem;
  background-color: #fff;
  color: var(--main-color);
  font-family: var(--primary-fonr);
  margin: 2rem 0;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;
