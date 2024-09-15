import React from 'react'
import "./salesForce.css"
import LogoRoots from "../../../assets/images/logos-roots-2.jpg"
import Analyitics from "../../../assets/images/Analytic HubSpot screens with graphs and charts.png"
import IllustrationSingle from "../../../assets/images/Hypha-IllustrationSingle-10.svg"
import netsuite from "../../../assets/images/salesforce-netsuite-mailchimp-logos.jpg"

const SalesForce = () => {
    return (
        <div className='salesforce-cont'>
            <div className='salesforce-flex'>
                <img src={LogoRoots} alt="" className='salesforce-img-1' />
                <div className='sf-width'>
                    <div className='sf-sub-text'>Salesforce? NetSuite? Mailchimp?</div>
                    <div className='sf-head'>Integrate With Anything</div>
                    <div className='sf-sub-desc'>No matter your existing platform, we’ll scope the perfect solution, catalog your systems, track your data, forge audit update trails, protect against unauthorized access, and maintain accessibility and regulatory compliance.<br /><br />We create custom API integrations, sync data, and optimize automations to ensure the various components of your business are operating smoothly and flawlessly as a singular revenue engine firing on all cylinders at top speed to maximize every opportunity and achieve sustainable growth.</div>

                </div>
            </div>
            <div className='salesforce-flex'>
                <div className='sf-width'>
                    <div className='sf-sub-text'>Tailored Hubs for Your Unique Business Needs</div>
                    <div className='sf-head'>HubSpot Platform Configuration Services</div>
                    <div className='sf-sub-desc'>Every business is unique, which is why HubSpot’s flexibility is so crucial for any organization looking for the right platform to build on. From small-scale startups to large enterprises, our team of certified HubSpot professionals is equipped to customize your HubSpot instance—from the HubSpot CRM, across Marketing Hub, Sales Hub, and Service Hub. <br /><br />With custom properties and objects, pipelines, dashboards, and automation, down to your admin settings, we can configure your unique instance to reflect your unique needs. Whether marketing automation, sales systems, or customer support channels—adapt HubSpot to meet your current requirements while remaining flexible enough to adapt to your future growth. </div>
                    <div className='sf-sub-text-underline'>Embrace the Full Potential of Your HubSpot Platform With Our Configuration Services!</div>
                </div>
                <img src={Analyitics} alt="" className='salesforce-img-2' />
            </div>
            <div className='salesforce-flex'>
                <img src={IllustrationSingle} alt="" className='salesforce-img-3' />
                <div className='sf-width'>
                    <div className='sf-sub-text'>We'll Fully Design, Build & Launch Your HubSpot Site & Systems</div>
                    <div className='sf-head'>HubSpot Implementation & Retainer Services</div>
                    <div className='sf-sub-desc'>Not only will our HubSpot experts train your team on the most effective marketing, sales, and services solutions provided by the platform, we'll build out your entire website and implement all its systems, and with our ongoing retainer services, provide ongoing strategy, content deployment, site management, and anything related to the health of your data and systems.</div>
                    <div className='sf-sub-text-underline'>Achieve Faster Short-Term Success & Stronger Long-Term Growth With Our Implementation & Retainer Services</div>
                </div>
            </div>

            <div className='salesforce-flex'>
                <div>
                    <div className='bordered-para'>
                        "With seven years of direct HubSpot experience, I can confidently say that custom integrations are an indispensable tool for making a data migration quick and easy. These integrations seamlessly connect HubSpot with various platforms, allowing for an effortless data transfer, and save you and your team valuable time and resources. By leveraging custom integrations, we empower businesses to migrate their data effortlessly, ensuring a seamless transition between HubSpot and their old CRMs. Accurate field mapping and synchronization eliminate the risk of data loss or errors, while integrating CRM, email marketing, and e-commerce tools further enhances productivity and drives growth."
                    </div>
                    <div className='bp-auth'>– Kevin Campbell, Hypha Chief HubSpot Platform Specialist</div>
                </div>
                <img src={netsuite} alt="" className='salesforce-img-4' />

            </div>
        </div>
    )
}

export default SalesForce
