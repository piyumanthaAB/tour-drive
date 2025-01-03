import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from './../../../images/banner_background.jpg';

export const ContentContainer = styled.div`
  width: 90%;
  min-height: 50rem;
  ${'' /* background-color:#000 ; */}
  margin:10rem auto;
  ${'' /* display:flex ; */}
  ${'' /* padding:1rem ; */}
`;

export const ToursSection = styled.div`
  display: flex;
  flex: 0 1 90%;
  ${'' /* justify-content:space-between ; */}
  ${'' /* background-color:red ; */}
    display:flex;
`;

export const TourListContainer = styled.div`
  flex: 0 1 70%;
  min-height: 10rem;
  ${'' /* display:flex ; */}
  ${'' /* justify-content:center ; */}
    ${'' /* background-color:green ; */}
    ${'' /* padding:2rem 1rem ; */}
`;

export const TourItemContainer = styled.div`
  flex: 0 1 100%;
  border-radius: 1rem;
  padding: 1rem;
  margin: 3rem 0;
  display: flex;
  box-shadow: 0px 0px 32px 0px rgba(143, 143, 143, 0.2);
`;

export const TourImgContainer = styled.div`
  flex: 0 1 30%;
  position: relative;
  ${'' /* background-image: url(${img_1}); */}
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
`;

export const TourDescContainer = styled.div`
  flex: 0 1 45%;
  padding: 2rem 3rem;
  position: relative;

  ::after {
    position: absolute;
    top: 10%;
    right: 0;
    width: 1px;
    height: 80%;
    background-color: #ccc;
    content: '';
  }
`;
export const TourTitle = styled.p`
  font-weight: 600;
  font-size: 2.5rem;
`;

export const Row = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

export const TourSecondaryTitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem 0;
`;

export const TourSecondaryTitle = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
`;
export const SecondaryTitleIcon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  margin-right: 0.5rem;
  color: var(--main-color);
`;
export const ReviewsContainer = styled.div`
  display: flex;
`;
export const ReviewTitle = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const ReviewIcon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  ${'' /* margin-right:0.5rem ; */}
  color:var(--main-color);
`;

export const TourPriceContainer = styled.div`
  flex: 0 1 30%;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;
export const TourDesc = styled.p`
  font-weight: 400;
  font-size: 1.9rem;
`;

export const PriceRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BadgeContainer = styled.div`
  display: flex;
  padding: 1rem 1rem;
  border: 1px solid var(--main-color);
  border-radius: 1rem;
  margin: 0 0.5rem;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.7rem;
`;

export const BadgeIcon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  margin-right: 0.5rem;
  color: var(--main-color);
`;

export const Price = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
`;

export const ExploreBtn = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: var(--main-color);
  padding: 0.8rem 2.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 1rem;
`;

export const FavouriteBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #eee;
  border: none;
  outline: none;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  transition: all 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const TourFilterContainer = styled.div`
  flex: 0 1 30%;
  ${'' /* background-color:#ccc ; */}
  display:flex;
  padding: 1rem 5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TourFilterTitle = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;
  margin: 0 0 1rem;
`;

export const TourFilterRow = styled.div`
  width: 100%;
  margin: 1rem 0;
  min-height: 4rem;
  ${'' /* background-color:green ; */}
`;

export const TourFilterRowTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 1rem;
`;

export const CheckBoxContainer = styled.div`
  width: '2rem';
  background-color: 'red';
`;

export const SliderContainer = styled.div``;

export const PriceBox = styled.div`
  width: 6rem;
  height: 3rem;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.6rem;
  border-radius: 0.5rem;
`;

export const PriceBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BannerContainer = styled.div`
  width: 100%;
  min-height: 50rem;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeadingText = styled.p`
  font-family: var(--primary-font);
  font-size: 3rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
`;

export const SignUpBtn = styled(Link)`
  font-size: 1.8rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 5rem;
  background-color: #fff;
  color: var(--main-color);
  font-family: var(--primary-fonr);
  margin: 2rem 0;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;
