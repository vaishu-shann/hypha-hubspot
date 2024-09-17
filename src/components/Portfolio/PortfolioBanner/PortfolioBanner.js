import React from 'react'
import "./portfolioBanner.css"
import floatImage1 from "../../../assets/images/Decorative Shapes.webp"
import floatImage2 from "../../../assets/images/Decorative Shapes 2.webp"


const PortfolioBanner = () => {
  return (
    <div className='portfolio-banner'>
        <img src={floatImage1} alt=" " className='floating-img-p-b1'/>
      <div className='p-b-head'>Hypha Hubspot Client Portfolio</div>
      <div className='p-b-desc'>Our diverse roster of extraordinary clients provide exceptional products and services that help make this world a little bit better. Explore our portfolio and learn how we can amplify your messaging, revolutionize your web presence, attract and convert more customers, and achieve sustained growth!</div>
      <img src={floatImage2} alt=" " className='floating-img-p-b2'/>
    
    </div>
  )
}

export default PortfolioBanner
