import React, { useState, useEffect } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import ProjectCard from "../../src/components/projectCard";
import "../styling/carousel.css";

const ProjectCarousel = ({ projects }) => {
  const [slidesToShow, setSlidesToShow] = useState(3); // Default number of cards per slide
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  // Debounce function to limit how often the resize handler is called
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Update the number of cards per slide based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setSlidesToShow(1); // Extra small devices: 1 card per slide
      } else if (window.innerWidth < 768) {
        setSlidesToShow(1); // Small devices: 1 card per slide
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2); // Medium devices: 2 cards per slide
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(3); // Large devices: 3 cards per slide
      } else {
        setSlidesToShow(4); // Extra large devices: 4 cards per slide
      }
    };

    // Debounce the resize handler to make it smoother
    const debouncedResize = debounce(handleResize, 100); // Adjust delay as needed

    handleResize(); // Set initial value
    window.addEventListener("resize", debouncedResize); // Update on window resize
    return () => window.removeEventListener("resize", debouncedResize); // Cleanup
  }, []);

  // Split projects into chunks based on `slidesToShow`
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += slidesToShow) {
    projectChunks.push(projects.slice(i, i + slidesToShow));
  }

  // Handle previous slide
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projectChunks.length - 1 : prevIndex - 1
    );
  };

  // Handle next slide
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projectChunks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="custom-carousel">
      <Carousel
        activeIndex={activeIndex}
        onSelect={() => {}} // Disable default behavior
        indicators={false} // Disable default indicators
        interval={null} // Disable auto-slide
        pause="hover"
        className="custom-carousel"
      >
        {projectChunks.map((chunk, index) => (
          <Carousel.Item key={index} style={{ "--slides-to-show": slidesToShow }}>
            <Row className="g-4 justify-content-center">
              {chunk.map((project, idx) => (
                <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Arrows */}
      <button
        className="carousel-control-prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon"></span>
      </button>

      {/* Custom Indicators (Dots) for All Screen Sizes */}
      <div className="carousel-indicators">
        {projectChunks.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;