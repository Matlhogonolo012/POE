import  { useState, useEffect } from "react";
import Section from "../components/section";
import Header from "../components/header";
import { FaDownload, FaEnvelope, FaPhone, FaGithub, FaLinkedin, } from 'react-icons/fa';
import ProjectCarousel from "../components/projectCarousel";
import projectsData from "../components/individualProjects";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      
      
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
          
          <p >
            <strong className="small-t">CodeTribe Location:</strong> CodeTribe Academy - Ga-Rankuwa
          </p>
          <p>
            <strong className="small-t"> Program Enrolled:</strong> Full Stack Web Development
          </p>
          <p>
          <div className="contact-info">
      <strong className="small-t">Contact Information:</strong>
      <p>
        <FaEnvelope className="icon" /> Email: tlhoxi12@gmail.com
      </p>
      <p>
        <FaPhone className="icon" /> Phone: +27 81 368 4688
      </p>
    </div>
            <strong className="small-t">Date:</strong> Last Updated: 13 January 2025
          </p>
          <button className="btn-download">
           <FaDownload />  <a className="link" href="/src/assets/cv.pdf" download>Download CV</a>
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
        <div className="col-md-6">
              <div className="hero-image">
                <img
                  src="../../src/assets/UntitledProject(1).jpg"
                  alt="Matlhogonolo Naoa"
                  className="img-fluid rounded"
                />
              </div>
        </div>
        </div>
      </Section>

      <Section
        id="intro"
        title="Personal Introduction"
        isActive={activeSection === "intro"}
      >
        <h2 className="sub">Hello, I am Matlhogonolo Naoa</h2>
        <p>
          I am a dedicated and driven web developer with a passion for learning and mastering new technologies. My journey at CodeTribe Academy has equipped me with the skills and knowledge to build dynamic, user-centric web applications. I am deeply committed to advancing my expertise and aspire to become a full-stack developer, contributing meaningfully to open-source projects and the broader tech community. My goal is to continuously evolve as a developer, staying at the forefront of innovation and creating impactful solutions.
        </p>
      </Section>

      

      <Section
  id="skills"
  title="Skills Matrix"
  isActive={activeSection === "skills"}
>
  <h3>Frontend Skills</h3>
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
        <td>HTML <FaHtml5 /></td>
        <td>Intermediate</td>
        <td>Used in multiple projects</td>
      </tr>
      <tr>
        <td>CSS <FaCss3Alt /></td>
        <td>Advanced</td>
        <td>Styled responsive layouts</td>
      </tr>
      <tr>
        <td>JavaScript <TbBrandJavascript /></td>
        <td>Intermediate</td>
        <td>Developed dynamic web applications</td>
      </tr>
      <tr>
        <td>React.js <FaReact /></td>
        <td>Intermediate</td>
        <td>Built interactive UIs</td>
      </tr>
      <tr>
        <td>React Native <TbBrandReactNative /></td>
        <td>Intermediate</td>
        <td>Built interactive mobile UIs</td>
      </tr>
    </tbody>
  </table>

  <h3 className="sub">Backend Skills</h3>
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
        <td>Node.js <FaNodeJs /></td>
        <td>Intermediate</td>
        <td>Built server-side applications</td>
      </tr>
      <tr>
        <td>Express.js</td>
        <td>Intermediate</td>
        <td>Developed RESTful APIs</td>
      </tr>
      <tr>
        <td>MongoDB <SiMongodb /></td>
        <td>Intermediate</td>
        <td>Managed NoSQL databases</td>
      </tr>
      <tr>
        <td>Firebase <IoLogoFirebase /></td>
        <td>Beginner</td>
        <td>Used for real-time database and authentication</td>
      </tr>
    </tbody>
  </table>
</Section>

      <Section
        id="projects"
        title="Individual Projects"
        isActive={activeSection === "projects"}
      >
       
        <div className="featured-projects">
          
          <ProjectCarousel projects={projectsData} />
        </div>

       
      </Section>

      <Section
  id="group-projects"
  title="Group Projects"
  isActive={activeSection === "group-projects"}
