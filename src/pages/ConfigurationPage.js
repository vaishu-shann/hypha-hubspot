import React from 'react'
import PlatformHome from '../components/PlatformConfiguration/PlatformHome/PlatformHome'
import SalesForce from '../components/PlatformConfiguration/SalesForce/SalesForce'
import GetStarted from '../components/PlatformConfiguration/GetStarted/GetStarted'

const ConfigurationPage = () => {
  return (
    <div>
      <PlatformHome/>
      <SalesForce/>
      <GetStarted/>
    </div>
  )
}

export default ConfigurationPage
