import React from "react";
import { Col } from "reactstrap";
import "../../styles/kitchenidea.css";

const KitchenIdea = ({ kitchenName, imgUrl }) => {
  return (
    
    <Col lg="6" md="4" sm="6" className="mb-5">
      <div className="kitchen_item">
        <div className="kitchen_img">
          <img src={imgUrl} alt="" className="w-100" />
          
        </div>
        <div className="kitchen_item-contents mt-4">
          <h6 className="section_title text-center">{kitchenName}</h6>
        </div>
      </div>
    </Col>
    
  );
};

export default KitchenIdea;