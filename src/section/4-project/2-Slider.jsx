import React from 'react';
import Button from './3-Slider-button';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Slider() {
  return(
    <div className="slider-container">
      
  

      <Button component={<FaChevronLeft size="50px"/>} />
      <Button component={<FaChevronRight size="50px"/>} />
      


    </div>
  );
};

export default Slider;