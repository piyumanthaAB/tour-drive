import React from "react";
import * as h from "./HomeCoverElementsNew";
import tour from "../../images/tour_back.jpg";
import renting from "../../images/renting.jpg";

const HomeCoverNew = () => {
  return (
    <>
      <h.section>
        <h.panel image={tour}>
          <h.content right>
            <h.header>TOUR</h.header>
            <h.actions>
              <h.actionBtn>Get Started</h.actionBtn>
              <h.actionSearch>
                <form>
                  <input type="text" />
                  <input type="submit" />
                </form>
              </h.actionSearch>
            </h.actions>
          </h.content>
        </h.panel>
        <h.panel image={renting}>
          <h.content left>
            <h.header>DRIVE</h.header>
            <h.actions>
              <input type="text" />
              <h.actionBtn>Get Started</h.actionBtn>
            </h.actions>
          </h.content>
        </h.panel>
      </h.section>
    </>
  );
};

export default HomeCoverNew;
