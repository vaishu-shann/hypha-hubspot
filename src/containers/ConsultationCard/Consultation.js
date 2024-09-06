import React from 'react'
import "./consultation.css"
import ConsultIllustration from "../../assets/images/consultation-illustrartion.svg"
 
const ConsultationSection = () => {
  return (
    <div className='consult-section'>
      <div className='consult-card'>
        <img src={ConsultIllustration} alt="" className='consult-card-img'/>
        <div className='marginTop'>
            <div className='consult-heading'>Request an exploratory review today to find out how to take your business to the next level!</div>
            <div className='consult-cta'>Schedule a consultation</div>
        </div>
      </div>
    </div>
  )
}

export default ConsultationSection
