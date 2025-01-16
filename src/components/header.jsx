import { useState } from 'react';
import { Link } from "react-scroll";
import { TbBlobFilled } from "react-icons/tb";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo"> <TbBlobFilled /> MN</div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
        <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <Link to="cover-page" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="intro" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Introduction
            </Link>
          </li>
         
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="feedback" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Feedback
            </Link>
          </li>
          <li>
            <Link to="goals" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
              Goals
            </Link>
          </li>
         
        </ul>
      
   
      </nav>
    </header>
  );
};

export default Header;
