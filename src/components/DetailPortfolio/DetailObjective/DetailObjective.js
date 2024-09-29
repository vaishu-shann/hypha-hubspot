import React from 'react'
import "./detailObj.css"
import CanidiumPortfolio from "../../../assets/images/canidium-portfolio-feature-2.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { IconContext } from "react-icons";
import { MdOutlineLaptopWindows } from "react-icons/md";
import ConsultationSection from '../../../containers/ConsultationCard/Consultation';

const DetailObjective = () => {
    return (
        <>
            <div className='port-detail-block'>
                <div class="port-objective-col">
                    <div class="port-objective">
                        <h2>Objective</h2>
                        <p>The primary challenge facing Canidium was the inadequacy of its website to clearly and succinctly communicate what the company does, compounded by outdated user experience (UX) designs that hindered user engagement.</p>
                        <p>Hypha HubSpot Development's goals were multifaceted:</p>
                        <ol>
                            <li><strong>Clear Communication of Identity</strong>:
                                Redesign the website to more clearly articulate Canidium's services and value proposition, with an emphasis on modern UX optimizations to enhance user understanding and engagement.<br /><br /></li>
                            <li><strong>Position as Industry Leader</strong>:
                                Assert Canidium's authority in the fields of SPM, pricing, and CPQ, highlighting its extensive expertise across sales systems and software.<br /><br /></li>
                            <li><strong>Modernization of Branding</strong>:
                                Refresh Canidium's branding to brings its digital presence into the 2020s, incorporating modern design elements while retaining key aspects of the existing brand identity due to its prevalence in printed materials.</li>
                        </ol>
                    </div>
                </div>
                <div class="port-status-col">
                    <div class="port-services">
                        <h3 class="heading5" style={{ marginBottom: 16 }}>What We Did</h3>
                        <ul class="services-list">
                            <li>Logo Design/Branding</li>
                            <li>Website Redesign</li>
                            <li>Website Migration</li>
                            <li>Blog Migration</li>
                            <li>Core Site Content</li>
                            <li>Collateral &amp; Graphic Design</li>
                        </ul>
                    </div>
                    <hr style={{ margin: "40px auto", maxWidth: "100%" }} />
                    <div class="port-tech">
                        <h3 class="heading5">Tech Stack</h3>
                        <ul class="tech-stack-list" style={{ marginBottom: 12 }}>
                            <li>
                                <img src="https://www.hyphadev.io/hubfs/portfolio/CMSHub_Icon.svg" alt="cms hub icon" style={{ width: "20px", height: "20px", marginRight: 5 }} />
                                CMS Hub
                            </li>
                            <li>
                                <img src="https://www.hyphadev.io/hubfs/portfolio/MarketingHub_Icon.svg" alt="marketing hub icon" style={{ width: "20px", height: "20px", marginRight: 5 }} />
                                Marketing Hub
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='port-ss-img'>
                <img src={CanidiumPortfolio} alt=" " />
            </div>

            <div class="port-website">
                <a class="port-website-link" href="https://www.canidium.com"  style={{ display: 'flex', justifyContent: 'center' }}>
                    <IconContext.Provider value={{ color: "#fff", size: '1.4em', }}>
                        <div style={{ marginRight: 6 }}>
                            <MdOutlineLaptopWindows />
                        </div>
                    </IconContext.Provider>
                    View Website</a>
            </div>


            <div class="port-results-block">

                <div class="port-results">
                    <h2>The Results</h2>
                    <p>The collaboration between Canidium and Hypha HubSpot Development led to substantial improvements across its digital presence:</p>
                    <ul>
                        <li><strong>Comprehensive Website Overhaul on HubSpot CMS</strong>: The website underwent a total transformation, adopting a modern, accessible design. Dark-themed modules now emphasize Canidium’s brand colors, and a partial circle added to the logo introduces a dynamic element suggestive of progress and motion. The redesign included mega menus and sticky menus to simplify navigation, and custom modules were tailored to fit diverse content needs.</li>
                        <li><strong>Revamped Content Strategy</strong>: Following extensive Storybrand sessions, all web copy across more than 25 new site pages was written to be punchier, with a customer-first spin, moving away from dense, jargon-filled text that only confused potential customers. The new content strategy better communicates Canidium's value propositions, making it more relatable and easier for clients to understand how Canidium can help them achieve their business goals.</li>
                        <li><strong>Improved User Experience &amp; Accessibility</strong>: With the HubSpot CMS, the site now features improved readability, streamlined content management, robust security measures, and superior mobile responsiveness. These upgrades help Canidium adhere to ADA compliance while providing an intuitive, accessible user experience for all visitors.</li>
                        <li><strong>Operational &amp; Administrative Improvements</strong>: The flexibility of HubSpot CMS facilitates easier updates and maintenance by Canidium’s administrative team, ensuring its site&nbsp; evolves alongside its growth.</li>
                    </ul>
                    <p>Through a strategic redesign and rebranding, Hypha HubSpot Development has successfully transformed Canidium’s website into a dynamic, accessible, and influential resource that effectively communicates the firm’s expertise and services. This partnership sets a new standard for Canidium’s digital engagement and supports its leadership in the sales performance management industry.</p>
                </div>

            </div>

            <div class="port-quote">
                <div class="quote">
                    <blockquote style={{ margin: "0 0 1.4rem !important" }}>"As a technical services company with a complicated network of partners and industry dynamics, we were looking for an agency that could make sense of our largely broken and illogical website, redesign it, and create intuitive user pathways. Hypha knocked it out of the park. Some things we love about working with Hypha: Their project management is impeccable. Their communication is consistent, simple, and effective. Design always exceeded expectations. They acted as the owners of the project rather than relying heavily on our team to keep it organized. And they're fun guys! The project was completed on time and on budget, and achieved the intended goal. Can't ask for much more. We would enthusiastically recommend Dillon, JP, Jeff, and the whole Hypha team to any company looking for web design services."</blockquote>
                    <footer>
                        <span style={{ color: "#959595", marginLeft: 30 }}>Lizzy Wolff, Canidium Content Manager</span>
                    </footer>
                </div>
            </div>
            <div class="port-other-work">
                <h2 style={{textAlign: "center", marginBottom: "40px"}}>View our other work</h2>
                <div class="port-grid">


                    <a style={{textDecoration: "none", color: "#000"}}  href="/portfolio/sunair">
                        <img src="https://www.hyphadev.io/hubfs/portfolio/thumbnail-from-sunair-co-website.jpg" alt="thumbnail from Sunair website" />
                        <p>Sunair</p>
                    </a>



                    <a style={{textDecoration: "none", color: "#000"}}  href="/portfolio/oliver">
                        <img src="https://www.hyphadev.io/hubfs/portfolio/thumbnail-from-oliver-inc-website.jpg" alt="thumbnail from Oliver Inc. website" />
                        <p>Oliver Inc.</p>
                    </a>



                    <a style={{textDecoration: "none", color: "#000"}} href="/portfolio/pdq">
                        <img src="https://www.hyphadev.io/hubfs/portfolio/pdq-communications-thumbnail.jpg" alt="thumbnail from PDQ Communications website" />
                        <p>PDQ Communications</p>
                    </a>


                </div>

            </div>

            <ConsultationSection/>
        </>
    )
}

export default DetailObjective
