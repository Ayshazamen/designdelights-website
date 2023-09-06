import React from "react";
import "../styles/contactUs.css";
import img1 from "../images/main3.jpg";

const ContactUs = () => {
  return (
    <div className="complete">
      <div className="contact text-center">
        <div className="contact_details">
          <div className="contact_img">
            <img src={img1} alt="" />
          </div>

          <div className="contact_description">
            <h2>Contact us</h2>

            <p className="section_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              eget dui non eros dignissim <br />congue eget a velit. Nam quis
              tellus vel tellus cursus ultricies. Sed ipsum dui, feugiat vitae
              finibus at, suscipit vitae mi. Curabitur viverra auctor odio vel
              gravida. Morbi sit amet posuere metus. Aenean finibus id dolor a
              euismod. Sed placerat felis nec elit ornare, quis malesuada lacus
              semper. Praesent leo ligula, tincidunt vestibulum elit eu,
              pellentesque euismod lorem.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact_form">
          <h3>Make a free Appointment</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit">Make an Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;