import React from 'react'
import Learn from "./3-Learn";
import { FaStackOverflow } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";

function Me(){
  return(
    <div className="about-container">
      
      <div className="title">About Me</div>
    
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
      </p>

    <div className="title">Where I learn</div>

    <div className="learn-icon">
      <Learn component={<SiUdemy  size="70px" />} name="Udemy"/>
      <Learn component={<FaYoutube  size="70px" />} name="YouTube"/>
      <Learn component={<FaStackOverflow  size="70px" />} name="Stack Overflow"/>
    </div>

  </div>
  );
}

export default Me;