import React from 'react'
import JoinBanner from '../components/JoinUs/JoinBanner/JoinBanner'
import ValueCont from '../components/JoinUs/OurValues/ValuesSection/ValueCont'
import PlatformEngineer from '../components/JoinUs/Platform/PlatformEngineer'
import ApplyRole from '../components/JoinUs/ApplyRole/ApplyRole'

const JoinUsPage = () => {
  return (
    <div>
      <JoinBanner/>
      <PlatformEngineer/>
      <ValueCont/>
      <ApplyRole/>
    </div>
  )
}

export default JoinUsPage
