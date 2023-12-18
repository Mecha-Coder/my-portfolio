import React from 'react'
import Rating from "./4-Rating"

function Tech(props){
  return(
    <div className="skill-container">
      {props.component}
      <div className="skill-detail">
        {props.name}
        <Rating n={props.rating}/>
      </div>
  </div>
  );
}

export default Tech;