import React, { useState } from 'react';
import "./portfolioList.css"
import CardImage1 from "../../../assets/images/canidium-portfolio-thumbnail.jpg"
import CardImage2 from "../../../assets/images/MSCU-website-thumbnail.webp"
import CardImage3 from "../../../assets/images/thumbnail-from-bcs-website.webp"
import { useNavigate } from 'react-router-dom';

const sortList = ["Show All", "Healthcare", "Finance", "Transportation & Logistics", "Manufacturing", " Social Impact & ESG", "Clean Tech & Renewable Energy", "Other"]

const PortfolioList = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { id: 1, image: `${CardImage1}`, title: 'Canidium', content: "Canidium's solution architects and strategists tackle complex challenges and drive success in competitive markets." },
    { id: 2, image: `${CardImage2}`, title: 'MSCU', content: "Established in 1954, Mutual Security Credit Union (MSCU) is a trusted financial institution dedicated to serving more than 28,000 members across Western Connecticut." },
    { id: 3, image: `${CardImage3}`, title: 'bcs', content: "With cloud-based software, bcs offers certificate of insurance tracking, vendor management, and risk management programs to organizations in more than a dozen industries." },
  ];
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


      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() =>navigate("/canidium")}
          >
            <img src={card.image} alt='' className='p-card-img'    />
            <div className='p-card-head'>{card.title}</div>
            <div className='p-card-desc'>{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioList
