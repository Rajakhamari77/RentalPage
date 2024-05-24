import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>
A sophisticated and user-centric luxury rentals website awaits you, where opulence meets functionality.</p> <p> Our meticulously designed interface ensures a seamless journey for users, with an intuitive search and filter system to effortlessly discover the epitome of lavish accommodations. </p>Immerse yourself in a visual feast with high-resolution images, immersive videos, and detailed property listings featuring amenities, locations, and rental terms.<p> Transparency is our mantra, supported by user reviews and testimonials that build trust and confidence.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;