"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <img src="./../eyeson-footer.svg" />
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
            <a href="/">
              <p>Home Page</p>
            </a>
            <a href="/services">
              <p>Services</p>
            </a>
            <a href="/portfolio">
              <p>Portfolio</p>
            </a>
          </div>
          <div className="footer-contact-logos">
            <Link href="https://youtube.com/@eyeson.studio?si=s5wrK71iw3GPdXC5">
              <img
                src="./../twitter-logo.svg"
                className="footer-contact-logo"
              />
            </Link>
            <Link href="https://www.instagram.com/eyesonstudio?igsh=MWVzeGV1emk1aXdoeQ==">
              <img
                src="./../instagram-logo.svg"
                className="footer-contact-logo"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/webilancer">
              <img
                src="./../linkedin-logo.svg"
                className="footer-contact-logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
