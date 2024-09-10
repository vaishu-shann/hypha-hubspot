import React from 'react'
import "./styles/global.css"
import Navbar from './components/Navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import JoinUsPage from './pages/JoinUsPage';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join-us" element={<JoinUsPage/>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
