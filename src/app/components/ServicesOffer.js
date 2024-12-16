"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const ServicesOffer = () => {
  // Duplicate cards for seamless loop
  useEffect(() => {
    const container = document.querySelector(".services-offer-cards");
    const cards = document.querySelectorAll(".services-offer-card");

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });

    // Total width of the cards
    const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
    const totalWidth = cardWidth * cards.length;

    // GSAP animation
    gsap.to(container, {
      x: -totalWidth, // Move left by the total width of the cards
      duration: 12, // Duration of the animation
      ease: "linear", // Smooth linear movement
      repeat: -1, // Infinite loop
      modifiers: {
        x: gsap.utils.wrap(-totalWidth, 0), // Seamless wrapping
      },
    }),
      [];
  });

  return (
    <div className="services-offer">
      <h1>We offer various services</h1>
      <div className="services-offer-cards">
        <div className="services-offer-card">
          <img src="/offer1.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>Motion Graphics</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer2.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>2D & 3D Animation</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer3.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>Social Media Content</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer4.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>Video Editing</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer5.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>VFX & Effects</p>
          </div>
        </div>
        <div className="services-offer-card">
          <img src="/offer6.jpg" />
          <div className="services-offer-card-text-overlay">
            <p>Graphic Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
