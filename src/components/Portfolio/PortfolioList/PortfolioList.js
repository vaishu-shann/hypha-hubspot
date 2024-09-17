import React, { useState } from 'react';
import "./portfolioList.css"
import CardImage from "../../../assets/images/canidium-portfolio-thumbnail.jpg"

const sortList=["Show All", "Healthcare", "Finance" , "Transportation & Logistics" , "Manufacturing", " Social Impact & ESG", "Clean Tech & Renewable Energy","Other"]

const PortfolioList = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
      setActiveIndex(index);
    };
    return (
        <div className='p-list-sec'>
            <div className='p-list-head'>Filter by Industries & Expertise</div>
            <div className="button-container">
      {sortList.map((item, index) => (
        <button 
          key={index} 
          className={`sort-button ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {item}
        </button>
      ))}
    </div>
            <div className='single-port-card'>
                <img src={CardImage} alt='' className='p-card-img' />
                <div className='p-card-head'>Canidium</div>
                <div className='p-card-desc'>Canidium's solution architects and strategists tackle complex challenges and drive success in competitive markets.</div>
            </div>
        </div>
    )
}

export default PortfolioList
