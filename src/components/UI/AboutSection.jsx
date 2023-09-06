import React from 'react';
import "../../styles/aboutsection.css" ;
import aboutImage from "../../images/about.png"



const AboutSection = () => {
  return (
    <section className="section">
    <div className="about-section">
      <img src={aboutImage} alt="" className="w-10"/>

        <div className="content">
          <h1 className="content_title1">About Us</h1>
          <div className='para3'>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex iure illum doloremque minus quidem cumque odio, corrupti
            laboriosam voluptas sapiente aliquam rerum, reprehenderit provident officia repellendus fugit rem animi.lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore ducimus, cum quaerat perferendis nihil
            quasi illum voluptates sequi. Nihil, accusantium? Laboriosam unde molestiae quaerat laborum, enim suscipit beatae vel.</p>
            </div>
          <button className="btn"><a href="About">Read More</a> </button>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;