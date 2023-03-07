import React from 'react'
import { TourItemContainer, TourPriceContainer, TourDescContainer,
    TourImgContainer, TourTitle,Price,ExploreBtn,
    ContentContainer, TourFilterContainer, TourSecondaryTitleContainer,
    TourSecondaryTitle, BadgeIcon, BadgeContainer, PriceRow,TourFilterRow,
    TourListContainer, ToursSection, SecondaryTitleIcon, ReviewTitle,TourFilterRowTitle,
    ReviewsContainer, ReviewIcon, Row, TourDesc,FavouriteBtn,TourFilterTitle
} from './TourListElements';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { FiMapPin,FiUsers,FiClock } from "react-icons/fi";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const TourListComponent = ({tours}) => {
    
    return (
        <>
            <ContentContainer>
                <ToursSection>
                    <TourListContainer>
                        
                        {tours.map((tour, id) => {
                            return (
                                <>
                                    <TourItemContainer key={tour?._id}>
                                        <TourImgContainer img={tour.tour_cover} >
                                            {/* mui check box with icon can use here */}
                                            
                                            <FavouriteBtn>
                                                <Checkbox
                                                    icon={<FavoriteBorder />}
                                                    checkedIcon={<Favorite />}
                                                    sx={{
                                                        color: '#333',
                                                        '&.Mui-checked': {
                                                            color: 'var(--main-color)',
                                                        },
                                                        '& .MuiSvgIcon-root': { fontSize: 20 }
                                                    }}
                                                />
                                            </FavouriteBtn>
                                        </TourImgContainer>
                                        <TourDescContainer>
                                            <TourTitle>{tour?.name}</TourTitle>
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
                        <TourFilterTitle>
                            Filter Tours
                        </TourFilterTitle>
                        <TourFilterRow>
                            <TourFilterRowTitle>Categories</TourFilterRowTitle>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked
                                
                                    sx={{
                                        color: '#333',
                                        '&.Mui-checked': {
                                            color: 'var(--main-color)',
                                        },
                                        '& .MuiSvgIcon-root': { fontSize: 25 },
                                        "& .MuiFormControlLabel-label": {
                                            fontSize: "50px",
                                        }
                                    }}
                                />} label="Label" />
                            </FormGroup>

                        </TourFilterRow>
                        <TourFilterRow>
                            <TourFilterRowTitle>Reviews Score</TourFilterRowTitle>
                        
                        </TourFilterRow>
                        <TourFilterRow>
                            <TourFilterRowTitle>Filter Price</TourFilterRowTitle>
                        
                        </TourFilterRow>
                    </TourFilterContainer>
                </ToursSection>
                
            </ContentContainer>
        </>
    );
}

export default TourListComponent