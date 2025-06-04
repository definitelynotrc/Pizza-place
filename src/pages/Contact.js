import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css"; // Adjust the path as necessary

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contactForm" method="POST">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your full name ..."
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your full email ..."
          />

          <label>Message</label>
          <textarea name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
