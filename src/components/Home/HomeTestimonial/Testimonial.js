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
      <Carousel showArrows={true} >
                <div>
                    <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />

                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />

                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />

                    <p className="legend">Legend 4</p>
                </div>
                <div>
                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />

                    <p className="legend">Legend 5</p>
                </div>
                <div>
                <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />

                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
    </div>
  )
}

export default HomeTestimonial
