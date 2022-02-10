import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import "./Footer.css";

export const Footer = () => {
  return <footer className="footer">
      <h1>tripbox</h1>
      <div>
        <FontAwesomeIcon icon={ faFacebookF } className="footericons"/>
        <FontAwesomeIcon icon={ faInstagram } className="footericons" />
        <FontAwesomeIcon icon={ faWhatsapp } className="footericons"/>
      </div>
      <div>
        <p>Copyright - Tripbox 2022</p>
      </div>
    </footer>
};