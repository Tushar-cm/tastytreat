import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram ,FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">New delhi, delhi 110055, India</p>
        <p className="p__opensans">+91 7078486781</p>
        <p className="p__opensans">+91 7078486781</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.w_logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Dive into Delights of Delectable Food.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://github.com/Tushar-cm"><FiGithub/></a>
          <a href="https://www.linkedin.com/in/tushar-pandey-3a6831249/"><FiLinkedin/></a>
          <a href='mailto:tusharpandey256@gmail.com'><FiMail/></a>
          <a href='https://www.instagram.com/tusharp_2409?igsh=MXRwdzJhMjF0aDZzZQ=='><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">11:00 am - 2:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 3:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Copyright 2023 VerveBridge | All rights reserved</p>

    </div>

  </div>
);

export default Footer;