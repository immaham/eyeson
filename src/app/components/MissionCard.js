"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const missionCardContents = [
  { svg: "user.svg", description: "Increase Engagement" },
  { svg: "globe-2.svg", description: "Expand your Network" },
  { svg: "favorite-chart.svg", description: "Increase Engagement" },
  { svg: "chart.svg", description: "High level Experience" },
  { svg: "designtools.svg", description: "Visualize your Product" },
];

const MissionCard = () => {
  useEffect(() => {
    const boxesArray = gsap.utils.toArray(".mission-card-container");

    gsap.from(boxesArray, {
      scrollTrigger: {
        trigger: boxesArray,
        start: "top bottom",
        end: "top center",
        scrub: true,
        // toggleActions: "onEnter onLeave onEnterBack onLeaveBack",
      },
      y: 200,
      opacity: 0.3,
      duration: 0.7,
      stagger: 0.3,
      yoyo: true,
    });
  }, []);

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
