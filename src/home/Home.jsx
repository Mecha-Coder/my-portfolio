import React from "react";

function Home(){
  return(
    <div className="home-page">
    
    <div className="intro-container">
      <div className="intro-hi">Hi
        <img 
          src="./img/Hi.gif"  
          alt="hi-gif"
        />
      , I'm Jason S.K
      </div>

      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>

    <img 
      src="./img/home-img.png" 
      alt="home-img"
    />
  </div>
  );
}

export default Home;