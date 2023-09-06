import React from 'react'
import Slider from 'react-slick';
import "../../styles/kitchen.css";
import {  Col } from "reactstrap";
import kitchenImg1 from "../../images/modern4.jpg";
import kitchenImg2 from "../../images/trad.jpg";
import kitchenImg3 from "../../images/luxuary.jpg";
import kitchenImg4 from "../../images/main3.jpg";
import kitchenImg5 from "../../images/modern2.jpg";

const kitchens = () => {
  
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
   
    <div className='Kitchen_names'>
        <h5>Modern Kitchen</h5>

        <Col >
              <img src={kitchenImg1} alt="kitchen-img" className="w-100"/>
            </Col>
            <p className="kitchen_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
               quasi unde<br></br> veritatis culpa dignissimos
                vel ullam voluptates</p>
            <Col lg='6' md='6'>
            <button className='kit_btn'><a href="login">Make an Appointment</a>
            </button>
                </Col>
               
          
        
    </div>
    <div className='Kitchen_names'>
    <h5>Traditional Kitchen</h5>
        <Col >
              <img src={kitchenImg2} alt="kitchen-img" className="w-100"/>
            </Col>
            <p className="kitchen_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
               quasi unde <br></br> veritatis culpa dignissimos
                vel ullam voluptates</p>
            <Col lg='6' md='6'>
            <button className='kit_btn'><a href="login">Make an Appointment</a>
              </button>
                </Col>
               
       
           
       
    </div>
    <div className='Kitchen_names'>
    <h5>Opulant  Kitchen</h5>

        <Col >
              <img src={kitchenImg3} alt="kitchen-img" className="w-100"/>
            </Col>
            <p className="kitchen_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
               quasi unde <br></br>veritatis culpa dignissimos
                vel ullam voluptates</p>
            <Col lg='6' md='6'>
            <button className='kit_btn'><a href="login">Make an Appointment</a>
                </button>
                </Col>
               
      
    </div>
    <div className='Kitchen_names'>
    <h5>Classic White Ensemble Kitchen</h5>
        <Col >
              <img src={kitchenImg4} alt="kitchen-img" className="w-100 h-100"/>
            </Col>
            <p className="kitchen_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
               quasi unde <br></br> veritatis culpa dignissimos
                vel ullam voluptates</p>
            <Col lg='6' md='6'>
            <button className='kit_btn'><a href="login">Make an Appointment</a>
                </button>
                </Col>
               
      
    </div>
    <div className='Kitchen_names'>
    <h5>Dark Majesty Kitchen</h5>
        <Col >
              <img src={kitchenImg5} alt="kitchen-img" className="w-100 h-100"/>
            </Col>
            <p className="kitchen_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
               quasi unde <br></br> veritatis culpa dignissimos
                vel ullam voluptates</p>
            <Col lg='6' md='6'>
            <button className='kit_btn'><a href="login">Make an Appointment</a>
                </button>
                </Col>
               
      
    </div>
    
   
  </Slider>
   

}

export default kitchens