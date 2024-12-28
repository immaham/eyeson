"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Benefits = () => {
  gsap.registerPlugin(ScrollTrigger);
  const lightRef = useRef();
  useEffect(() => {
    {
      gsap.from(lightRef.current, {
        scrollTrigger: {
          trigger: lightRef.current,
          start: "bottom bottom",
          end: "top 50%",
          // toggleActions: "onEnter onLeave onEnterBack onLeaveBack",
        },
        y: 10,
        scale: 0.5,
        opacity: 0.5,
        duration: 1,
        ease: "circ.out",
      });
    }
  }, []);

  return (
    <section className="services-benefits">
      <h1>Our Benefits</h1>
      <div className="cards">
        <img ref={lightRef} src="./services-benefits.svg" />"
        <div className="card">
          <h2>Appeal</h2>
        </div>
        <div className="card">
          <h2>Clarity</h2>
        </div>
        <div className="card">
          <h2>Engagement</h2>
        </div>
        <div className="card">
          <h2>Consistency</h2>
        </div>
        <div className="card">
          <h2>Recognition</h2>
        </div>
      </div>
      <p>
        Effective design brings undeniable benefits to any brand or project,
        enhancing engagement by captivating audiences with visually appealing
        elements that draw attention. It provides clarity, making complex
        messages easy to understand,
      </p>
    </section>
  );
};

export default Benefits;
