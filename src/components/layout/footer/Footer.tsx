import React from 'react';
import "./Footer.scss";
import GitHub from "../../../assets/images/GitHub.svg";
import LinkedIn from "../../../assets/images/LinkedIn.svg";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://dianago-porfolio-website.netlify.app/"><div className="circle">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span>!</span>
      </div></a>
      <div className="logo-container">
        <a href="https://github.com/smilenayeon?tab=repositories"><img className="logo" src={GitHub} alt="GitHub"/></a>
        <a href="www.linkedin.com/in/diana-na-yeon-go-31998a297"><img className="logo" src={LinkedIn} alt="LinkedIn"/></a>
      </div>
    </div>
  )
}

export default Footer;
