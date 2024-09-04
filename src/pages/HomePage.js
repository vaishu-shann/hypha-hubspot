import React from 'react'
import "../styles/homePage.css"
import HomeBanner from '../components/Home/HomeBanner/HomeBanner'
import WhyKranberry from '../components/Home/WhyKranberry/whyKranberry'
import HomeTestimonial from '../components/Home/HomeTestimonial/Testimonial'
import HomeResults from '../components/HomeResults/HomeResults'

const HomePage = () => {
  return (
    <div >
      <HomeBanner/>
      <WhyKranberry/>
      <HomeTestimonial/>
      <HomeResults/>
    </div>
  )
}

export default HomePage
