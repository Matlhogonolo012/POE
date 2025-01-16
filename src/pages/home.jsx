import React, { useState, useEffect } from "react";
import Section from "../components/section";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/header";
import { FaDownload, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="home-page">
      <Header />
      <Section
        id="cover-page"
        isActive={activeSection === "cover-page"}
        className="hero-section"
      >
        <div className="hero">
        <div className="hero-content">
          <h1>Matlhogonolo Naoa</h1>
          <p>
            <strong>CodeTribe Location:</strong> CodeTribe Academy - Ga-Rankuwa
          </p>
          <p>
            <strong>Program Enrolled:</strong> Full Stack Web Development
          </p>
          <p>
            <strong>Contact Information:</strong>{" "}
            <FaEnvelope /> Email: tlhoxi12@gmail.com | <FaPhone /> Phone: +27 81 368 4688
          </p>
          <p>
            <strong>Date:</strong> Last Updated: 13 January 2025
          </p>
          <button className="btn-download">
            <FaDownload /> <a className="link" href="/src/assets/cv.pdf" download>Download CV</a>
          </button>
          <div className="social-links">
            <a href="https://github.com/Matlhogonolo012" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/matlhogonolo-naoa-924255340/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="../../src/assets/Untitled Project (1).jpg" alt="Matlhogonolo Naoa" />
        </div></div>
      </Section>

      <Section
        id="intro"
        title="Personal Introduction"
        isActive={activeSection === "intro"}
      >
        <h2>Hello, I am Matlhogonolo Naoa</h2>
        <p>
          I am a dedicated and driven web developer with a passion for learning and mastering new technologies. My journey at CodeTribe Academy has equipped me with the skills and knowledge to build dynamic, user-centric web applications. I am deeply committed to advancing my expertise and aspire to become a full-stack developer, contributing meaningfully to open-source projects and the broader tech community. My goal is to continuously evolve as a developer, staying at the forefront of innovation and creating impactful solutions.
        </p>
      </Section>

      

      <Section
        id="skills"
        title="Skills Matrix"
        isActive={activeSection === "skills"}
      >
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Proficiency Level</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML</td>
              <td>Intermediate</td>
              <td>Used in multiple projects</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Advanced</td>
              <td>Styled responsive layouts</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>Intermediate</td>
              <td>Developed dynamic web applications</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Intermediate</td>
              <td>Built interactive UIs</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Intermediate</td>
              <td>Built interactive UIs</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Intermediate</td>
              <td>Built interactive UIs</td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>Beginner</td>
              <td>Testing</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section
        id="projects"
        title="Individual Projects"
        isActive={activeSection === "projects"}
      >
        <ProjectCard
          project={{
            title: "Project 1",
            description: "A dynamic to-do list app built with React.",
            techStack: "React, Node.js, MongoDB",
            keyFeatures: ["Add, Edit, Delete Tasks", "Filter tasks by status"],
            challenges: "Handling asynchronous data updates using Redux.",
            demoLink: "https://github.com/username/project1"
          }}
        />
        <ProjectCard
          project={{
            title: "Project 2",
            description: "A personal blog platform using Express.js and MongoDB.",
            techStack: "Node.js, Express.js, MongoDB",
            keyFeatures: ["Create, Edit, Delete Blog Posts", "Commenting System"],
            challenges: "Handling user authentication and authorization with JWT.",
            demoLink: "https://github.com/username/project2"
          }}
        />
      </Section>

      <Section
        id="group-projects"
        title="Group Projects"
        isActive={activeSection === "group-projects"}
      >
        <h3>Project Title: Restaurant Reservation App</h3>
        <p><strong>Description:</strong> An app for managing restaurants and its reservations from users</p>
        <p><strong>Team Members:</strong>Matlhogonolo Naoa and Tshepo Madira</p>
        <p><strong>Tech Stack:</strong> React Native, MongoDB, NodeJs, EXPO</p>
        <p><strong>Collaboration Experience:</strong> We used GitHub for version control and Trello for task management.</p>
        <p><strong>Demo Link:</strong> [GitHub Repository](https://github.com/username/collaborative-task-manager)</p>
      </Section>

      {/* <Section
        id="assessments"
        title="Assessments"
        isActive={activeSection === "assessments"}
      >
        <table>
          <thead>
            <tr>
              <th>Assessment</th>
              <th>Git Link</th>
              <th>Date Completed</th>
              <th>Grade/Score</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image Gallery</td>
              <td><a href="https://github.com/Matlhogonolo012/image-gallery.git"><FaGithub /> </a></td>
              <td>December 2024</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Employee Registration</td>
              <td><a href="https://github.com/Matlhogonolo012/Employee-Registration-App.git"><FaGithub /> </a></td>
              <td>.. 2024</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>React Native</td>
              <td><a href="https://github.com/username/react-native-assessment"><FaGithub /></a></td>
              <td>December 2024</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </Section> */}

      {/* <Section
        id="feedback"
        title="Feedback & Reflections"
        isActive={activeSection === "feedback"}
      >
        <p><strong>Facilitator Feedback:</strong> Excellent work on problem-solving and teamwork throughout the program!</p>
        <p><strong>Self-Reflection:</strong> I've learned how to build full-stack applications using React, Node.js, and MongoDB. One of my key strengths is breaking down complex problems and finding simple solutions. I need to focus on improving my TypeScript skills.</p>
      </Section> */}

      <Section
        id="goals"
        title="Post-Program Goals"
        isActive={activeSection === "goals"}
      >
        <h3>Short-Term Goals:</h3>
        <ul className="points">
          <li>Secure a job in web development.</li>
          <li>Build 2-3 more portfolio projects.</li>
        </ul>
        <h3>Long-Term Goals:</h3>
        <ul className="points">
          <li>Become a full-stack developer.</li>
          <li>Contribute to open-source projects.</li>
        </ul>
      </Section>
    </div>
  );
};

export default HomePage;