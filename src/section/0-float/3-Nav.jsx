import React from 'react';
import Tab from "./4-Nav-tab"

function Nav(){
  return(
    <div className="nav-container">
      <Tab name="Home"/>
      <Tab name="About"/>
      <Tab name="Skill"/>
      <Tab name="Project"/>
      <Tab name="Contact"/>
    </div>
  );
}

export default Nav;