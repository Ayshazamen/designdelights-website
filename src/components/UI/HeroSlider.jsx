import React from "react";
import Slider from 'react-slick'
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/HeroSlider.css'

const HeroSlider = () => {
    
    
  return(
    <Slider className="hero_slider">
  <div className="slider_item slider_item mt0">
      <Container>
          <div className="slider_content">
              <h1 className="text-light mb-6">Design Delights</h1>
              <h6 className="text-light mb-4">Unveiling The Beauty Of Your Kitchen</h6>
              <button className="discover_btn mt-4">
                  <a href="Designs">Visit Us To Know More</a>
              </button>
          </div>
      </Container>
  </div>




</Slider>
); 
    
};

export default HeroSlider;