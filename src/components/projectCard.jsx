import React from "react";
import "../styling/projectCard.css";
import { FaImage } from "react-icons/fa";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        <div className="card-footer">
          <button className="card-button"> <FaImage /></button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;