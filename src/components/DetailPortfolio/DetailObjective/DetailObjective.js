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
                        <p>Challenges Encountered by Sun Life:</p>
                        
                        <ol>
                            <li><strong>Inefficient Client Management:</strong>:
                                Sun Life faced challenges in managing client interactions and service requests, leading to delays in response times and customer dissatisfaction. The existing systems lacked integration, making it difficult for advisors to access comprehensive client information..<br /><br /></li>
                            <li><strong>Data Silos:</strong>:
                                The organization struggled with data being scattered across multiple systems, hindering the ability to obtain a holistic view of client portfolios and engagement history. This made it challenging for advisors to provide personalized advice and services.<br /><br /></li>
                            <li><strong>Manual Processes:</strong>:
                                Many processes were manual and time-consuming, leading to potential errors and inefficiencies. This impacted the overall productivity of the teams and the speed at which they could respond to client needs.</li>
                        </ol>

                        <p>How We Helped Overcome These Challenges:</p>
                        
                        <ol>
                            <li><strong>Integrated Client Management System: </strong>:
                            We developed a Salesforce application that centralized client data and integrated various service channels. This allowed advisors to access all relevant client information in one place, reducing response times and improving service quality.<br /><br /></li>
                            <li><strong>Enhanced Data Visibility:</strong>:
                            The new application facilitated data consolidation, providing advisors with a comprehensive view of client portfolios and interactions. This enabled more informed decision-making and personalized service offerings, enhancing client satisfaction.<br /><br /></li>
                            <li><strong>Automated Workflows:</strong>:
                            By automating key processes, we reduced manual effort and minimized errors. This improved operational efficiency, allowing the team to focus on higher-value tasks such as client engagement and strategic planning.</li>
                        </ol> 

                        <h2>Challenges Encountered During Implementation</h2>
                          <ol>
                            <li><strong>User Adoption and Training:</strong>
                              <p><strong>Challenge:</strong> One of the significant hurdles was ensuring that Sun Life advisors and staff adopted the new Salesforce application. Some users were accustomed to legacy systems and hesitant to change their workflows.</p>
                              <p><strong>Solution:</strong> We conducted comprehensive training sessions and provided hands-on workshops tailored to different user groups. Additionally, we created user-friendly documentation and support materials to facilitate the transition. Regular feedback sessions were held to address concerns and adjust the application based on user input, ultimately leading to higher adoption rates.</p>
                            </li>
                            <br />
                            <li><strong>Data Migration and Integration:</strong>
                              <p><strong>Challenge:</strong> Migrating data from various existing systems into Salesforce was complex due to inconsistencies and the volume of data. Ensuring that all historical data was accurately transferred and integrated posed a significant risk to project timelines.</p>
                              <p><strong>Solution:</strong> A detailed data mapping strategy was developed, and we employed Salesforce Data Loader for the migration process. Rigorous data cleansing was performed prior to migration to ensure accuracy. Post-migration, we conducted thorough testing and validation to confirm that all data was correctly integrated, ensuring a smooth transition for users.</p>
                            </li>
                            <br />
                            <li><strong>Customization and Scalability Issues:</strong>
                              <p><strong>Challenge:</strong> During the implementation, we encountered challenges related to customizing the Salesforce application to meet specific business needs while also ensuring the solution was scalable for future growth.</p>
                              <p><strong>Solution:</strong> We engaged in iterative development, employing agile methodologies to refine custom features based on user feedback. By prioritizing essential functionalities and using modular design principles, we ensured that the application could be easily updated and expanded in response to changing business requirements.</p>
                            </li>
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
