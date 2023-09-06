import React from 'react'
import Slider from 'react-slick';
import "../../styles/slider.css";

const TestimonialSlider = () => {
    const settings ={
        dots:true,
        autoplay:true,
        infinite:true,
        speed:1000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:1,
        slidesToScroll:1,
    };
  return <Slider {...settings}>
    <div>
        <p className="review_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Animi fuga dolore corrupti,
              iusto voluptate omnis! Nobis consequatur beatae libero quas rerum, 
              culpa, aut aperiam consectetur porro, iste voluptatum inventore iure!
        </p>
       
            <h6>Alan Paul</h6>
        
    </div>
    <div>
        <p className="review_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Animi fuga dolore corrupti,
              iusto voluptate omnis! Nobis consequatur beatae libero quas rerum, 
              culpa, aut aperiam consectetur porro, iste voluptatum inventore iure!
        </p>
       
            <h6>Davis Keen</h6>
       
    </div>
    <div>
        <p className="review_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Animi fuga dolore corrupti,
              iusto voluptate omnis! Nobis consequatur beatae libero quas rerum, 
              culpa, aut aperiam consectetur porro, iste voluptatum inventore iure!
        </p>
        
            <h6>Andrew ken</h6>
      
    </div>
    
  </Slider>
   
  
}

export default TestimonialSlider