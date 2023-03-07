import React, { Component } from "react";
import { BsFillStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import Slider from "react-slick";
import * as s from "./TourSliderElements";
// import { tours } from "../../data/tours";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
      }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      slidesToScroll: 2,
      variableWidth: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <s.SliderSection>
          <s.TopSliderSection>
            <s.Text margin={"3rem 0"} fontsize={"4.5rem"} fontweight={"700"}>
              Discover Weekly.
            </s.Text>
            <s.Text fontsize={"2rem"} color={"gray"}>
              you can choose popular tour here.
            </s.Text>
          </s.TopSliderSection>
          <div>
            <s.StyledSlider {...settings}>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>1 Tour name</s.SliderTitle>
                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>2 Tour name</s.SliderTitle>
                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>Tour name</s.SliderTitle>
                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>Tour name</s.SliderTitle>
                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>Tour name</s.SliderTitle>
                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>Tour name</s.SliderTitle>
                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>Tour name</s.SliderTitle>

                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>Tour name</s.SliderTitle>
                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
              <s.TourCard>
                <s.CardContainer>
                  <s.SliderImgContainer></s.SliderImgContainer>
                  <s.SliderDescContainer>
                    <s.SliderTitle>Tour name</s.SliderTitle>
                    <s.Row>
                      <s.SliderSecondaryTitleContainer>
                        <s.SecondaryTitleIcon>
                          <FiMapPin />
                        </s.SecondaryTitleIcon>
                        <s.SliderSecondaryTitle>
                          location town
                        </s.SliderSecondaryTitle>
                      </s.SliderSecondaryTitleContainer>
                      <s.ReviewsContainer>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsFillStarFill />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStarHalf />
                        </s.ReviewIcon>
                        <s.ReviewIcon>
                          <BsStar />
                        </s.ReviewIcon>
                      </s.ReviewsContainer>
                    </s.Row>
                    <s.TourPriceContainer>
                      <s.Price>$ 300</s.Price>
                      <s.ExploreBtn to={`/tours/test`}>Explore</s.ExploreBtn>
                    </s.TourPriceContainer>
                  </s.SliderDescContainer>
                </s.CardContainer>
              </s.TourCard>
            </s.StyledSlider>
          </div>
        </s.SliderSection>
      </>
    );
  }
}
