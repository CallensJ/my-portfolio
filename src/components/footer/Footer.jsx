import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer__section">
      <div className="footer__icons">
        <a href="https://github.com/CallensJ"><FaGithub className="icon"/></a>
        <a href="https://www.linkedin.com/in/johan-callens-021bab142/"><FaLinkedin className="icon"/></a>
        <a href="https://twitter.com/johan_callens"><FaTwitter className="icon"/></a>

       

        
       </div>
       <p>Codé avec Amour en React</p>
    </section>
  );
};

export default Footer;
