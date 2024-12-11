"use client";

const cards = [
  {
    image: "card1.jpeg",
    title: "Graphic Design",
    description: "A brand 3d Design Characteristic for growth",
  },
  {
    image: "card3.jpeg",
    title: "Graphic Design",
    description: "A brand 3d Design Characteristic for growth",
  },
  {
    image: "card2.jpeg",
    title: "Graphic Design",
    description: "A brand 3d Design Characteristic for growth",
  },
];

const PortfolioCard = () => {
  return (
    <>
      {cards.map((item, index) => (
        <div key={index} className="portfolio-card-container">
          <img src={`./${item.image}`} />
          <div className="portfolio-card-description">
            <h1>Graphic Design</h1>
            <p>A brand 3d Design Characteristic for growth</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioCard;
