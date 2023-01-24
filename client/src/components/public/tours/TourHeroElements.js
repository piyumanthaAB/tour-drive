import styled from 'styled-components';
import img from './../../../images/tours/tour_page_hero.jpg'

export const Container = styled.div`
    width:100% ;
    min-height:40rem ;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position:relative ;
    display:flex ;
    align-items:center ;
    justify-content:center ;

    ::after{
      position  :absolute ;
      top:0 ;
      left:0 ;
      width:100% ;
      height:100% ;
      content:'' ;
      background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%);
z-index:9 ;
 }
`;

export const MainTitle = styled.p`
    font-weight:bold ;
    font-size:5rem ;
    color:#fff ;
    position:relative ;
    z-index:10 ;
    letter-spacing:0.1rem ;
    ${'' /* text-align:center ; */}

`