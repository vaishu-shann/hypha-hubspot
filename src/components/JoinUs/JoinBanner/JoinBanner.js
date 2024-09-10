import React from 'react'
import "./joinB.css"
import StylingIcon1 from "../../../assets/images/Decorative Shapes.webp"
import StylingIcon2 from "../../../assets/images/Decorative Shapes 2.webp"

const JoinBanner = () => {
  return (
    <div className='join-comp'>
        <img src={StylingIcon1} alt="" className='floatIcon1' />
        <img src={StylingIcon2} alt="" className='floatIcon2' />
      <div className='wrapper'>
<div className='wrapper-head'>Careers</div>
<div className='wrapper-desc'>As a growing agency, we're always ready to connect with talented people who share our values and passion.</div>
<div className='wrapper-desc'>Learn more about our open positions or get in touch and tell us what you're looking for.</div>
      </div>
    </div>
  )
}

export default JoinBanner
