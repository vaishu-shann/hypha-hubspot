import React from 'react'
import "./testimonial.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeTestimonial = () => {
    return (
        <div className='home-testimonial'>
            <div className='testimonial-head'>
                What Our Customers Are Saying
            </div>
            <Carousel 
                showArrows={false} 
                autoPlay 
                infiniteLoop 
                interval={6000}  // Set the wait time to 6 seconds (6000 ms)
                transitionTime={1800}  // Slowed down the transition time to 1.5 seconds (1500 ms)
                showStatus={false}  // Removed the "1 of 4" pagination
                swipeScrollTolerance={5}  // Increased sensitivity for swipe scrolling
                emulateTouch  // Enhanced swipe behavior
                stopOnHover={false}  // Ensure it doesn't stop on hover
            >
                <div>
                    <div className='carousel-testimonial'>
                        “I have had the pleasure of working with Hypha over the past 2 years and let me tell you...they do not disappoint! From rebranding to website design, content development and marketing plan development and execution, the team at Hypha goes above and beyond what is asked to deliver quality content. They’re communicative, knowledgeable and provide excellent service, always.”
                    </div>
                    <div className='auth-name'>– Chris T., Gravitee</div>
                </div>
                <div>
                    <div className='carousel-testimonial'>
                        “As the sole member of my org’s marketing team, I was a bit overwhelmed when confronted with our need to rebrand, build out a new CMS, and deploy a new website, but Hypha turned out to be exactly the creative team I needed to get the work done in a timely, effective, and professional manner. Very happy with our partnership and can't recommend them highly enough!”
                    </div>
                    <div className='auth-name'>– Chris T., Gravitee</div>
                </div>
                <div>
                    <div className='carousel-testimonial'>
                        “It’s truly rare to find an agency like Hypha. From first touch to project delivery, it's professionalism the entire way. They never miss a deadline and deliver exceptional quality. We had a fairly large and complex web project with tight deadlines, and needed an agency that could work in a flexible manner. Hypha adapted to our unique workflow requirements and went above and beyond in delivering what we needed, in addition to meeting our deadlines as promised.”
                    </div>
                    <div className='auth-name'>– Chris T., Gravitee</div>
                </div>
                <div>
                    <div className='carousel-testimonial'>
                        “We love working with Hypha! Whether it’s web page design or smoothing out the kinks in an email sequence, their creativity and acuity with problem-solving is matched only by their customer service.”
                    </div>
                    <div className='auth-name'>– Chris T., Gravitee</div>
                </div>
            </Carousel>
        </div>
    )
}

export default HomeTestimonial
