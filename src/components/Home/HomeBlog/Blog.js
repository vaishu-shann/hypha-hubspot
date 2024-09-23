import React from 'react'
import "./blog.css"
import { MdOutlineArrowForward } from "react-icons/md";
import { IconContext } from "react-icons";

const HomeBlog = () => {
    return (
        <div className='home-blog-section'>
            <div className='blog-phase-1'>
                <div>
                    <div className='blog-phase-head'>
                        The Kranberry Blog
                    </div>
                    <div className='blog-phase-desc'>
                        From inbound best practices to accessibility design advice, our blog provides valuable tips and guidance for businesses of all sizes.
                    </div>
                </div>
                {/* <button className='blog-phase-cta'>View All Post</button> */}
                <div class="linkWrap">
                    <a href="/" class="cta style-9">
                        <span>View All Posts</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                </div>
            </div>

            <div className='blog-phase-2'>
                <div className='single-blog-card'>
                    <div className='blog-card-head'>The Promise of HubSpot’s Custom Modules: Simplified Site Management & Supercharged Operations </div>
                    <div className='blog-card-desc'>HubSpot’s custom modules make website management easier, offering flexibility, efficiency, and seamless integration for consistent branding and streamlined content updates.</div>
                   <div className='zIndex'>
                    <IconContext.Provider value={{ color: "black", size:'1em', className:'arrow-blog' }}>
                        <div className='right-arrow-blog'>
                            <MdOutlineArrowForward />
                        </div>
                    </IconContext.Provider>
                    </div>
                </div>
                <div className='single-blog-card'>
                    <div className='blog-card-head'>How to Migrate Your Tickets from Zoho to Hubspot</div>
                    <div className='blog-card-desc'>Migrate your Zoho tickets to HubSpot effortlessly with expert guidance from Hypha, ensuring a seamless transition and optimized CRM performance.</div>
                   <div className='zIndex'>
                    <IconContext.Provider value={{ color: "black", size:'1em', className:'arrow-blog' }}>
                        <div className='right-arrow-blog'>
                            <MdOutlineArrowForward />
                        </div>
                    </IconContext.Provider>
                    </div>
                </div>
                <div className='single-blog-card'>
                    <div className='blog-card-head'>The Power of Repurposing Content</div>
                    <div className='blog-card-desc'>Discover the power of repurposing content to reach a wider audience and boost user engagement using infographics, audio, video and more. </div>
                   <div className='zIndex'>
                    <IconContext.Provider value={{ color: "black", size:'1em', className:'arrow-blog' }}>
                        <div className='right-arrow-blog'>
                            <MdOutlineArrowForward />
                        </div>
                    </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog
