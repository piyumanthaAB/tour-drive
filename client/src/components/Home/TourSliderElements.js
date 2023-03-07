import styled from "styled-components";
import cover from "../../images/home_cover.jpg"
import {Link} from 'react-router-dom';
import Slider from "react-slick";


export const StyledSlider = styled(Slider)`
   .slick-slide {
      margin-right: 10px;

  }
  .slick-list {
      margin:-5px;
  }
 
`;

export const Text = styled.p`
    font-size:${props=>props.fontsize || '1.5rem'} ;
    color:${props=>props.color || '1.5rem'} ;
    font-weight:${props=>props.fontweight || '1.5rem'} ;
    margin:${props => props.margin || '0'} ;
    font-family:${props=>props.fontfamily || 'var(--primary-font)'} ;
    line-height: ${props=>props.lineheight || '2.5rem'};
`;
export const SliderSection = styled.div`
    width:100% ;
    min-height:10rem ;
    max-height: 100rem;
    ${'' /* background-color:red ; */}
    padding:13rem 5rem ;
    flex-direction:column ;
    position: relative;
    z-index: 1;
    background-color: #fff3f1;
`;

export const TopSliderSection = styled.div`
    padding: 0rem 0rem 8rem 6rem;
`;

export const TourCard = styled.div`
    width: 100px;
    display: flex;
    background-color:white;
    border-radius:1rem ;
    padding:1rem ;
    margin:3rem 0 ;
    display:flex ;
    box-shadow: 0px 0px 32px 0px rgba(143,143,143,0.2);

`;

export const CardContainer = styled.div`
    flex-direction: column;
`;

export const SliderImgContainer = styled.div`
    flex:0 1 30% ;
    height: 25rem;
    ${'' /* background-image: url(${img_1}); */}
    background-image: url(${cover});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;

`;
export const SliderDescContainer = styled.div`
    flex:0 1 35% ;
    padding:1rem 2rem;
    position:relative ;


`;
export const SliderTitle = styled.p`
    font-weight:600 ;
    font-size:2.5rem ;
`;


export const Row = styled.div`
    width:100% ;
    margin:1rem 0 ;
    display: flex;
    flex-direction: row;

`;

export const SliderSecondaryTitleContainer = styled.div`
    width:100% ;
    display:flex ;
    margin:0.5rem 0 ;
`;

export const SliderSecondaryTitle = styled.p`
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
    margin-left:0.5rem ;
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
export const Price = styled.p`
    padding: 0.5rem;
    font-size:2rem ;
    font-weight:600 ;
`;

export const TourPriceContainer = styled.div`
    flex:0 1 30% ;
    padding:0.2rem 0.5rem ;
    display:flex ;
    flex-direction:column ;
    align-items:flex-end ;
    justify-content:space-around ;

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