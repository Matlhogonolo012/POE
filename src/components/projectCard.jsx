import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaCalendarAlt,
  FaCode,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaImage,
  FaEye,
} from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import "../styling/projectCard.css";

const ProjectCard = ({ project }) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(project.languages_url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch languages");
        const data = await response.json();
        setLanguages(Object.keys(data));
      } catch (error) {
        console.error("Error fetching languages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, [project.languages_url]);

  const languageIcons = {
    javascript: <FaJs />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    python: <FaPython />,
    java: <FaJava />,
    react: <FaReact />,
    node: <FaNodeJs />,
  };

  return (
    <div className="project-card">
      {}
      {project.image ? (
        <img src={project.image} alt={project.title} className="card-image" />
      ) : (
        <div className="card-image placeholder">
          <FaImage size={50} />
          <span>No Image Available</span>
        </div>
      )}

      {}
      <div className="card-body">
        {}
        <h3 className="card-title">{project.name}</h3>

        {}
        <p className="card-text">{project.description}</p>

        {}
        <div className="project-details">
          <p>
            <strong>Privacy:</strong> {project.privacy}
          </p>
          <p>
            <FaCalendarAlt /> <strong>Created:</strong>{" "}
            {new Date(project.created_at).toLocaleDateString()}
          </p>
          <p>
            <FaCalendarAlt /> <strong>Updated:</strong>{" "}
            {new Date(project.updated_at).toLocaleDateString()}
          </p>
          <p>
            <FaEye /> <strong>Watchers:</strong> {project.watchers_count}
          </p>

          {}
          <p>
            <FaCode /> <strong>Languages:</strong>{" "}
            {loading ? (
              "Loading..."
            ) : languages.length > 0 ? (
              <div className="language-list">
                {languages.map((language, index) => (
                  <span key={index} className="language-item">
                    {languageIcons[language.toLowerCase()] || <FaCode />}{" "}
                    {language}
                  </span>
                ))}
              </div>
            ) : (
              "No languages"
            )}
          </p>
        </div>

        {}
      </div>

      {}
      <div className="card-footer">
        <button className="card-button">
          <div className="project-links">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub />
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaLink />
              </a>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
