import React from "react";

const missionCardContents = [
  { svg: "user.svg", description: "Increase Engagement" },
  { svg: "globe-2.svg", description: "Expand your Network" },
  { svg: "favorite-chart.svg", description: "Increase Engagement" },
  { svg: "chart.svg", description: "High level Experience" },
  { svg: "designtools.svg", description: "Visualize your Product" },
];

const MissionCard = () => {
  return (
    <>
      {missionCardContents.map((item, index) => (
        <div className="mission-card-container" key={index}>
          <img className="mission-card-svg" src={`./${item.svg}`} />
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default MissionCard;
