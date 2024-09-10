import React, { useState } from 'react';
import './navbar.css';
import LogoImage from '../../assets/images/navbar-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
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

  const navFeed = [
    {id:1, head:"About",route:'/join-us'},
    {id:2, head:"Solutions",route:'/'},
    {id:3, head:"Industries & Expertise",route:'/'},
    {id:4, head:"Portfolio",route:'/'},
    {id:5, head:"Referrals",route:'/'},
  ]


  const routeHome = async() => {
    navigate("/")
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoImage} alt="Hypha Logo" style={{cursor:'pointer'}}  onClick={routeHome}/>
      </div>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        {navFeed.map((item, index) => (
          <li key={index} className={openIndex === index ? 'open' : ''}>
            <a href={item?.route} onClick={() => toggleAccordion(index)}>
              {item.head}
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
