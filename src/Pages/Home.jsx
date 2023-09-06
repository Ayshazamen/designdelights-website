import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/Home.css";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/UI/Helmet";
import KitchenIdea from "../components/UI/kitchenidea";
import AboutSection from "../components/UI/AboutSection";
import FeaturesSection from "../components/UI/FeaturesSection";
import reviewImg from "../images/reviewImg.jpg";
import img01 from "../images/before5.jpg";
import img02 from "../images/after5.jpg";
import img03 from "../images/before3.jpg";
import img04 from "../images/after3.jpg";
import img05 from "../images/before4.jpg";
import img07 from "../images/after4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { HomeSlice } from "../Reducers/homeSlice";
import TestimonialSlider from "../components/UI/TestimonialSlider";
import "../styles/slider.css";
import Kitchens from "../components/UI/kitchens";
import kitchenImg from "../images/main.jpg";
import Kitchenparts from "../components/UI/kitchenparts";




const kitchenData = [
  {
    id: 1,
    kitchenName: "Before",
    imgUrl: img01,
  },
  {
    id: 2,
    kitchenName: "After",
    imgUrl: img02,
  },
  {
    id: 3,
    kitchenName: "Before",
    imgUrl: img03,
  },
  {
    id: 4,
    kitchenName: "After",
    imgUrl: img04,
  },
  {
    id: 5,
    kitchenName: "Before",
    imgUrl: img05,
  },
  {
    id: 6,
    kitchenName: "After",
    imgUrl: img07,
  },
];

const Home = () => {
  const state = useSelector((state) => state.HomeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeSlice.actions.getProductdata);
  }, []);

  return (
    <Helmet title="Home">
      <HeroSlider />
      <FeaturesSection />
      <AboutSection />

     <section className="main_kit">
        <Container>
          <Row>

          <Col lg='6' md='6'>
              <img src={kitchenImg} alt="kitchen-img" className="w-100"/>
            </Col>
           
            <Col lg='6' md='6'>
              <div className="kitchens ">
             
             <h2 className="kitchen_title mb-4">Kitchens</h2>
             <p className="kitchen_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
               quasi unde veritatis culpa dignissimos
                vel ullam voluptates
                consectetur accusantium nam odio maiores nemo 
                natus esse in earum distinctio corporis mollitia.</p>
                
                <Kitchens/>
                
             </div>
           </Col>

         
          </Row>
        </Container>
      </section>

      <section className="main_kit">
        <Container>
          <Row>

          <Col lg='6' md='6'>
              <img src={kitchenImg} alt="kitchen-img" className="w-100"/>
            </Col>
           
            <Col lg='6' md='6'>
              <div className="kitchens ">
             
             <h3 className="kitchen_title mb-4">Components of the Culinary Space</h3>
             <p className="kitchen_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
               quasi unde veritatis culpa dignissimos
                vel ullam voluptates
                consectetur accusantium nam odio maiores nemo 
                natus esse in earum distinctio corporis mollitia.</p>
                
                <Kitchenparts/>
                
             </div>
           </Col>

         
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h1 className="section_titles">OUR WORKS</h1>
              <h5 className="sub_titles">Refurnish To Your Dream Kitchen</h5>
            </Col>

            {kitchenData.map((item) => (
              <KitchenIdea
                key={item.id}
                imgUrl={item.imgUrl}
                kitchenName={item.kitchenName}
              />
            ))}
          </Row>
        </Container>
      </section>

   
      <section>
        <Container>
          <Row>
           
            <Col lg='6' md='6'>
              <div className="testimonial ">
             <h5 className="testimonial_subtitle mb-4">Testimonials</h5>
             <h2 className="testimonial_title mb-4">What Our Customers Are Saying</h2>
             <p className="testimonial_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
               quasi unde veritatis culpa dignissimos
                vel ullam voluptates
                consectetur accusantium nam odio maiores nemo 
                natus esse in earum distinctio corporis mollitia.</p>
                <TestimonialSlider/>
             </div>
           </Col>

           <Col lg='6' md='6'>
              <img src={reviewImg} alt="testimonial-img" className="w-100"/>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;