import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { TbBlobFilled } from "react-icons/tb";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styling/header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

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
    <Navbar bg="white" expand="lg" expanded={expanded} fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <TbBlobFilled /> MN
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="cover-page"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className={activeSection === "cover-page" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="intro"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className={activeSection === "intro" ? "active" : ""}
            >
              Introduction
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="goals"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className={activeSection === "goals" ? "active" : ""}
            >
              Goals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;