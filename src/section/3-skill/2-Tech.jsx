import React from 'react'
import Tech from "./3-Tech-show";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

function Technology(){
 return(
  <div className="show-tech">

    <Tech 
      component={<SiJavascript color="purple" size="60px"/>} 
      rating={4}
      name="JavasSript"/>

    <Tech 
      component={<SiCss3 color="purple" size="60px"/>} 
      rating={3} 
      name="CSS3"/>

    <Tech 
      component={<SiHtml5 color="purple" size="60px"/>} 
      rating={4} 
      name="HTML5"/>

    <Tech 
      component={<SiVisualstudio color="purple" size="60px"/>} 
      rating={4} 
      name="Visual Studio"/>
    <Tech 
      component={<FaNodeJs color="purple" size="60px"/>} 
      rating={3} 
      name="Node JS"/>

    <Tech 
      component={<FaReact color="purple" size="60px"/>} 
      rating={3} 
      name="React JS"/>

    <Tech 
      component={<BiLogoPostgresql color="purple" size="60px"/>} 
      rating={4} 
      name="PostgreSQL"/>

    <Tech 
      component={<SiMongodb color="purple" size="60px"/>} 
      rating={4} 
      name="MongoDB"/>

    <Tech 
      component={<FaGitAlt color="purple" size="60px"/>}
      rating={2} 
      name="Git & GitHib"/>

    <Tech 
      component={<FaPython color="purple" size="60px"/>} 
      rating={4} 
      name="Python"/>

</div>

 );
}

export default Technology;