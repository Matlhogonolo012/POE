import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import '../../src/styling/floatingsidebar.css';

const FloatingSidebar = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls sidebar visibility
  const [isOpen, setIsOpen] = useState(false); // Controls open/close state

  useEffect(() => {
    const toggleVisibility = () => {
      const heroSection = document.getElementById("cover-page");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div className={`floating-sidebar ${isVisible ? "visible" : ""}`}>
        {/* Toggle Button */}
        <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        {/* Icons */}
        <div className={`sidebar-icons ${isOpen ? "open" : ""}`}>
          <a href="https://github.com/Matlhogonolo012" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/matlhogonolo-naoa-924255340/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:tlhoxi12@gmail.com">
            <FaEnvelope className="icon" />
          </a>
          <a href="tel:+27813684688">
            <FaPhone className="icon" />
          </a>
          <a href="/src/assets/cv.pdf" download>
            <FaDownload className="icon" />
          </a>
        </div>
      </div>
    )
  );
};

export default FloatingSidebar;