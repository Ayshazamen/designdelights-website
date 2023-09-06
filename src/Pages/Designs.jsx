


import React, { useState, useEffect } from "react";
import "../styles/Designs.css";
import { Col } from "reactstrap";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import KitchenIdea from "../components/UI/kitchenidea";

const Designs = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Firebase Storage
    const storage = getStorage();

    // Reference to the design images folder in Firebase Storage
    const designsRef = ref(storage, "designImages");

    // List all items in the design images folder
    listAll(designsRef)
      .then((result) => {
        const designPromises = result.items.map((item) =>
          getDownloadURL(item).then((url) => ({ url, id: item.name }))
        );

        // Wait for all download URLs to be fetched
        return Promise.all(designPromises);
      })
      .then((designData) => {
        // Now you have an array of objects with URL and ID
        setDesigns(designData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching design images:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading designs...</p>;
  }

  return (
    <Col className="main_design mb-5">
      <Col lg="12" className="mb-5 text-center">
        <h2 className="section_title text-center">Innovative Culinary Spaces</h2>
        <h2 className="section_subtitle text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="section_description text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget
          dui non eros dignissim congue eget a velit.<br/> Nam quis tellus vel tellus
          cursus ultricies. Sed ipsum dui, feugiat vitae finibus at, suscipit
          vitae mi. Curabitur viverra auctor odio vel gravida. <br/>Morbi sit amet
          posuere metus. Aenean finibus id dolor a euismod. Sed placerat felis
          nec elit ornare, quis malesuada lacus semper. <br/>Praesent leo ligula,
          tincidunt vestibulum elit eu, pellentesque euismod lorem.
        </p>
      </Col>
      <div className="design_img">
        {designs.map((item) => (
          <div key={item.id} className="mb-4">
            <KitchenIdea imgUrl={item.url} />
          </div>
        ))}
        <button className="design_btn mt-4 text-center">
          <a href="login">Make an Appointment</a>
        </button>
      </div>
    </Col>
  );
};

export default Designs;