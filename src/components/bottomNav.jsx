import React from "react";
import { FaHome, FaProjectDiagram, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styling/bottomNav.css"; // Add styling

const BottomNav = ({ handlePrev, handleNext }) => (
  <div className="bottom-nav">
    <button className="nav-btn" onClick={handlePrev}>
      <FaArrowLeft /> Prev
    </button>
    <button className="nav-btn">
      <FaHome /> Home
    </button>
    <button className="nav-btn">
      <FaProjectDiagram /> Projects
    </button>
    <button className="nav-btn" onClick={handleNext}>
      Next <FaArrowRight />
    </button>
  </div>
);

export default BottomNav;
