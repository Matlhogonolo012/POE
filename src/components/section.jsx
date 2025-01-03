import React from "react";

const Section = ({ id, title, children, isActive }) => {
  return (
    <section id={id} className={`section ${isActive ? "active-section" : ""}`}>
      <h1 className={`section-title ${isActive ? "glow" : ""}`}>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
