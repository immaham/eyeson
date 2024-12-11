"use client";
import PortfolioCard from "./../components/PortfolioCard";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-heading">
        <h1>Porfolio</h1>
        <div>
          <img src="./arrow.svg" />
          <img src="./arrow.svg" />
        </div>
      </div>
      <div className="portfolio-cards">
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
