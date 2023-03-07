import styled from 'styled-components'
import { Link } from 'react-router-dom';
import img from './../../images/tour_drive_logo.png'


export const FooterSection = styled.div`
    width:100% ;
    min-height:30rem ;
    ${'' /* background-color:#444 ; */}
    background-color:${props=>props.color || '#fff'};
    display:flex ;
    padding:4rem 0 ;
    
`;

export const Container = styled.div`

    flex:0 1 80% ;
    background-color:${props=>props.color || '#fff'};
    min-height:100% ;
    margin:0 auto ;
    display:flex ;
    color:"#fff";
`;

export const ColumOne = styled.div`

    flex:0 1 40% ;
    ${'' /* background-color:green ; */}
    ${'' /* display:flex ; */}
    flex-direction:column ;
    justify-content:flex-start ;
`;

export const Col = styled.div`
    flex:0 1 20% ;
    display:flex ;
    flex-direction:column ;
    align-items:flex-flex-start ;
    padding:0 0 0 5rem ;
`;

export const FooterBrandContainer = styled.div`
    flex:0 1 100% ;
    margin:0 0 1rem 0 ;
`;

export const FooterBrand = styled.div`
    width:40% ;
    height:5rem ;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ${'' /* background-color:red ; */}

`;

export const Desc = styled.p`
    font-size:1.6rem ;
    color:${props=>props.textColor || '#333'} ;
    line-height:3rem ;
    letter-spacing:0.1rem ;
    margin:2rem 0 ;
`;

export const IconsContainer = styled.div`
    width:100% ;
    display:flex ;
`;

export const Icon = styled.div`
    width:5rem ;
    height:5rem ;
    font-size:2.1rem ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    color:${props=>props.iconColor || '#555'} ;
    transition:all 0.2s ;

    :hover{
        cursor:pointer ;
        color:var(--main-color);
    }
`;

export const FooterTitle = styled.p`
    font-weight:600 ;
    font-size:1.9rem ;
    color:${props=>props.headingColor || '#333'} ;
    margin:0 0 1rem 0 ;
`;

export const FooterLink = styled(Link)`
    text-decoration:none ;
    color:${props=>props.textColor || '#333'} ;
    font-size:1.6rem ;
    margin: 1.8rem 0;
    transition:all 0.2s ;

    :hover{
        cursor:pointer ;
        color:var(--main-color);
    }
`;

export const FooterAddressInfoItemsContainer = styled.div`

    ${'' /* display:flex ; */}
    flex-direction:column ;
    margin:0 0 1rem 0 ;

`;
export const FooterContactInfoItemsContainer = styled.div`

    display:flex ;
    align-items:center ;
    ${'' /* margin:0.5rem 0 ; */}

`;

export const ContactIcon = styled.div`
    width:4rem ;
    height:4rem ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    color:var(--main-color);
    font-size:2.2rem ;
`;