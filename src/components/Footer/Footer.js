import React from 'react'
import "./footer.css"
import LogoImage from '../../assets/images/navbar-logo.png';
import { IconContext } from "react-icons";
import { FaInstagram, FaFacebookF ,FaLinkedinIn} from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-section-1'>
                <div>
                    <div>
                        <div className='foot-head'>About</div>
                        <ul>
                            <li>Who We Are</li>
                            <li>Strategic Partners</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div>
                        <div className='foot-head'>Our Work</div>
                        <ul>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='foot-head'>Solutions            </div>
                    <ul>
                        <li>Front-End Web Design & CMS Development</li>
                        <li>HubSpot Platform Configuration & Integration</li>
                        <li>Inbound Marketing & Content Development</li>
                        <li>Pricing</li>
                        <li>What’s Next?</li>
                    </ul>
                </div>
                <div>
                    <div className='foot-head'>Resources</div>
                    <ul>
                        <li>Hypha Blog</li>
                        <li>What Is Inbound Marketing?</li>
                        <li>What Is Content Marketing?</li>
                        <li>What Is Web Accessibility?</li>
                        <li>Does HubSpot Integrate With...?</li>
                    </ul>
                </div>
                <div>
                    <div className='foot-head'>Partner With Us</div>
                    <ul>
                        <li>Contact Us</li>
                        <li>Referrals</li>
                    </ul>
                </div>
            </div>
            <div className='footer-section-2'>
                <div className="logo">
                    <img src={LogoImage} alt="Hypha Logo" />
                </div>
                <div className='policy-cont'>
                    <div className='section-2-style'>
                        <IconContext.Provider value={{ color: "black", size: '1.5em', }}>
                            <div style={{marginRight:20,cursor:'pointer'}}>
                                <FaInstagram />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "black", size: '1.5em', }}>
                            <div style={{marginRight:20,cursor:'pointer'}}>
                                <FaFacebookF />
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: "black", size: '1.5em', }}>
                            <div style={{cursor:'pointer'}}>
                                <FaLinkedinIn />
                            </div>
                        </IconContext.Provider>
                    </div>
                    <div className='section-2-style' style={{marginTop:15}}>
                        <div className='section-2-subtext' style={{marginRight:10}}>Privacy Notice</div>
                        <div className='section-2-subtext' style={{marginRight:10}}>Accessibility Statement</div>
                        <div className='section-2-subtext'>AI Usage Policy</div>
                    </div>
                    <div className='section-2-style'>
                        <div className='copyrights'>© 2024 Kranberry Development. - All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer
