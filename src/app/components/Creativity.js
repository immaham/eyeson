"use client";
import React, { useState } from "react";
import CritivityCard from "./CritivityCard";
import ViewMoreBtn from "./ViewMoreBtn";
import CreativityCard2 from "./CreativityCard2";

const cardsData = [
  {
    tag: "content",
    title: "Creative Content Production",
    text: "Detailed information about our motion graphics and animation services, including examples and benefits.  Detailed information.",
    img: "creativity1.jpeg",
  },
  {
    tag: "content",
    title: "Creative Content Production",
    text: "Detailed information about our motion graphics and animation services, including examples and benefits.  Detailed information.",
    img: "creativity2.jpeg",
  },
  {
    tag: "content",
    title: "Creative Content Production",
    text: "Detailed information about our motion graphics and animation services, including examples and benefits.  Detailed information.",
    img: "creativity3.jpeg",
  },
  {
    tag: "content",
    title: "Creative Content Production",
    text: "Detailed information about our motion graphics and animation services, including examples and benefits.  Detailed information.",
    img: "creativity4.jpeg",
  },
  {
    tag: "content",
    title: "Creative Content Production",
    text: "Detailed information about our motion graphics and animation services, including examples and benefits.  Detailed information.",
    img: "creativity5.jpeg",
  },
  {
    tag: "content",
    title: "Creative Content Production",
    text: "Detailed information about our motion graphics and animation services, including examples and benefits.  Detailed information.",
    img: "creativity6.jpeg",
  },
];

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
          {activeBtn === 1 ||
          activeBtn === 3 ||
          activeBtn === 4 ||
          activeBtn === 5 ||
          activeBtn === 6 ? (
            cardsData.map((card) => (
              <CritivityCard
                key={card.img}
                tag={card.tag}
                title={card.title}
                text={card.text}
                img={card.img}
              />
            ))
          ) : (
            <CreativityCard2 />
          )}
        </div>
        <div className="btn-component3">
          <ViewMoreBtn text="View More" />
        </div>
      </div>
    </section>
  );
};

export default Creativity;
