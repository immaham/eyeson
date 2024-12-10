"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Replace with actual form handling logic
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="firstName" className="label">
        First Name:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="input"
      />

      <label htmlFor="lastName" className="label">
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="input"
      />

      <label htmlFor="email" className="label">
        Email Address:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="input"
      />

      <label htmlFor="phone" className="label">
        Phone Number:
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="input"
      />

      <label htmlFor="message" className="label">
        Message:
      </label>
      <input
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="1"
        required
        className="input"
      />

      <button type="submit" className="form-btn">
        Send Form <img src="./frame-803.svg" />
      </button>
    </form>
  );
};

export default ContactForm;
