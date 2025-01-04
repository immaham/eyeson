"use client";
import React, { useEffect, useState } from "react";

const PortfolioCard = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("/api/portfolio-home-card");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    }
    fetchCards();
  }, []);
  return (
    <>
      {cards.map((item) => (
        <div key={item._id} className="portfolio-card-container">
          <img src={`./${item.image}`} />
          <div className="portfolio-card-description">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioCard;
