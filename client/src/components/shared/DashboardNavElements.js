import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../../images/tour_drive_logo.png';

export const Container = styled.div`
  width: 100%;
  min-height: 5rem;
  ${'' /* background-color:red ; */}
  padding:2rem;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  ${'' /* background-color:green ; */}
  min-height:5rem;
  justify-content: center;
`;

export const NavBrand = styled(Link)`
  flex: 0 1 20%;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NavLinksContainer = styled.div`
  flex: 0 1 60%;
  margin: 0 0 0 auto;
  /* background-color: red; */
  padding: 0 5rem;
`;

export const NavBtn = styled.button`
  /* width: 5rem; */
  /* height: 5rem; */
  font-family: var(--primary-font);
  background-color: #eee;
  font-size: 1.8rem;
  border-radius: 1rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 1rem 2rem;

  :hover {
    cursor: pointer;
    background-color: #ddd;
    transition: all 0.5s;
  }
`;
