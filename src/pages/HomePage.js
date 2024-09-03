import React from 'react'
import "../styles/homePage.css"
import HomeBanner from '../components/Home/HomeBanner/HomeBanner'
import WhyKranberry from '../components/Home/WhyKranberry/whyKranberry'
import HomeTestimonial from '../components/Home/HomeTestimonial/Testimonial'

const HomePage = () => {
  return (
    <div >
      <HomeBanner/>
      <WhyKranberry/>
      <HomeTestimonial/>
    </div>
  )
}

export default HomePage
