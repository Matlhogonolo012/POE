import React from "react";

const Section = ({ id, title, children }) => {
  return (
    <section id={id} style={{ padding: "50px 0", margin: "20px 0", borderBottom: "1px solid #ddd" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
