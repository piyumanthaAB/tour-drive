import styled from 'styled-components';
import img_1 from './../../../images/tours/tour_1.jpg'
import {Link} from 'react-router-dom';


export const ContentContainer = styled.div`
    width:80% ;
    min-height:50rem ;
    ${'' /* background-color:#000 ; */}
    margin:10rem auto ;
    
`;

export const ToursSection = styled.div`
    width:100% ;
    display:flex ;
    justify-content:space-between ;
`;

export const TourListContainer = styled.div`
    flex:0 1 75% ;
    min-height:10rem ;
    ${'' /* background-color:green ; */}
    padding:2rem 1rem ;
`;

export const TourFilterContainer = styled.div`
    flex:0 1 25% ;
    ${'' /* background-color:#ccc ; */}
`;

export const TourItemContainer = styled.div`
    flex:0 1 100% ;
    ${'' /* border:1px solid #000 ; */}
    border-radius:1rem ;
    min-height:25rem ;
    margin:3rem 0 ;
    display:flex ;
    box-shadow: 0px 0px 32px 0px rgba(143,143,143,0.2);

`;

export const TourImgContainer = styled.div`
    flex:0 1 30% ;
    ${'' /* background-image: url(${img_1}); */}
    background-image: url(${props => props.img });
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius:1rem ;

`;

export const TourDescContainer = styled.div`
    flex:0 1 35% ;
    padding:2rem 3rem;
    position:relative ;

    ::after{
        position:absolute ;
        top:10%;
        right:0 ;
        width:1px ;
        height:80% ;
        background-color:#ccc ;
        content:'' ;
    }

`;
export const TourTitle = styled.p`
    font-weight:600 ;
    font-size:2.5rem ;
`;

export const Row = styled.div`
    width:100% ;
    margin:2rem 0 ;

`;

export const TourSecondaryTitleContainer = styled.div`
    width:100% ;
    display:flex ;
    margin:0.5rem 0 ;
`;

export const TourSecondaryTitle = styled.p`
    font-weight:400 ;
    font-size:1.3rem ;
`;
export const SecondaryTitleIcon = styled.div`
    width:2rem ;
    height:2rem ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-size:1.8rem ;
    margin-right:0.5rem ;
    color:var(--main-color) ;
`;
export const ReviewsContainer = styled.div`
    display:flex ;
`;
export const ReviewTitle = styled.p`
    font-weight:400 ;
    font-size:1.3rem ;
    margin-left:1rem ;
`;

export const ReviewIcon = styled.div`
    width:2rem ;
    height:2rem ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-size:1.5rem ;
    ${'' /* margin-right:0.5rem ; */}
    color:var(--main-color) ;
    
`;

export const TourPriceContainer = styled.div`
    flex:0 1 30% ;
    padding:4rem 3rem ;
    display:flex ;
    flex-direction:column ;
    align-items:flex-end ;
    justify-content:space-around ;

`;
export const TourDesc = styled.p`
    font-weight:400 ;
    font-size:1.6rem ;
`;


export const PriceRow = styled.div`
    width:100% ;
    display:flex ;
    justify-content:flex-end;

`;

export const BadgeContainer = styled.div`
    display:flex ;
    padding:1rem 1rem ;
    border:1px solid var(--main-color) ;
    border-radius:1rem ;
    margin:0 0.5rem ;
    justify-content:center ;
    align-items:center ;
    font-weight:500 ;
    font-size:1.5rem ;
`;

export const BadgeIcon = styled.div`
    width:2rem ;
    height:2rem ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    font-size:1.8rem ;
    margin-right:0.5rem ;
    color:var(--main-color) ;
`;

export const Price = styled.p`
    font-size:2rem ;
    font-weight:600 ;
`;

export const ExploreBtn = styled(Link)`
    text-decoration:none ;
    color:#fff ;
    background-color:var(--main-color) ;
    padding:0.8rem 2.5rem ;
    font-size:1.8rem ;
    font-weight:600 ;
    border-radius:1rem ;
`