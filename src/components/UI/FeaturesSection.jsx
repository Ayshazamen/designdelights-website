import React from 'react';
import "../../styles/FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h1>Awesome features</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis deserunt fuga ratione recusandae repellendus, doloremque totam necessitatibus?</p>
      <div className="fe1">
        <div className="fe-des">
        <i class="ri-lightbulb-line"></i>
          <h2>Design and Installation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto reprehenderit culpa dolore, doloremque molestiae reiciendis necessitatibus est ipsam ratione, , exercitationem asperiores! Cum molestias praesentium quo animi delectus quaerat!</p>
        </div>
        <div className="fe-des">
        <i class="ri-service-fill"></i>
          <h2>User friendly</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto reprehenderit culpa dolore, doloremque molestiae reiciendis necessitatibus est ipsam ratione, , exercitationem asperiores! Cum molestias praesentium quo animi delectus quaerat!</p>
        </div>
        <div className="fe-des">
        <i class="ri-checkbox-circle-fill"></i>
          <h2>100% Assurance</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto reprehenderit culpa dolore, doloremque molestiae reiciendis necessitatibus est ipsam ratione, , exercitationem asperiores! Cum molestias praesentium quo animi delectus quaerat!</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;