import React from 'react'
import "./results.css"
import Port1 from "../../../assets/images/thumbnail-website-1.webp"
import Port2 from "../../../assets/images/pdq-communications-thumbnail.webp"
import Port3 from "../../../assets/images/thumbnail-from-sunair-co-website.webp"

const HomeResults = () => {
  return (
    <div className='home-result-section'>
      <div className='result-head'>Results</div>
      <div className='result-desc'>How We’ve Helped Our Diverse Range of Clients Grow Organic Traffic, Convert Leads & Close Deals</div>
      <div className='result-cta'>Explore Our Portfolio</div>

      <div className='exp-port'>
        <div className='exp-port-left'>
          <img src={Port1} alt="" className='exp-left-img' />
          <div className='port-left-head'>Oliver Inc.</div>
          <div className='port-left-desc'>Through a combination of content reorganization, new blogs and pillars, and migrating to an SEO-optimized website, Oliver saw an immediate increase in search rankings and within the first year <i> more than quadrupled its monthly organic traffic.</i></div>
          <div className="linkWrap">
            <a href="/" className="link style-2">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">Read Case Study</span>
                  <span className="link-title2 title">Read Case Study</span>
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
        </div>
        <div className='exp-port-right'>
          <div>
          <img src={Port2} alt="" className='exp-right-img' />
          <div className='port-left-head'>PDQ Communications</div>
          <div className='port-left-desc'>We rebuilt PDQ's site to provide a more user-friendly experience, and leveraged that <i> new environment with informative and strategic content designed to target relevant keywords</i>—exponentially increasing site traffic and new contact conversions.</div>
          <div className="linkWrap">
            <a href="/" className="link style-2">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">Read Case Study</span>
                  <span className="link-title2 title">Read Case Study</span>
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
          </div>
          <div style={{marginTop:20}}>
          <img src={Port3} alt="" className='exp-right-img' />
          <div className='port-left-head'>Sunair Co.</div>
          <div className='port-left-desc'>We implemented a long-term, strategic content plan targeting key search terms, which <i>skyrocketed organic traffic and new contacts.</i></div>
          <div className="linkWrap">
            <a href="/" className="link style-2">
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">Read Case Study</span>
                  <span className="link-title2 title">Read Case Study</span>
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
</div>
        </div>
      </div>



    </div>
  )
}

export default HomeResults
