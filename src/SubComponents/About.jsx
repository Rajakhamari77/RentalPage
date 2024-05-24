import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
            <h1>ABOUT US</h1>
            <p>
              we pride ourselves on redefining opulent living by curating an
              exclusive collection of the world's most exquisite properties.
              Founded on the belief that every stay should be a unique and
              unforgettable experience, we are dedicated to providing our
              discerning clients with a seamless blend of sophistication and
              personalized service.<p> Our team comprises passionate individuals
              who share a commitment to excellence in every aspect of luxury
              rentals. From the moment you explore our user-friendly interface
              to the culmination of your stay in one of our meticulously chosen
              properties, we strive to exceed your expectations.</p> With a keen eye
              for detail, we select properties that embody the epitome of
              elegance, offering not just accommodation but an immersive journey
              into refined living.
            </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
