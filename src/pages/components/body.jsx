import React, { useState, useEffect } from 'react';
import './body.css';
// import logo from '../../assets/logo.png';
import image from '../../assets/image.jpg';
import medicine from '../../assets/medicine.png';

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, content: 'Slide 1: Welcome to Mom Pharmacy!' },
    { id: 2, content: 'Slide 2: Discover our health services.' },
    { id: 3, content: 'Slide 3: Care you can trust!' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="body-container">
      {/* First Section: Two Columns */}
      <section className="two-column-section">
        <div className="column mt-3">
          <h1 className="column-h1  mt-7 d-flex flex-start justify-content-start">Welcome to Mom Pharmacy Employees portal</h1>
          <p className="column-p  mt-4 d-flex flex-start justify-content-start ">
           Here you can manage your portal.
          </p>
          <h2 className="column-h2  mt-7 d-flex flex-start justify-content-start">Glad that you are our employee 😊!</h2>
        </div>
        <div >
          <img src={medicine} alt="medicine" class="image mt-11"/>
        </div>
      </section>


        {/* Second Section: Carousel  */}
       <section id="carousel" className="carousel-section">
       
       <h1 class="m-5 whatsnew">What's New?</h1>

       <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image}  class="d-block w-100" alt="image"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt="image"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-75" alt="image"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>


       {/* <div className="carousel-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="carousel-slide"
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <h3>{slide.content}</h3>
            </div>
          ))}
          <button
            onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
            className="carousel-button prev"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
            className="carousel-button next"
          >
            Next
          </button>
        </div>
      

      {/* Third Section: Contact Us */}
      {/* <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us!</p>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" />
          <button>Send Message</button>
        </div>
      </section> */}
    </div>
  );
};

export default Body;