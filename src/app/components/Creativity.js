"use client";
import React, { useState } from "react";
import CreativityCard1 from "./CreativityCard1";
import CreativityCard2 from "./CreativityCard2";
import CreativityCard3 from "./CreativityCard3";
import CreativityCard4 from "./CreativityCard4";
import CreativityCard5 from "./CreativityCard5";
import CreativityCard6 from "./CreativityCard6";
import ViewMoreBtn from "./ViewMoreBtn";

const Creativity = () => {
  const [activeBtn, SetActiveBtn] = useState(1);

  return (
    <section className="creativity-container">
      <div className="creativity-header">
        <h1>See Our Creativity Unleashed</h1>
        <div className="btn-container">
          <button
            onClick={() => SetActiveBtn(1)}
            className={activeBtn === 1 ? "active" : ""}
          >
            Motion Design
          </button>
          <button
            onClick={() => SetActiveBtn(2)}
            className={activeBtn === 2 ? "active" : ""}
          >
            Graphic Design
          </button>
          <button
            onClick={() => SetActiveBtn(3)}
            className={activeBtn === 3 ? "active" : ""}
          >
            2D 3D Animations
          </button>
          <button
            onClick={() => SetActiveBtn(4)}
            className={activeBtn === 4 ? "active" : ""}
          >
            Social Media Content
          </button>
          <button
            onClick={() => SetActiveBtn(5)}
            className={activeBtn === 5 ? "active" : ""}
          >
            Video Editing
          </button>
          <button
            onClick={() => SetActiveBtn(6)}
            className={activeBtn === 6 ? "active" : ""}
          >
            VFX & Effects
          </button>
        </div>
      </div>
      <div className="cards-container">
        <div className="cards">
          {activeBtn === 1 ? (
            <CreativityCard1 />
          ) : activeBtn === 2 ? (
            <CreativityCard2 />
          ) : activeBtn === 3 ? (
            <CreativityCard3 />
          ) : activeBtn === 4 ? (
            <CreativityCard4 />
          ) : activeBtn === 5 ? (
            <CreativityCard5 />
          ) : activeBtn === 6 ? (
            <CreativityCard6 />
          ) : null}
        </div>
        <div className="btn-component3">
          <ViewMoreBtn text="View More" />
        </div>
      </div>
    </section>
  );
};

export default Creativity;
