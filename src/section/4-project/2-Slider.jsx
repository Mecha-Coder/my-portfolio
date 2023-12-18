import React from 'react';
import Button from './3-Slider-button';
import Detail from "./4-Slider-detail";
import Index from "./5-Slider-index";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Slider() {
  return(
    <div className="slider-container">
      
      <Detail />
      <Button component={<FaChevronLeft size="50px"/>} pos="left"/>
      <Button component={<FaChevronRight size="50px"/>} pos="right"/>
      <Index />
      
    </div>
  );
};

export default Slider;