"use client";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="contact-form-section">
      <h1>Contact Us</h1>
      <img
        src="../contact-us-backlight-left-1.svg"
        className="contact-backlight-left-1 light"
      />
      <img
        src="../contact-us-backlight-right-1.svg"
        className="contact-backlight-right-1 light"
      />
      <img
        src="../contact-us-backlight-right-2.svg"
        className="contact-backlight-right-2 light"
      />
      <img
        src="../contact-us-backlight-right-3.svg"
        className="contact-backlight-right-3 light"
      />
      <img
        src="../contact-us-backlight-right-4.svg"
        className="contact-backlight-right-4 light"
      />
      <div className="form-container">
        <ContactForm />
        {/* <img src="../ellipse161.svg" className="ellipse161 light" />
        <img src="../light-contactus.svg" className="light-contactus light" /> */}
      </div>
    </section>
  );
};

export default ContactSection;
