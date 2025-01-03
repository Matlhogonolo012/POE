import React from "react";
import Section from "../components/section";
import ProjectCard from "../components/ProjectCard";

const HomePage = () => {
  return (
    <div>
     
      <Section id="intro" title="Personal Introduction">
        <h2>Hello, I am Matlhogonolo Naoa</h2>
        <p>This is a brief introduction about me and my journey at CodeTribe Academy.</p>
      </Section>

      <Section id="resume" title="Resume">
        <p>Download my <a href="/resume.pdf" download>Resume</a></p>
      </Section>

      
      <Section id="skills" title="Skills Matrix">
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Proficiency Level</th>
              <th>Examples of Use</th>
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
          </tbody>
        </table>
      </Section>


      <Section id="projects" title="Individual Projects">
        <ProjectCard project={{ title: "Project 1", description: "A cool project", techStack: "React, Node" }} />
        <ProjectCard project={{ title: "Project 2", description: "Another cool project", techStack: "JavaScript, HTML" }} />
      </Section>

     
      <Section id="feedback" title="Feedback & Reflections">
        <p>Facilitator Feedback: Great progress!</p>
        <p>Self-Reflection: I've grown significantly in React development.</p>
      </Section>

   
      <Section id="goals" title="Post-Program Goals">
        <h3>Short-Term Goals:</h3>
        <ul>
          <li>Secure a job in web development</li>
          <li>Build 2-3 more portfolio projects</li>
        </ul>
        <h3>Long-Term Goals:</h3>
        <ul>
          <li>Become a full-stack developer</li>
          <li>Contribute to open-source projects</li>
        </ul>
      </Section>
    </div>
  );
};

export default HomePage;
