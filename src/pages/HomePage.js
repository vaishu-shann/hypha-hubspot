import React from 'react'
import "../styles/homePage.css"
import HomeBanner from '../components/Home/HomeBanner/HomeBanner'
import WhyKranberry from '../components/Home/WhyKranberry/whyKranberry'
import HomeTestimonial from '../components/Home/HomeTestimonial/Testimonial'
import HomeResults from '../components/Home/HomeResults/HomeResults'
import HomeFeature from '../components/Home/HomeFeature/Feature'
import HomeBlog from '../components/Home/HomeBlog/Blog'
import ConsultationSection from '../containers/ConsultationCard/Consultation'

const HomePage = () => {
  return (
    <div >
      <HomeBanner />
      <WhyKranberry />
      <HomeTestimonial />
      <HomeResults />
      <HomeFeature />
      <HomeBlog/>
      <ConsultationSection/>
  
    </div>
  )
}

export default HomePage
