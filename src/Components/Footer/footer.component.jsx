import React from "react";
import "./footer.style.css";
import fb from "./Social-Icon/fb.png";
import twitter from "./Social-Icon/twitter.png";
import whatsapp from "./Social-Icon/whatsapp.png";
import linkedin from "./Social-Icon/linkedin.png";

const Footer = () => (
  <footer className='grid grid--1x2 f-background align-center'>
    <div className='footer--social__icon'>
      <a href='https://www.facebook.com/bsmrstu.bd'>
        <img src={fb} alt='' />
      </a>
      <a href='https://www.twitter.com/'>
        <img src={twitter} alt='' />
      </a>
      <a href='https://www.whatsapp.com/'>
        <img src={whatsapp} alt='' />
      </a>
      <a href='https://www.linkedin.com/school/bsmrstu-edu-bd/'>
        <img src={linkedin} alt='' />
      </a>
    </div>
    <div className='footer--copyright'>
      <p className='footer__para'>{"\u00A9 2021 BSMRSTU, CSE DEPT."}</p>
    </div>
  </footer>
);
export default Footer;
