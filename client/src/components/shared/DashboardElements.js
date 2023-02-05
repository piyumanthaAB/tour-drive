import styled from "styled-components";
import img from './../../images/1.png'
import { Link } from "react-router-dom";

export const Conatiner = styled.div`

    width:100% ;
    min-height:100vh ;
    ${'' /* background-color:red ; */}
    display:flex ;

`;

export const ContainerLeft = styled.div`
    display:flex ;
    flex:0 1 20% ;
    ${'' /* background-color:green ; */}
    border-right:2px solid #ccc ;
    flex-direction:column ;
`;

export const ContainerRight = styled.div`
    flex:0 1 80% ;
    display:flex ;
    flex-direction:column ;
    ${'' /* background-color:blue ; */}
`;

export const LeftTopContainer = styled.div`
    display:flex ;
    width:100% ;
    padding:3rem 1rem 3rem 2rem ;
    ${'' /* justify-content:space-between ; */}
    
`;

export const AvatarContainer = styled.div`
    width:6rem ;
    height:6rem ;
    border-radius:50% ;
    background-color:#ccc ;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const LeftContainerNameContainer = styled.div`
    flex:0 1 60% ;
    ${'' /* background-color:red ; */}
    margin:0 0 0 2rem ;
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
`;

export const WelcomeText = styled.p`
    font-size:1.5rem ;
    margin:0 0 0.5rem ;
`;
export const NameText = styled.p`
    font-size:1.5rem ;
    font-weight:1000 ;
    font-family:var(--secondary-font) ;
`;

export const HR = styled.hr`
    width:80% ;
    margin:0 auto ;
    border: 1px solid #ccc;
    background-color:#ccc ;
`;

export const LeftBottomContainer = styled.div`
    display:flex ;
    flex:0 1 100% ;
    padding:2rem 0 ;
    flex-direction:column ;
    justify-content:flex-start ;
    align-items:center ;
`;

export const MenueBar = styled.div`
    background-color:#444 ;
    border-radius:2rem ;
    width:85% ;
    height:3rem ;
    display:flex ;
    align-items:center ;
    justify-content:space-evenly ;


    
`;
export const IconContainer = styled.button`
    width:2rem ;
    height:2rem ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    font-size:1.5rem ;
    color:${props => props.selected ? 'var(--main-color)' : "#fff"};
    
    &:hover{
        color:var(--main-color);
        cursor: pointer;
    }
    
    background-color:#444 ;
    border:none ;
    outline:none ;
    transition:all 0.2s ;
`;

export const OptionsContainer = styled.div`
    width:85% ;
    border:1px solid var(--main-color);
    ${'' /* background-color:red ; */}
    min-height:30rem ;
    margin:3rem 0 ;
    border-radius:2rem ;
    padding:3rem 2rem ;
`;

export const OptionsTitle = styled.p`
    font-size:1.75rem ;
    margin:0 0 1rem 0 ;
    font-weight:1000 ;
    
`;

export const OptionContainer = styled(Link)`
    width:100% ;
    margin:1rem 0 ;
    display:flex ;
    align-items:center ;
    &:hover{
        color:#333;
        font-weight:bold ;
        cursor: pointer;
    }
    color:#777 ;
    font-weight:${props => props.selected ? 'bold' : "400"}; ;
    text-decoration:none ;
    transition:all 0.2s ;

`;

export const Option = styled.p`
    font-size:1.3rem ;
    font-family:var(--secondary-font) ;
`;

export const OptionIconContainer = styled.div`
    width:2rem ;
    height:2rem ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    ${'' /* background-color:red ; */}
    font-size:1.2rem ;
    margin:0 1rem 0 0 ;

    
`;
