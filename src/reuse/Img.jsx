import React from 'react'

function Img(props){
  return(
    <img 
      src={`./img/${props.name}.png`}
      alt={`${props.name}-img`}
    />
  );
}

export default Img;