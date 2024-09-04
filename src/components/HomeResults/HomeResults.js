import React from 'react'
import "./results.css"
import Port1 from "../../assets/images/thumbnail-website-1.webp"
import Port2 from "../../assets/images/pdq-communications-thumbnail.webp"
import Port3 from "../../assets/images/thumbnail-from-sunair-co-website.webp"

const HomeResults = () => {
  return (
    <div className='home-result-section'>
      <div className='result-head'>Results</div>
      <div className='result-desc'>How We’ve Helped Our Diverse Range of Clients Grow Organic Traffic, Convert Leads & Close Deals</div>
      <div className="linkWrap">
        <a href="#" className="link style-2">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">Explore Portfolio</span>
              <span className="link-title2 title">Explore Portfolio</span>
            </div>
          </span>
          <div className="link-icon">
            <svg className="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <svg className="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </a>
      </div>

      <div className='exp-port'>
        <div className='exp-port-left'>
<img src={Port1} alt="" className='exp-left-img'/>
        </div>
        <div className='exp-port-right'>
<img src={Port3} alt="" className='exp-right-img'/>
          
          </div>
      </div>



    </div>
  )
}

export default HomeResults
