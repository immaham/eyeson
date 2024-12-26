"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Design = () => {
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
        // y: 100,
        scale: 0.5,
        opacity: 0,
        duration: 1,
        // ease: "bounce.inOut",
      });
    }
  }, []);

  return (
    <section className="services-design">
      <h1>bring your brand to life with our design services</h1>
      <img
        ref={lightRef}
        src="../services-light1.svg"
        className="services-light1"
      />
      <div className="cards">
        <div className="card">
          <div className="card-content">
            <h1>
              <span>1.</span>Motion Graphics
            </h1>
            <p>
              Detailed information about our motion graphics and animation
              services, including examples and benefits. Detailed information
              about our motion. Detailed information about our motion graphics
              and animation services, including examples and benefits.
            </p>
          </div>
          <img src="../services-design1.jpg" />
        </div>
        <div className="card">
          <div className="card-content">
            <h1>
              <span>2.</span>2D & 3D Animation
            </h1>
            <p>
              Detailed information about our motion graphics and animation
              services, including examples and benefits. Detailed information
              about our motion. Detailed information about our motion graphics
              and animation services, including examples and benefits.
            </p>
          </div>
          <img src="../services-design2.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Design;
