import React from 'react'
import "../styles/homePage.css"
import HomeBanner from '../components/Home/HomeBanner/HomeBanner'
import WhyKranberry from '../components/Home/WhyKranberry/whyKranberry'

const HomePage = () => {
  return (
    <div >
      <HomeBanner/>
      <WhyKranberry/>
    </div>
  )
}

export default HomePage
