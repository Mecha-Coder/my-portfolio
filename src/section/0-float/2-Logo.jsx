import React from "react";
import Img from "../../reuse/Img";

function Logo(){
  return(
    <div className="logo-container">

      <div className="logo-img" >
        <Img name="logo"/>
      </div>

      <div className="logo-name">
        <span>Mecha</span>
        Coder
      </div>

  </div>
  );
};

export default Logo;