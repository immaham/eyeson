"use client";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const [response, setResponse] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let data;
      if (res.ok) {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          message: "",
        });
        data = await res.json();
        setResponse(data.message || "Form submitted successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          message: "",
        }); // Reset form on success
      } else {
        setResponse(`Error: ${res.statusText}`);
      }
    } catch (error) {
      console.log("Submission error:", error);
      setResponse("An error occurred while submitting the form.");
    }
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
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
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
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
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
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="input"
      />

      <label htmlFor="number" className="label">
        Phone Number:
      </label>
      <input
        type="tel"
        id="number"
        name="number"
        value={form.number}
        onChange={(e) => setForm({ ...form, number: e.target.value })}
        className="input"
      />

      <label htmlFor="message" className="label">
        Message:
      </label>
      <input
        id="message"
        name="message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows="1"
        required
        className="input"
      />
      {response && <p>{response}</p>}
      <button type="submit" className="form-btn">
        Send Form <img src="./frame-803.svg" alt="Send" />
      </button>
    </form>
  );
};

export default ContactForm;
