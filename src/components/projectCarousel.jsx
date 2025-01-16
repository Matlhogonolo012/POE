import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../../src/components/projectCard";

const ProjectCarousel = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          speed: 2000, 
          autoplaySpeed: 3000, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          speed: 2000, 
          autoplaySpeed: 3000, 
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