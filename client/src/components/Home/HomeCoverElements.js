import styled from 'styled-components';
import tour from '../../images/tour_back.jpg';
import renting from '../../images/renting.jpg';
import { keyframes } from 'styled-components';

export const section = styled.div`
    min-width: 100%;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;

    
.overlay{
    background-color: black;
    position: absolute;
    opacity: 0;
    // backdrop-filter: blur(12px);
    width: 100%;
    height: 800px;
    transition: all 1.2s ease;
`;

const hover = `
   
    .test {
            position: absolute;
            display: none;
        }
    &:hover {
        flex-grow: 3;
        transition-timing-function: cubic-bezier(0.55, 2.03, 0.17, 0.93);
        .test {
            display: block;
        }
    }
`;

const animation = keyframes`
    100%{
      box-shadow: 0px 0px 100px 5px #000;
    }
`;

export const btnTour = styled.a`
  position: absolute;
  right: 70px;
  display: flex;
  flex-direction: row-reverse;
  padding-top: 350px;
  z-index: 9998;
  transition: transform 0.8s;
  .btn {
    padding: 1.5rem;
    width: 16rem;
    text-decoration: none;
    border: 5px solid #fff;
    border-radius: 15px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.1);
    transition: color 0.4s linear;
    position: relative;
  }
  .btn:focus {
    border-color: var(--secondary-color);
    background: var(--secondary-color);
    box-shadow: 0px 0px 2px 1px var(--secondary-color);
    animation: ${animation} 0.2s forwards;
  }
  .btn: hover {
    color: #000;
  }
  .btn: before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    background: #fff;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  }
  .btn::before {
    transform: scaleX(0);
  }
  .btn:hover::before {
    transform: scaleX(1);
  }
`;

export const panel = styled.div`
  flex-grow: 1;
  transition: all 1.7s ease;
  position: relative;

  &:hover .overlay {
    opacity: 0.6;
    backdrop-filter: blur(12px);
  }
  &:nth-child(even) {
    background-image: url(${renting});
    background-repeat: no-repeat;
    background-size: cover;
    ${hover}
  }
  &:nth-child(odd) {
    background-image: url(${tour});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    ${hover}
  }
`;
export const btnDrive = styled.a`
  position: absolute;
  display: flex;
  flex-direction: row;
  padding-left: 70px;
  padding-top: 350px;
  z-index: 9999;
  .btn {
    padding: 1.5rem;
    width: 16rem;
    text-decoration: none;
    border: 5px solid #b6b6b6;
    border-radius: 15px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.1);
    transition: color 0.4s linear;
    position: relative;
  }
  .btn:focus {
    border-color: var(--main-color);
    background: var(--main-color);
    box-shadow: 0px 0px 2px 1px var(--main-color);
    animation: ${animation} 0.2s forwards;
  }
  .btn: hover {
    color: #000;
  }
  .btn: before {
    content: '';
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    background: #b6b6b6;
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  }
  .btn::before {
    transform: scaleX(0);
  }
  .btn:hover::before {
    transform: scaleX(-1);
  }
`;

export const tourH1 = styled.div`
    z-index: 9997;
    position: absolute;
    right: 70px;
    font-size: 80px;
    font-family: var(--secondary-font);
    font-weight: bold;
    color: var(--secondary-color)
    }
 `;
export const driveH1 = styled.div`
  position: absolute;
  padding-left: 40px;
  z-index: 9996;
  display: flex;
  flex-direction: row;
  font-size: 80px;
  font-family: var(--secondary-font);
  font-weight: bold;
  color: var(--main-color);
`;
