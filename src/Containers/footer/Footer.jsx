import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-header">
        <h1 className="gradient__text">
          Do you want to step in to the <br /> future before others
        </h1>
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-content">
        <div className="content1">
          <h2>
            <img src={logo} alt="Logo" />
          </h2>
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="content2">
          <h2>Links</h2>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="content3">
          <h2>Company</h2>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="content4">
          <h2>Get in touch</h2>
          <p>
            Crechterwoord K12 <br /> 182 DK Alknjkcb
          </p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
