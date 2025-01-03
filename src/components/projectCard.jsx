import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" style={{ marginBottom: "20px" }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tech Stack:</strong> {project.techStack}</p>
    </div>
  );
};

export default ProjectCard;
