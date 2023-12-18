import React from 'react'

function Button(props){
  return(
    <div className={`slider-btn ${props.pos}`}>
      {props.component}
    </div>
  );
};

export default Button;
