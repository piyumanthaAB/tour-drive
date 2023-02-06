import React from "react";
import * as h from "./HomeCoverElements";
const HomeCover = () => {
  return (
    <>
      <h.section>
        <h.panel>
          <div className="overlay"></div>
          <h.tourH1>
            <h1>TOUR</h1>
          </h.tourH1>
          <h.btnTour>
            <a href="tours" className="btn">
              GET STARTED
            </a>
          </h.btnTour>

          <div className="test">tour search</div>
        </h.panel>
        <h.panel>
          <h.driveH1>
            <h1>DRIVE</h1>
          </h.driveH1>
          <h.btnDrive>
            <a href="#" className="btn">
              GET STARTED
            </a>
          </h.btnDrive>
          <div className="test">renting search</div>
        </h.panel>
      </h.section>
    </>
  );
};

export default HomeCover;
