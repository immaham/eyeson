import React from "react";
import MissionCard from "./../components/MissionCard";

const Mission = () => {
  return (
    <div className="mission-container">
      <section className="mission">
        <img src="./ellipse-152.svg" className="mission-dark light" />
        <img src="./ellipse-8.svg" className="mission-light light" />
        <h1 className="mission-title">What is our mission</h1>
        <p className="mission-description">
          Detailed information about our motion graphics and animation services,
          including examples and benefits. Detailed information about our
          motion.
        </p>
        <div className="mission-card-flex">
          <MissionCard />
        </div>
      </section>
    </div>
  );
};

export default Mission;
