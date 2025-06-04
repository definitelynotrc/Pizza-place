import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Adjust the path as necessary
import ReorderIcon from "@mui/icons-material/Reorder";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
        <button className="loginButton" onClick={toggleNavbar}>
          <ReorderIcon className="hamburger" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
