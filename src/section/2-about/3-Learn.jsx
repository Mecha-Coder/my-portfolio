import React from 'react'

function Learn(props){
  return(
    <div className="icon-style">
      {props.component}
      <div>{props.name}</div>
    </div>
  );
}

export default Learn;