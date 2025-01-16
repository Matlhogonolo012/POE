import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import HomePage from "../src/pages/home";
import BackToTop from "../src/components/backToTheTop";
import "./App.css";

function App() {
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
    <div className="App">
      {/* <header>
        <nav>
          <ul>
            <li>
              <Link
                to="intro"
                smooth={true}
                duration={500}
                className={activeSection === "intro" ? "active-link" : ""}
              >
                Personal Introduction
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                className={activeSection === "resume" ? "active-link" : ""}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={activeSection === "skills" ? "active-link" : ""}
              >
                Skills Matrix
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={activeSection === "projects" ? "active-link" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="feedback"
                smooth={true}
                duration={500}
                className={activeSection === "feedback" ? "active-link" : ""}
              >
                Feedback & Reflections
              </Link>
            </li>
            <li>
              <Link
                to="goals"
                smooth={true}
                duration={500}
                className={activeSection === "goals" ? "active-link" : ""}
              >
                Post-Program Goals
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}

      <HomePage />
      <BackToTop />
    </div>
  );
}

export default App;
