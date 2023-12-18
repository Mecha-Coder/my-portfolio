import React from 'react';
import Show from "./Skill-show"
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


function Skill(){
  return(
    <div className="skill-page">
      <div className="title skill-header">My Skills</div>

      <div className="show-skill">
        <Show 
          component={<SiJavascript color="purple" size="60px"/>} 
          rating={4}
          name="JavasSript"/>

        <Show 
          component={<SiCss3 color="purple" size="60px"/>} 
          rating={3} 
          name="CSS3"/>

        <Show 
          component={<SiHtml5 color="purple" size="60px"/>} 
          rating={4} 
          name="HTML5"/>

        <Show 
          component={<SiVisualstudio color="purple" size="60px"/>} 
          rating={4} 
          name="Visual Studio"/>
        <Show 
          component={<FaNodeJs color="purple" size="60px"/>} 
          rating={3} 
          name="Node JS"/>

        <Show 
          component={<FaReact color="purple" size="60px"/>} 
          rating={3} 
          name="React JS"/>

        <Show 
          component={<BiLogoPostgresql color="purple" size="60px"/>} 
          rating={4} 
          name="PostgreSQL"/>

        <Show 
          component={<SiMongodb color="purple" size="60px"/>} 
          rating={4} 
          name="MongoDB"/>

        <Show 
          component={<FaGitAlt color="purple" size="60px"/>}
          rating={2} 
          name="Git & GitHib"/>

        <Show 
          component={<FaPython color="purple" size="60px"/>} 
          rating={4} 
          name="Python"/>

      </div>

    </div>
  );
}

export default Skill;