import React from "react";
import { Link } from "react-scroll";
import HomePage from "../src/pages/home";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="intro" smooth={true} duration={500}>
                Personal Introduction
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={500}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills Matrix
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="feedback" smooth={true} duration={500}>
                Feedback & Reflections
              </Link>
            </li>
            <li>
              <Link to="goals" smooth={true} duration={500}>
                Post-Program Goals
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <HomePage />
    </div>
  );
}

export default App;
