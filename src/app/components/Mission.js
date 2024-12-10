import React from "react";
import MissionCard from "./../components/MissionCard";

const Mission = () => {
  return (
    <div className="mission-container">
      <section className="mission">
        {/* <img src="../mission-light-1.svg" className="mission-light-1" /> */}
        <img src="../mission-light-2.svg" className="mission-light-2" />
        <img src="../mission-light-3.svg" className="mission-light-3" />
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
