import React from "react";
import "../styles/about.css";
import aboutImage from "../images/about.png"
import aboutImg from "../images/kitchen5.jpg";
import { Col } from "reactstrap";



const About = () => {
  return (
    
    <div className="about_section_content">
      <Col lg="12" md="12">
    <h1 className="section_title1 text-center">About Us</h1>
    <h2 className="section_subtitle text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              <p className="section_description text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eget dui non eros dignissim congue eget a velit. Nam quis tellus
                vel tellus cursus ultricies.<br></br> Sed ipsum dui, feugiat vitae
                finibus at, suscipit vitae mi. Curabitur viverra auctor odio vel
                gravida. Morbi sit amet posuere metus.<br></br> Aenean finibus id dolor a
                euismod. Sed placerat felis nec elit ornare, quis malesuada
                lacus semper. Praesent leo ligula,<br></br> tincidunt vestibulum elit eu,
                pellentesque euismod lorem.
              </p>
              


               
     
      
    
     <section className="section">
      <div className="about-section">
      <img src={aboutImage} alt="" className="w-10"/>

        <div className="content">
          <h1 className="content_title1">About Us</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex iure illum doloremque minus quidem cumque odio, corrupti
            laboriosam voluptas sapiente aliquam rerum, reprehenderit provident officia repellendus fugit rem animi.lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore ducimus, cum quaerat perferendis nihil
            quasi illum voluptates sequi. Nihil, accusantium? Laboriosam unde molestiae quaerat laborum, enim suscipit beatae vel.</p>
          
        </div>
      </div>
    </section>
    </Col>
    

    <section id="features" >
      <h1>Awesome features</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis deserunt fuga ratione recusandae repellendus, doloremque totam necessitatibus?</p>
      <div className="fes1">
        <div className="fe-desc">
        <i class="ri-lightbulb-line"></i>
          <h2>Design and Installation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto reprehenderit culpa dolore, doloremque molestiae reiciendis necessitatibus est ipsam ratione, , exercitationem asperiores! Cum molestias praesentium quo animi delectus quaerat!</p>
        </div>
        <div className="fe-desc">
        <i class="ri-service-fill"></i>
          <h2>User friendly</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto reprehenderit culpa dolore, doloremque molestiae reiciendis necessitatibus est ipsam ratione, , exercitationem asperiores! Cum molestias praesentium quo animi delectus quaerat!</p>
        </div>
        <div className="fe-desc">
        <i class="ri-checkbox-circle-fill"></i>
          <h2>100% Assurance</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto reprehenderit culpa dolore, doloremque molestiae reiciendis necessitatibus est ipsam ratione, , exercitationem asperiores! Cum molestias praesentium quo animi delectus quaerat!</p>
        </div>
      </div>
    </section>
    </div>

          
          
          
       
   
  );
    
};

export default About;