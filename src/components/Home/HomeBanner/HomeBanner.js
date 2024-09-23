import React from 'react'
import "./homeBanner.css"
import HomeVector from "../../../assets/images/hero-alt-img.jpeg"


const HomeBanner = () => {
    return (
        <>
            <div className='homepage-banner'>
                <div className='h-b-left'>
                    <div className='sub-head heading4'>Design. Build. Integrate. Scale.1234</div>
                    {/* <div class="container">
                        <div class="title">
                            <div class="word rhythm">
                            <span className='changing-head'>Build your Business </span>
                            </div>
                            <div class="word city">
                            <span className='changing-head'>Scale your Business </span>
                            </div>
                            <div class="word voice">
                            <span className='changing-head'>Design your Business </span>
                            </div>
                        </div>
                    </div> */}

                    <div class="wrap">
                        <p class="flip"><span className='changing-head'>Build your Business</span>
                            <span className='changing-head'>Scale your Business</span>
                            <span className='changing-head'>Design your Business</span>
                        </p>
                    </div>
                    <div className='changing-subhead'> on the HubSpot Platform.</div>
                    <div className='btn light'></div>
                </div>
                <div className='h-b-right'>
                    <img src={HomeVector} alt='home-illustration' className='home-illustration' />
                </div>
            </div>
        </>
    );
};


export default HomeBanner
