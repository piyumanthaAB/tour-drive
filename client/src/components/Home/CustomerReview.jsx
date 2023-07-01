import React from "react";
import "./CustomerReviewStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../images/11.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import * as r from "./CustomerReviewElements";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

function CustomerReview() {
  return (
    <>
      <div className="reviewSection">
        <div className="container">
          <r.heading margin={"3rem 0"} fontsize={"4.5rem"} fontweight={"700"}>
            What Our Happy Clients Say
          </r.heading>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <div className="col">
                <div className="content">
                  <div className="img"></div>
                  <div className="text">
                    <p>
                      I recently used TOUR DRIVE for my vacation, and I can't
                      say enough good things about the experience. From start to
                      finish, everything was handled with professionalism and
                      excellence.
                    </p>
                    <p className="name">John Smith</p>
                    <p className="position">Hiker</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div className="content">
                  <div className="img1"></div>
                  <div className="text">
                    <p>
                      The website was user-friendly, with an intuitive interface
                      that allowed easy navigation. It offered a wide range of
                      tour options and vehicles for booking. I could quickly
                      filter my search based on my preferences and requirements.
                    </p>
                    <p className="name">Bradley Cooper</p>
                    <p className="position">Journalist</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div className="content">
                  <div className="img2"></div>
                  <div className="text">
                    <p>
                      TOUR DRIVE offered exceptional service with memorable
                      tours. Their well-planned itineraries ensured I made the
                      most of my time and explored the highlights of each
                      destination. Whether it was a city sightseeing tour,
                      cultural excursion, or thrilling adventure, the quality of
                      service remained consistently outstanding.
                    </p>
                    <p className="name">Kevin Hart</p>
                    <p className="position">Actor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div className="content">
                  <div className="img3"></div>
                  <div className="text">
                    <p>
                      this is example review card customer review text is here
                    </p>
                    <p className="name">person name</p>
                    <p className="position">CEO</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div className="content">
                  <div className="img"></div>
                  <div className="text">
                    <p>
                      this is example review card customer review text is here
                    </p>
                    <p className="name">person name</p>
                    <p className="position">CEO</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ArrowBackIosNew />
              </div>
              <div className="swiper-button-next slider-arrow">
                <ArrowForwardIos />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default CustomerReview;
