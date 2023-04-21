import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../../images/tour_drive_logo.png';

export const NavbarContainer = styled.div`
  width: 100%;
  ${'' /* min-height:10rem ; */}
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 1.5rem 2rem;
  /* position: sticky; */
  /* top: 0; */
  z-index: 99999999999999999999999;
  /* backdrop-filter: blur(10px); */
  /* opacity: 0.8; */
`;

export const NavBrandCOntainer = styled(Link)`
  flex: 0 1 15%;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NavLinksContainer = styled.div`
  flex: 0 1 35%;
  ${'' /* background-color:blue ; */}
  display:flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  ${'' /* color:#333 ; */}
  font-size:1.5rem;
  text-decoration: none;
  transition: all 0.3s;
  color: ${(props) => (props.selected ? 'var(--main-color)' : '#333')};
  letter-spacing: 0.1rem;
  :hover {
    color: var(--main-color);
  }
`;

export const NavAuthButtonsContainer = styled.div`
  flex: 0 1 20%;
  display: flex;
  ${'' /* justify-content:space-around ; */}
  align-items:center;
`;

export const AuthButton = styled(Link)`
  width: 30%;
  background-color: ${(props) =>
    props.selected ? 'var(--main-color)' : '#fff'};
  font-size: 1.5rem;
  color: ${(props) => (props.selected ? '#fff' : '#333')};
  text-decoration: none;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  margin: 0 1rem 0 0;
  transition: all 0.3s;
  font-weight: 500;
  text-align: center;
  border: 1px solid #fff;
  letter-spacing: 0.1rem;

  :hover {
    background-color: ${(props) =>
      props.selected ? '#fff' : 'var(--main-color)'};
    color: ${(props) => (props.selected ? '#333' : '#fff')};
    border: ${(props) =>
      props.selected ? '1px solid var(--main-color)' : '1px solid #fff'};
  }
`;
