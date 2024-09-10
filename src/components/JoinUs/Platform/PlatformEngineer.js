import React from 'react'
import "./platform.css"
import ToolsImage from "../../../assets/images/Tools-environment.png"

const PlatformEngineer = () => {
  return (
    <div className='platform-sec'>
      <div className='platform-sec1'>
        <div className='sec1-title'>Kranberry Platform Engineers</div>
        <div className='sec1-desc'>We leverage the extraordinary tools and capabilities of the HubSpot platform to resolve a wide variety of marketing, sales, and customer service needs—from web design, CMS development, and content creation to onboarding, custom integrations, and much more. <br/><br/>Our team of passionate and highly experienced HubSpot platform specialists and strategists are experts at optimizing and maximizing the inbound marketing methodology to meet consumers where they are along their respective buyer’s journey with meaningful solutions that build trust, forge relationships, and establish your brand as an authority within your industry. <br/><br/>We get to know your business and goals intimately and engineer the most effective custom solutions to exceed them.</div>
      </div>
      <img src={ToolsImage} alt="" className='platform-sec2'/>
    </div>
  )
}

export default PlatformEngineer
