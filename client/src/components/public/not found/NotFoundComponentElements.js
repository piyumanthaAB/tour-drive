import styled from 'styled-components';
import img from './../../../images/404.png';
import { Link } from 'react-router-dom';

export const Section = styled.div`
    width:100% ;
`;

export const Container = styled.div`
    width:80% ;
    ${'' /* display:flex ; */}
    margin:0 auto ;
`;

export const ImageContainer = styled.div`
    flex:0 1 100% ;
    min-height:50rem ;
    ${'' /* background-color:red ; */}
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
    flex:0 1 80% ;
    min-height:30rem ;
    text-align:center ;
    margin:0 0 2rem 0 ;
    ${'' /* background-color:green ; */}
`;

export const MainTitle = styled.p`
    font-size:5rem ;
    margin:2rem 0 ;
`;

export const SubTitle = styled.p`
    font-size:1.8rem ;
    margin:4rem 0 ;

`;

export const HomeBtn = styled(Link)`
    text-decoration:none ;
    background-color:var(--main-color) ;
    color:#fff ;
    padding:1rem 2rem ;
    border-radius:1rem ;
    font-size:2rem ;
`;