>
  <div className="card-container">
    {/* Card 1 */}
    <div className="card">
      <div className="card-inner">
        <div className="goals-content">
          <h3 className="goals-content">Restaurant Reservation App</h3>
          <p><strong>Description:</strong> An app for managing restaurants and its reservations from users</p>
      
          <p><strong>Team Members:</strong> Matlhogonolo Naoa and Tshepo Madira</p>
          <p><strong>Tech Stack:</strong> Expo, <TbBrandReactNative />  <SiMongodb /> <FaNodeJs /> </p>
          <p><strong>Collaboration Experience:</strong> We used GitHub for version control</p>
          <p>
            <div className="div">
              <a className="github" href="https://github.com/Matlhogonolo012/Restaurant-Reservation-App-Frontend-Admin.git">
              <FaGithub />
            </a>
            <a className="github" href="https://github.com/Matlhogonolo012/Restaurant-Reservation-App-Frontend-Admin.git">
            <SlGlobe />
            </a> 
            </div>
           
          </p>
        </div>
      </div>
    </div>


    <div className="card">
      <div className="card-inner">
        <div className="goals-content">
          <h3 className="goals-content">Weather Based Travel Planner with API Integration</h3>
          <p><strong>Description:</strong> An app for planning travel based on weather conditions</p>
      
          <p><strong>Team Members:</strong> Matlhogonolo Naoa and Tshepo Madira</p>
          <p><strong>Tech Stack:</strong>  Express.js, <FaReact />,  <SiMongodb /> , <FaNodeJs /></p>
          <p><strong>Collaboration Experience:</strong> We used GitHub for version control and Trello for task management</p>
          <p>
           
            <div className="div">
              <a className="github" href="https://github.com/Matlhogonolo012/weather-app-frontend.git">
              <FaGithub />
            </a>
            <a className="github" href="https://github.com/Matlhogonolo012/Restaurant-Reservation-App-Frontend-Admin.git">
            <SlGlobe />
            </a> 
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>

<Section
  id="goals"
  title="Post-Program Goals"
  isActive={activeSection === "goals"}
>
  <div className="goals-content">
    <h3>Short-Term Goals:</h3>
    <ul className="points">
      <li>
        <strong>Secure a Role in Web Development:</strong> I aim to join a dynamic team where I can apply my skills in front-end and back-end development to create impactful digital solutions. I am particularly interested in roles that challenge me to grow and innovate.
      </li>
      <li>
        <strong>Expand My Portfolio:</strong> Over the next 6-12 months, I plan to build 2-3 additional projects that showcase my ability to work with modern technologies like React, Node.js, and cloud platforms. These projects will focus on solving real-world problems and demonstrating my versatility as a developer.
      </li>
      <li>
        <strong>Enhance My Skill Set:</strong> I intend to deepen my knowledge of advanced JavaScript concepts, explore frameworks like Next.js, and gain hands-on experience with DevOps tools such as Docker and Kubernetes.
      </li>
    </ul>

    <h3>Long-Term Goals:</h3>
    <ul className="points">
      <li>
        <strong>Become a Full-Stack Developer:</strong> My long-term vision is to master both front-end and back-end development, enabling me to architect and deploy end-to-end solutions. I aspire to lead projects and mentor junior developers in the future.
      </li>
      <li>
        <strong>Contribute to Open-Source Projects:</strong> I am passionate about giving back to the developer community. I plan to actively contribute to open-source projects, collaborate with global developers, and share my knowledge through blogs and tutorials.
      </li>
      <li>
        <strong>Specialize in a Niche:</strong> Over time, I aim to specialize in a specific area of web development, such as performance optimization, accessibility, or cloud-native applications. This will allow me to become an expert in my field and deliver high-quality solutions.
      </li>
      <li>
        <strong>Build a Personal Brand:</strong> I want to establish myself as a thought leader in the tech industry by sharing my journey, insights, and expertise through social media, speaking engagements, and technical writing.
      </li>
    </ul>
  </div>
</Section>
    </div>
  );
};

export default HomePage;