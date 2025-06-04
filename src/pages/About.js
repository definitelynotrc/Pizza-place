import React from "react";
import "../styles/About.css"; // Adjust the path as necessary
import MultiplePizzas from "../assets/multiplePizzas.jpeg"; // Adjust the path as necessary
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          At Kiffy Pizza, we're all about serving up happiness—one slice at a
          time. Founded with a passion for bold flavors and a love for bringing
          people together, Kiffy Pizza offers a fresh, creative take on your
          favorite classic pies. From our handcrafted dough to our signature
          sauces and premium toppings, every pizza is made with care and the
          finest ingredients. Whether you're craving something traditional or
          feeling adventurous, our menu has something for everyone. Stop by,
          relax, and enjoy a slice of something special—because at Kiffy Pizza,
          you're not just a customer, you're family.
        </p>
      </div>
    </div>
  );
}

export default About;
