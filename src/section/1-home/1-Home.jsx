import React from "react";
import Intro from "./2-Intro";
import Img from "../../reuse/Img";

function Home(){
  return(
    <div className="home-page">

    <Intro />    
    <Img name="home"/>

    </div>
  );
}

export default Home;