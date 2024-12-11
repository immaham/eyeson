"use client";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <img src="./eyeson-footer.svg" />
          <div className="footer-container-left-text">
            <h1>Exelence In Every Detail</h1>
            <p>
              Detailed information about our motion graphics and animation
              services, including examples and benefits.
            </p>
          </div>
        </div>
        <div className="footer-container-right">
          <h1>Links</h1>
          <div className="footer-contact-links">
            <a href="#">
              <p>Home Page</p>
            </a>
            <a href="#">
              <p>Services</p>
            </a>
            <a href="#">
              <p>Portfolio</p>
            </a>
          </div>
          <div className="footer-contact-logos">
            <img src="./twitter-logo.svg" />
            <img src="./instagram-logo.svg" />
            <img src="./linkedin-logo.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
