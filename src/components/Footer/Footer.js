import React from "react";
import "./footer.css"
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        inshorts clone made by -{""}
        <a href="">Lipu Swain</a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a>
          <FaLinkedinIn />
        </a>
        <a>
          <FaTwitter />
        </a>
        <a>
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default Footer;
