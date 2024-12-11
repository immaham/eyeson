"use client";
import { useEffect, useRef } from "react";
import MissionCard from "./../components/MissionCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const textRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 680) {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
          // toggleActions: "onEnter onLeave onEnterBack onLeaveBack",
        },
        x: 300,
        opacity: 0.3,
        duration: 1,
      });
    }
  }, []);

  return (
    <div className="mission-container">
      <section className="mission">
        {/* <img src="../mission-light-1.svg" className="mission-light-1" /> */}
        <img src="../mission-light-2.svg" className="mission-light-2" />
        <img src="../mission-light-3.svg" className="mission-light-3" />
        <h1 className="mission-title">What is our mission</h1>
        <p ref={textRef} className="mission-description">
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
