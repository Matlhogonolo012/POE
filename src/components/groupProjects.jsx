import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";


const GroupProjects = () => {
  const projects = [
    {
      title: "Restaurant Reservation App",
      description: "An app for managing restaurants and its reservations from users",
      teamMembers: "Matlhogonolo Naoa and Tshepo Madira",
      techStack: "React Native, MongoDB, NodeJs, EXPO",
      collaboration: "We used GitHub for version control",
      githubLink: "https://github.com/Matlhogonolo012/Restaurant-Reservation-App-Frontend-Admin.git",
    },
    {
      title: "Weather Based Travel Planner with API Integration",
      description: "An app for planning travel based on weather conditions",
      teamMembers: "Matlhogonolo Naoa and Tshepo Madira",
      techStack: "React.js, MongoDB, NodeJs, Express.js",
      collaboration: "We used GitHub for version control and Trello for task management",
      githubLink: "https://github.com/Matlhogonolo012/weather-app-frontend.git",
    },
  ];

  return (
    <Section
      id="group-projects"
      title="Group Projects"
      isActive={activeSection === "group-projects"}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Section>
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card ${isVisible ? "visible" : ""}`}
    >
      <h3>{project.title}</h3>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Team Members:</strong> {project.teamMembers}</p>
      <p><strong>Tech Stack:</strong> {project.techStack}</p>
      <p><strong>Collaboration Experience:</strong> {project.collaboration}</p>
      <p>
        <a className="github" href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </p>
    </div>
  );
};

export default GroupProjects;