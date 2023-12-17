import React from "react";
import {Link} from "react-router-dom";

function Nav(){
  return (
    <div>
      <Link to="/" style={{textDecoration:"none", marginRight:"10px"}} >Home </Link>
      <Link to="/menu" style={{textDecoration:"none", marginRight:"10px"}} >Menu </Link>
      <Link to="/price" style={{textDecoration:"none", marginRight:"10px"}} >Contact </Link>
    </div>
  );
}

export default Nav;