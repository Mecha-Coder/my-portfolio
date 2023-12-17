import React from "react";

function Logo(){
  return(
    <div className="logo-container">

      <div className="logo-img" >
        <img 
          src="./img/logo.png" 
          alt="logo-img"
        />
      </div>

      <div className="logo-name">
        <span>Mecha</span>Coder
      </div>

  </div>
  );
};

export default Logo;