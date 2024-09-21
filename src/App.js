import React from 'react'
import "./styles/global.css"
import Navbar from './components/Navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import JoinUsPage from './pages/JoinUsPage';
import ConfigurationPage from './pages/ConfigurationPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join-us" element={<JoinUsPage/>} />
        <Route path="/hubspot-platform-configuration-integration" element={<ConfigurationPage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
