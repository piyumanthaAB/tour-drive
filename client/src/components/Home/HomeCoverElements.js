import styled from "styled-components";
import tour from "../../images/tour_back.jpg";
import renting from "../../images/renting.jpg";

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
    transition: all 1.5s ease;
`;

const hover = `
   
    .test {
            position: absolute;
            display: none;
        }
    &:hover {
        flex-grow: 3;
        .test {
            display: block;
        }
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
    border: 3px solid #fff;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const panel = styled.div`
  flex-grow: 1;
  transition: all 1.7s ease;
  position: relative;
  &:hover .overlay {
    opacity: 0.6;
    // backdrop-filter: invert(80%);
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
    border: 3px solid #fff;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.1);
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
