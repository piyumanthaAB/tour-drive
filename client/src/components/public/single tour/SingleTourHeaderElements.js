import styled from 'styled-components';
import img from './../../../images/home_cover.jpg';

export const HeaderSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f2fbfa;
`;

export const HeaderTitleContainer = styled.div`
  flex: 1;
  flex-basis: 30vh;
  padding: 5rem 12rem;
  display: flex;
  flex-direction: column;
`;

export const HeaderMainTitle = styled.p`
  font-size: 4.6rem;
  color: #333;
  font-weight: 700;
`;

export const HeaderSubTitleContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  margin: 2rem 0 0 0;
`;

export const HeaderSubTitle = styled.p`
  font-size: 2.2rem;
  display: flex;
  justify-self: flex-start;
`;

export const ReviewsContainer = styled.div`
  flex: 1;
  ${'' /* background-color:red ; */}
  display:flex;
  justify-content: flex-end;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: ${(props) => props.width || '5rem'};
  height: ${(props) => props.height || '5rem'};
  ${'' /* background-color:red ; */}
  font-size: ${(props) => props.fontsize || '2rem'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || '#333'};
`;

export const HeaderReviewText = styled.p`
  font-size: 1.5rem;
`;

export const HeaderGalleryContainer = styled.div`
  flex: 1;
  flex-basis: 50vh;
  display: flex;
  justify-content: space-between;
`;

export const HeaderImgContainer = styled.div`
  flex: 0 1 32%;
  min-height: 100%;
  background-image: url(${(props) => props.img || `${img}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeaderIconCardsContainer = styled.div`
  flex: 1;
  flex-basis: 20vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 12rem;
`;

export const IconCard = styled.div`
  flex: 0 1 15%;
  min-height: 70%;
  ${'' /* background-color:red ; */}
  margin:0 2rem 0 0;
  display: flex;
  align-items: center;
`;

export const IconCardTextContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  ${'' /* background-color:green ; */}
`;

export const IconContainerText = styled.p`
  font-size: ${(props) => props.fontsize || '2rem'};
  font-weight: ${(props) => props.fontweight || '400'};
  color: ${(props) => props.color || '#333'};
`;
