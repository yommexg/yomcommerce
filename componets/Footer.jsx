import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Yommex Pictures All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillFacebook />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
