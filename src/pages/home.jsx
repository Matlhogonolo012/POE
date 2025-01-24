import { useState, useEffect, useRef } from "react";
import Section from "../components/section";
import Header from "../components/header";
import { FaDownload, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroImage from "../../src/assets/UntitledProject(1).jpg";
import FeaturedProjects from "../components/featuredProjects";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import lottie from "lottie-web";
import animationData from "../assets/hi.json";
import FloatingSidebar from "../components/floatingSidebar";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("");
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Intersection Observer for Active Section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value as needed
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
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("cover-page");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Show sidebar when the hero section is out of view
        setIsSidebarVisible(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Lottie Animation Setup
  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animationData,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy(); // Cleanup animation on unmount
      }
    };
  }, []);

  return (
    <div className="home-page">
      <Header />
      {/* Cover Page Section */}
      <Section id="cover-page" isActive={activeSection === "cover-page"}>
  <div className="hero">
    <div className="hero-content">
      <h1>Matlhogonolo Naoa</h1>
      <p>
        <strong className="small-t">CodeTribe Location:</strong> Ga-Rankuwa
      </p>
      <p>
        <strong className="small-t">Program Enrolled:</strong> Software and Web Development
      </p>
      <p>
        <strong className="small-t">Date:</strong> Last Updated: 20 January 2025
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
        <a href="mailto:tlhoxi12@gmail.com" className="link">
          <FaEnvelope />
        </a>
        <a href="tel:+27813684688" className="link">
          <FaPhone />
        </a>
      </div>
    </div>
    <div className="col-md-6">
      <div className="hero-image">
        <img src={HeroImage} alt="hero-image" />
      </div>
    </div>
  </div>
</Section>
      <FloatingSidebar className={isSidebarVisible ? "visible" : ""} />

      <Section id="intro" title="Personal Introduction" isActive={activeSection === "intro"}>
  <div className="content-container">
    <div className="lottie-container" ref={animationContainer}></div>
    <div className="about-me">
      <h2 className="sub">
      <TextAnimation
  phrases={[
    "Matlhogonolo Naoa, at your service!",
    "A passionate developer creating digital solutions",
    "Turning ideas into functional, beautiful applications",
    "Building seamless web experiences",
    "Aspiring to innovate and inspire through technology",
    "Coffee in one hand, code in the other",
    "Driven by curiosity and a hunger for knowledge",
  ]}
/>
      </h2>
      <p className="about">
        I am a dedicated and driven web developer with a passion for learning and mastering new technologies. My journey at CodeTribe Academy has equipped me with the skills and knowledge to build dynamic, user-centric web applications. I am deeply committed to advancing my expertise and aspire to become a full-stack developer, contributing meaningfully to open-source projects and the broader tech community. My goal is to continuously evolve as a developer, staying at the forefront of innovation and creating impactful solutions.
      </p>
    </div>
  </div>
</Section>

      {/* Skills Section */}
     <Section id="skills" title="Skills Matrix" isActive={activeSection === "skills"}>
      <h3 className="sub">Frontend Skills</h3>
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
            <td data-label="Skill">
              HTML <FaHtml5 />
            </td>
            <td data-label="Proficiency Level">Intermediate</td>
            <td data-label="Description">Used in multiple projects</td>
          </tr>
          <tr>
            <td data-label="Skill">
              CSS <FaCss3Alt />
            </td>
            <td data-label="Proficiency Level">Advanced</td>
            <td data-label="Description">Styled responsive layouts</td>
          </tr>
          <tr>
            <td data-label="Skill">
              JavaScript <TbBrandJavascript />
            </td>
            <td data-label="Proficiency Level">Intermediate</td>
            <td data-label="Description">Developed dynamic web applications</td>
          </tr>
          <tr>
            <td data-label="Skill">
              React.js <FaReact />
            </td>
            <td data-label="Proficiency Level">Intermediate</td>
            <td data-label="Description">Built interactive UIs</td>
          </tr>
          <tr>
            <td data-label="Skill">
              React Native <TbBrandReactNative />
            </td>
            <td data-label="Proficiency Level">Intermediate</td>
            <td data-label="Description">Built interactive mobile UIs</td>
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
            <td data-label="Skill">
              Node.js <FaNodeJs />
            </td>
            <td data-label="Proficiency Level">Intermediate</td>
            <td data-label="Description">Built server-side applications</td>
          </tr>
          <tr>
            <td data-label="Skill">Express.js</td>
            <td data-label="Proficiency Level">Intermediate</td>
            <td data-label="Description">Developed RESTful APIs</td>
          </tr>
          <tr>
            <td data-label="Skill">
              MongoDB <SiMongodb />
            </td>
            <td data-label="Proficiency Level">Intermediate</td>
            <td data-label="Description">Managed NoSQL databases</td>
          </tr>
          <tr>
            <td data-label="Skill">
              Firebase <IoLogoFirebase />
            </td>
            <td data-label="Proficiency Level">Beginner</td>
            <td data-label="Description">Used for real-time database and authentication</td>
          </tr>
        </tbody>
      </table>
    </Section>

      {/* Projects Section */}
      <Section id="projects" title="Individual Projects" isActive={activeSection === "projects"}>
        <div className="featured-projects">
          <FeaturedProjects />
        </div>
      </Section>

      {/* Group Projects Section */}
      <Section id="group-projects" title="Team Projects" isActive={activeSection === "group-projects"}>
        <div className="card-container">
          {/* Card 1 */}
          <div className="card">
            <div className="card-inner">
              <div className="goals-content">
                <h3>Restaurant Reservation App</h3>
                <p><strong>Description:</strong> An app for managing restaurants and its reservations from users</p>
                <p><strong>Team Members:</strong> Matlhogonolo Naoa and Tshepo Madira</p>
                <p><strong>Tech Stack:</strong> Expo, <TbBrandReactNative /> <SiMongodb /> <FaNodeJs /></p>
                <p><strong>Experience:</strong> We used GitHub for version control</p>
                <p>
                  <div className="div">
                    <a className="github" href="https://github.com/Matlhogonolo012/Restaurant-Reservation-App-Frontend-Admin.git">
                      <FaGithub />
                    </a>
                    <a className="github" href="https://github.com/Matlhogonolo012/Restaurant-Reservation-App-Frontend-Admin.git">
                      <FaLink />
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-inner">
              <div className="goals-content">
                <h3>Weather Based Travel Planner with API Integration</h3>
                <p><strong>Description:</strong> An app for planning travel based on weather conditions</p>
                <p><strong>Team Members:</strong> Matlhogonolo Naoa and Tshepo Madira</p>
                <p><strong>Tech Stack:</strong> Express.js, <FaReact />, <SiMongodb />, <FaNodeJs /></p>
                <p><strong>Collaboration Experience:</strong> We used GitHub for version control and Trello for task management</p>
                <p>
                  <div className="div">
                    <a className="github" href="https://github.com/Matlhogonolo012/weather-app-frontend.git">
                      <FaGithub />
                    </a>
                    <a className="github" href="https://github.com/Matlhogonolo012/Restaurant-Reservation-App-Frontend-Admin.git">
                      <FaLink />
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
const TextAnimation = ({ phrases }) => {
  const textRef = useRef(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;
    let timeout;

    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const isLastPhrase = currentPhraseIndex === phrases.length - 1;

      if (!isDeleting) {
        // Typing logic
        setCurrentText((prev) => currentPhrase.substring(0, prev.length + 1));
        if (currentText === currentPhrase) {
          // Wait for a moment before starting to delete
          timeout = setTimeout(() => setIsDeleting(true), 1000); // Adjust delay here
        }
      } else {
        // Deleting logic
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          // Move to the next phrase or loop back to the first
          setCurrentPhraseIndex((prev) => (isLastPhrase ? 0 : prev + 1));
        }
      }

      // Update the text element with the current text and cursor
      textElement.innerHTML = currentText + '<span class="cursor"></span>';
    };

    timeout = setTimeout(typeText, isDeleting ? 60 : 100); // Adjust typing and deleting speed here

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return <span ref={textRef}></span>;
};

export default HomePage;