import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="contact-form-section">
      <h1>Contact Us</h1>
      <div className="form-container">
        <ContactForm />
        <img src="../ellipse161.svg" className="ellipse161 light" />
        <img src="../light-contactus.svg" className="light-contactus light" />
      </div>
    </section>
  );
};

export default ContactSection;
