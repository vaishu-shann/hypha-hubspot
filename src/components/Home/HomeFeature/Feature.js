import React from 'react'
import "./feature.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import FeatureImage1 from "../../../assets/images/Hypha-IllustrationSingle-1.svg"
import FeatureImage2 from "../../../assets/images/Hypha-IllustrationSingle-2.svg"
import FeatureImage3 from "../../../assets/images/Hypha-IllustrationSingle-3.svg"

const HomeFeature = () => {
  return (
    <div className='home-feature-section'>
      <Carousel showArrows={false} autoPlay infiniteLoop>
        <div className='single-carousel-feature'>
          <div className='feature-left'>
            <div className='feature-heading'>HubSpot Implementation & Retainer Services</div>
            <div className='feature-para'>We fully design, build, and launch your HubSpot site and systems, optimizing every facet to maximize efficiencies and grow your business!</div>
            <div className='why-card-cta'>Learn more</div>
          </div>
          <div>
            <img src={FeatureImage1} alt="" className='feature-image'></img>
          </div>
        </div>
        <div className='single-carousel-feature'>
          <div className='feature-left'>
            <div className='feature-heading'>Social Impact Reporting </div>
            <div className='feature-para'>We help you tell the world about all the extraordinary work you’ve been doing to positively impact clients, employees, and society!</div>
            <div className='why-card-cta'>Learn more</div>
          </div>
          <div>
            <img src={FeatureImage2} alt="" className='feature-image'></img>
          </div>
        </div>
        <div className='single-carousel-feature'>
          <div className='feature-left'>
            <div className='feature-heading'>Accessibility</div>
            <div className='feature-para'>We specialize in Web Content Accessibility Guidelines (WCAG) 2.1 AA standards and will help ensure your website is fully compliant and accessible to all!</div>
            <div className='why-card-cta'>Learn more</div>
          </div>
          <div>
            <img src={FeatureImage3} alt="" className='feature-image'></img>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default HomeFeature
