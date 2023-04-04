import React from 'react';
import * as v from './VehicleListElements';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { FiMapPin, FiUsers, FiClock } from 'react-icons/fi';
import { BsFillStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const VehicleListComp = ({ vehicles }) => {
  return (
    <>
      <v.ContentContainer>
        <v.VehicleSection>
          <v.VehicleListContainer>
            {vehicles.map((vehicle, id) => {
              return (
                <>
                  <v.VehicleItemContainer key={id}>
                    <v.VehicleImgContainer
                      img={`${process.env.PUBLIC_URL}/vehicle-uploads/${vehicle.cover_URL}`}
                    >
                      {/* mui check box with icon can use here */}

                      <v.FavouriteBtn>
                        <Checkbox
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          sx={{
                            color: '#333',
                            '&.Mui-checked': {
                              color: 'var(--main-color)',
                            },
                            '& .MuiSvgIcon-root': { fontSize: 20 },
                          }}
                        />
                      </v.FavouriteBtn>
                    </v.VehicleImgContainer>
                    <v.VehicleDescContainer>
                      <v.VehicleTitle>
                        {`${vehicle.brand} ${vehicle.model}`}
                      </v.VehicleTitle>
                      <v.Row>
                        <v.VehicleSecondaryTitleContainer>
                          <v.VehicleSecondaryTitle>
                            {vehicle.status}
                          </v.VehicleSecondaryTitle>
                        </v.VehicleSecondaryTitleContainer>
                        <v.ReviewsContainer>
                          <v.ReviewIcon>
                            <BsFillStarFill />
                          </v.ReviewIcon>
                          <v.ReviewIcon>
                            <BsFillStarFill />
                          </v.ReviewIcon>
                          <v.ReviewIcon>
                            <BsFillStarFill />
                          </v.ReviewIcon>
                          <v.ReviewIcon>
                            <BsStarHalf />
                          </v.ReviewIcon>
                          <v.ReviewIcon>
                            <BsStar />
                          </v.ReviewIcon>
                          <v.ReviewTitle>2 reviews</v.ReviewTitle>
                        </v.ReviewsContainer>
                      </v.Row>
                      <v.Row>
                        <v.VehicleDesc>
                          A/C, Power Steering, CD Player, Auto
                        </v.VehicleDesc>
                      </v.Row>
                    </v.VehicleDescContainer>
                    <v.VehiclePriceContainer>
                      <v.PriceRow>
                        <v.BadgeContainer>
                          <v.BadgeIcon>
                            <FiUsers />
                          </v.BadgeIcon>
                          {vehicle.seats} seats
                        </v.BadgeContainer>
                      </v.PriceRow>
                      <v.Price>$ {vehicle.price_per_day_without_dr}</v.Price>
                      <v.ExploreBtn to={`/vehicles/${vehicle._id}`}>
                        View
                      </v.ExploreBtn>
                    </v.VehiclePriceContainer>
                  </v.VehicleItemContainer>
                </>
              );
            })}
          </v.VehicleListContainer>

          {/* <TourFilterContainer>
            <TourFilterTitle>Filter Tours</TourFilterTitle>
            <TourFilterRow>
              <TourFilterRowTitle>Categories</TourFilterRowTitle>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "#333",
                        "&.Mui-checked": {
                          color: "var(--main-color)",
                        },
                        "& .MuiSvgIcon-root": { fontSize: 25 },
                        "& .MuiFormControlLabel-label": {
                          fontSize: "50px",
                        },
                      }}
                    />
                  }
                  label="Label"
                />
              </FormGroup>
            </TourFilterRow>
            <TourFilterRow>
              <TourFilterRowTitle>Reviews Score</TourFilterRowTitle>
            </TourFilterRow>
            <TourFilterRow>
              <TourFilterRowTitle>Filter Price</TourFilterRowTitle>
            </TourFilterRow>
          </TourFilterContainer> */}
        </v.VehicleSection>
      </v.ContentContainer>
    </>
  );
};

export default VehicleListComp;
