import React, { useState } from 'react';
import './navbar.css';
import LogoImage from '../../assets/images/navbar-logo.webp';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // State to track which accordion item is open

  // Toggle the accordion item
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently open item
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoImage} alt="Hypha Logo" />
      </div>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        {['About', 'Solutions', 'Industries & Expertise', 'Portfolio', 'Referrals'].map((item, index) => (
          <li key={index} className={openIndex === index ? 'open' : ''}>
            <a href="#" onClick={() => toggleAccordion(index)}>
              {item}
            </a>
          </li>
        ))}
         <div class="contact">
            <a href="#" class="contact-btn">Contact Us</a>
        </div>
      </ul>
     
    </nav>
  );
};

export default Navbar;
