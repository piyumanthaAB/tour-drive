import React from 'react'
import { TourItemContainer, TourPriceContainer, TourDescContainer,
    TourImgContainer, TourTitle,Price,ExploreBtn,
    ContentContainer, TourFilterContainer, TourSecondaryTitleContainer,
    TourSecondaryTitle, BadgeIcon, BadgeContainer, PriceRow,
    TourListContainer, ToursSection, SecondaryTitleIcon, ReviewTitle,
    ReviewsContainer, ReviewIcon, Row, TourDesc
} from './TourListElements';

import { FiMapPin,FiUsers,FiClock } from "react-icons/fi";
import { BsFillStarFill,BsStarHalf,BsStar } from "react-icons/bs";

const TourListComponent = ({tours}) => {
    return (
        <>
            <ContentContainer>
                <ToursSection>
                    <TourListContainer>
                        
                        {tours.map((tour, id) => {
                            return (
                                <>
                                    <TourItemContainer key={tour._id}>
                                        <TourImgContainer img={tour.tour_cover} />
                                        <TourDescContainer>
                                            <TourTitle>{ tour.name}</TourTitle>
                                            <Row>
                                  
                                                <TourSecondaryTitleContainer>
                                                    <SecondaryTitleIcon><FiMapPin /></SecondaryTitleIcon>
                                                    <TourSecondaryTitle>Copenhagen, Denmark</TourSecondaryTitle>
                                                </TourSecondaryTitleContainer>
                                                <ReviewsContainer>
                                                    <ReviewIcon><BsFillStarFill /></ReviewIcon>
                                                    <ReviewIcon><BsFillStarFill /></ReviewIcon>
                                                    <ReviewIcon><BsFillStarFill /></ReviewIcon>
                                                    <ReviewIcon><BsStarHalf /></ReviewIcon>
                                                    <ReviewIcon><BsStar /></ReviewIcon>
                                                    <ReviewTitle>2 reviews</ReviewTitle>
                                                </ReviewsContainer>
                                            </Row>
                                            <Row>
                                                <TourDesc>
                                                    Copenhagen, Denmark’s capital, sits on the coastal islands of Zealand and Amager
                                                </TourDesc>
                                            </Row>
                                        </TourDescContainer>
                                        <TourPriceContainer>

                                            <PriceRow>
                                                <BadgeContainer>
                                                    <BadgeIcon><FiUsers /></BadgeIcon>{tour.max_seats}
                                                </BadgeContainer>
                                                <BadgeContainer>
                                                    <BadgeIcon><FiClock /></BadgeIcon>{tour.duration} Days
                                                </BadgeContainer>
                                            </PriceRow>
                                            <Price>$ {tour.price}</Price>
                                            <ExploreBtn to={`/tours/${tour._id}`}>Explore</ExploreBtn>
                                        </TourPriceContainer>
                                    </TourItemContainer>
                                </>
                            )
                        })}
                        
                    </TourListContainer>
                    <TourFilterContainer>
                      
                    </TourFilterContainer>
                </ToursSection>
            </ContentContainer>
        </>
    );
}

export default TourListComponent