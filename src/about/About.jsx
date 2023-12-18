import React from 'react'
import { FaStackOverflow } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";

function About() {
 return(
  <div className="about-page">
    
    <img 
      src="./img/profile.png"
      alt="profile-img"
    />

    <div className="about-container">
      <div className="title">About Me</div>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>

      <div className="title">Where I learn</div>
      <div className="about-icon">
        
        <div className="icon-style">
          <SiUdemy  size="70px" />
          <p className="icon-margin">Udemy</p>
        </div>

        <div className="icon-style">
          <FaYoutube size="80px" />
          <p>YouTube</p>
        </div>

        <div className="icon-style">
          <FaStackOverflow size="70px" />
          <p className="icon-margin">Stack Overflow</p>
        </div>

      </div>
    </div>

  </div>
 );
}

export default About;