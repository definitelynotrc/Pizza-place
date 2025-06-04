import React from "react";
import "../styles/Footer.css"; // Adjust the path as necessary
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2025 Kiffy Pizza Place. All rights reserved.</p>
    </div>
  );
}

export default Footer;
