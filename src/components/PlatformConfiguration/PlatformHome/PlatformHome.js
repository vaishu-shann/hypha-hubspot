import React from 'react'
import "./platformHome.css"
import PlatformHomeImage from "../../../assets/images/Hypha-IllustrationGroup-Integration.svg"

const PlatformHome = () => {
    return (
        <div className='integration-sec'>
        <div className='platform-home'>
            <div className='h-b-left'>
                <div className='platform-home-sub-desc'>Onboarding, Configuration, Data Migration & Integration—We Specialize in It All</div>
                <div className='platform-home-head'>HubSpot Platform Configuration & Integration</div>
            </div>
            <div className='h-b-right'>
                <img src={PlatformHomeImage} alt='platform-illustration' className='platform-illustration' />
            </div>
        </div>
        </div>
    )
}

export default PlatformHome
