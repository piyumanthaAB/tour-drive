import styled from 'styled-components'
import img from './../../images/camper-van.png'

export const NavContainer = styled.div`
    width:100% ;
    min-height:5rem ;
    background-color:#555 ;
    padding: 1rem 2rem;
`;

export const NavBrandContainer = styled.div`
    width:20% ;
    ${'' /* background-color:#ccc ; */}
    display:flex ;
`;

export const NavLogo = styled.div`

    width:8rem ;
    height:8rem ;
    border-radius:5rem ;
    background-color:#fff ;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`;

export const NavBrandText = styled.p`
    font-size:2rem ;
`;


export const NavLinksContainer = styled.div`

`;


