import React from "react";
import { Container,Row, Col, ListGroup,ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/footer.css';

const quickLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/Designs',
    display:'Designs'
  },
  {
    path:'/contact',
    display:'Contact Us'
  }
]

const footer = () => {
  return <footer className="footer">
    <Container>
    <Row>
    <Col lg='4' md='4' sm='12'>
          <div className="logo footer_logo">
          <i class="ri-earth-fill"></i>
            <span>KitchenDecor<Link to='/home' className="d-flex align-items-center
            gap-1">
            </Link></span>

          </div>
          <p className="footer_logo-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Donec facilisis, erat tristique sagittis bibendum, 
           orci ligula fringilla lorem, ac tincidunt augue metus ut erat.
            Etiam in justo pulvinar, facilisis sem a, blandit mi.

          </p>
        </Col>
        <Col lg='4' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer_link-title1">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item,index) => (
                  <ListGroupItem key={index}  className="p-0 mt-3
                   quick_link"   >
                    <Link to= {item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' md='4' sm='6'>
        <div className="mb-4">
        <h5 className="footer_link-title">contact</h5>
        <p className="contact_info">kitchendecor ltd</p>
        <p className="contact_info">email:designdelights123@gmail.com</p>
        <p className="contact_info">phone:+91 9283751047</p>
        </div>

        </Col>
        
    </Row>
    </Container>
    
  </footer>
    
};

export default footer;