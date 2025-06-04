import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg"; // Adjust the path as necessary
function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="headerContainer">
        <h1>Kiffy Pizza Place</h1>
        <p>Delicious pizzas made with love</p>
        <Link to="/menu">
          <button className="orderNowButton"> ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
