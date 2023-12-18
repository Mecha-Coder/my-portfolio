import React from 'react'

function Rating(props){
  const {n} = props
  return (
    <div className="rating">
      <div className="bar" style={{backgroundColor: n>0? "black":"lightgrey"}}></div>
      <div className="bar" style={{backgroundColor: n>1? "black":"lightgrey"}}></div>
      <div className="bar" style={{backgroundColor: n>2? "black":"lightgrey"}}></div>
      <div className="bar" style={{backgroundColor: n>3? "black":"lightgrey"}}></div>
      <div className="bar" style={{backgroundColor: n>4? "black":"lightgrey"}}></div>
    </div>
  );
  
}

export default Rating;