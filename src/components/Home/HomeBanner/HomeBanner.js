import React from 'react'
import "./homeBanner.css"
import HomeVector from "../../../assets/images/IllustrationGroup-hero.svg"


const HomeBanner = () => {
    return (
        <>
            <div className='homepage-banner'>
                <div className='h-b-left'>
                    <div className='sub-head heading4'>Design. Build. Integrate. Scale.</div>
                    <div className='changing-head'>Build your Business on the HubSpot Platform.</div>
                    <div className='btn light'></div>
                </div>
                <div className='h-b-right'>
                   <img src={HomeVector} alt='home-illustration' className='home-illustration'/>

                </div>
            </div>
        </>
    );
};


export default HomeBanner
