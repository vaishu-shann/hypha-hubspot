import React, { useState } from 'react'
import "./homeBanner.css"
import HomeVector from "../../../assets/images/hero-alt-img.jpeg"
import { IconContext } from "react-icons";
import { FaArrowRight } from "react-icons/fa6";

const HomeBanner = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div className='homepage-banner'>
                <div className='h-b-left'>
                    <div className='sub-head heading4'>Design. Build. Integrate. Scale.1234</div>

                    <div class="wrap">
                        <p class="flip"><span className='changing-head'>Build your Business</span>
                            <span className='changing-head'>Scale your Business</span>
                            <span className='changing-head'>Design your Business</span>
                        </p>
                    </div>
                    <div className='changing-subhead'> on the HubSpot Platform.</div>
                    <div className='home-b-cta' onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <div className='home-b-cta-text' >Get Started</div>
                        <IconContext.Provider value={{ color: isHovered ? "white" : "black", size: '1em', className: 'home-cta-arrow' }}>
                            <div className=''>
                                <FaArrowRight />
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className='h-b-right'>
                    <img src={HomeVector} alt='home-illustration' className='home-illustration' />
                </div>
            </div>
        </>
    );
};


export default HomeBanner
