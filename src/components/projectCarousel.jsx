import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Slower transition speed (2 seconds)
    slidesToShow: 3, // Default number of slides to show on larger screens
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Delay between slides (3 seconds)
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          speed: 2000, // Maintain slower transition speed
          autoplaySpeed: 3000, // Maintain delay between slides
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px (mobile view)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
          speed: 2000, // Maintain slower transition speed
          autoplaySpeed: 3000, // Maintain delay between slides
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard project={project} />
        </div>
      ))}
    </Slider>
  );
};

export default ProjectCarousel;