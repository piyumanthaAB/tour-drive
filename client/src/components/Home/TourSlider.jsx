import React, { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as s from "./TourSliderElements.js";
import NoRecordFound from "../shared/NoRecordFound.jsx";
import Rating from "react-rating";
import BounceLoader from "react-spinners/ClipLoader.js";

export default function TourSlider({ data, isPending, isError }) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  console.log(data);

  // isPending = true;

  // data = {
  //   data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  // };

  return (
    <>
      <s.SliderSection>
        <s.TopSliderSection>
          <s.Text margin={"3rem 0"} fontsize={"4.5rem"} fontweight={"700"}>
            Select Your Vehicle
          </s.Text>
          <s.Text fontsize={"2rem"} color={"gray"}>
            you can choose your favourite vehicle here.
          </s.Text>
        </s.TopSliderSection>

        {isError ? (
          <p>error</p>
        ) : isPending ? (
          <BounceLoader
            size={60}
            cssOverride={{
              display: "block",
              margin: "15rem auto",
              justifyContent: "center",
            }}
          />
        ) : data?.data.length == 0 ? (
          <NoRecordFound />
        ) : (
          <>
            <div>
              <s.StyledSlider {...settings}>
                {data.data.map((tour, index) => (
                  <s.TourCard key={index}>
                    <s.CardContainer>
                      <s.SliderImgContainer
                        img={`${process.env.PUBLIC_URL}/tour-uploads/${tour.tour_cover}`}
                      ></s.SliderImgContainer>
                      <s.SliderDescContainer>
                        <s.SliderTitle>{tour.name}</s.SliderTitle>
                        <s.Row>
                          <s.SliderSecondaryTitleContainer>
                            <s.SecondaryTitleIcon>
                              <FiMapPin />
                            </s.SecondaryTitleIcon>
                            <s.SliderSecondaryTitle>
                              {tour?.cities?.split(",").map((city, i) => {
                                return `${city},`;
                              })}
                            </s.SliderSecondaryTitle>
                          </s.SliderSecondaryTitleContainer>
                          <s.ReviewsContainer>
                            <Rating
                              emptySymbol={
                                <BsFillStarFill color="#888" size={15} />
                              }
                              fullSymbol={
                                <BsFillStarFill
                                  color={"var(--main-color)"}
                                  size={15}
                                />
                              }
                              initialRating={
                                (tour?.locationRatingsAverage +
                                  tour?.serviceRatingsAverage) /
                                  2 || 0
                              }
                              readonly
                            />
                          </s.ReviewsContainer>
                        </s.Row>
                        <s.TourPriceContainer>
                          <s.Price>$ {tour?.price}</s.Price>
                          <s.ExploreBtn to={`/tours/${tour._id}`}>
                            Explore
                          </s.ExploreBtn>
                        </s.TourPriceContainer>
                      </s.SliderDescContainer>
                    </s.CardContainer>
                  </s.TourCard>
                ))}
              </s.StyledSlider>
            </div>
          </>
        )}
      </s.SliderSection>
    </>
  );
}
