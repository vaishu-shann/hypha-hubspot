import React from 'react'
import "./detailHome.css"
import Detailbanner from "../../../assets/images/canidium-portfolio-feature.png"

const DetailHome = () => {
  return (
    <>
      <div className='d-home-banner'>
        <div className='d-home-cont'>
          <div className='d-home-head'>Sun Life - Insurance Application</div>
          <div className='d-home-desc'>Overview of Sun Life:
Sun Life is a prominent financial services organization serving millions of clients across Canada, the U.S., Asia, the U.K., and other regions. With a strong commitment to helping clients navigate life's important moments, Sun Life offers a comprehensive suite of protection and wealth products and services. Their offerings include:

Insurance Products: Life, health, wellness, disability, critical illness, stop-loss, and long-term care insurance.

Investment Solutions: Mutual funds, segregated funds, annuities, and guaranteed investment products.

Advisory Services: Financial and retirement planning services tailored to individual and business needs.

Asset Management: Pooled funds, institutional portfolios, and pension funds.

Commitment to Wellness:
Beyond financial services, Sun Life is dedicated to promoting health and wellness within communities through initiatives such as:

Team Up Against Diabetes: A significant investment supporting diabetes awareness, prevention, care, and research globally.

Health-Screening Clinics: Programs to facilitate early detection and management of health conditions.

Workplace Peer-Support Programs: Initiatives to foster supportive environments in workplaces.

Disease-Prevention Programs: Strategies aimed at promoting healthy living and preventing illness.</div>
        </div>
      </div>
      <div className='port-fit-img'>
        <img src={Detailbanner} alt="" className='d-home-img' />
        <div className='port-stat'>
          <div class="port-date">
            <h3 class="heading5">Launch Date</h3>
            June 24, 2024
          </div>
          <div class="port-status">
            <h3 class="heading5">Status</h3>
            <div style={{display:'flex',flexDirection:'row', alignItems:'centers'}}>
              <span className='online-green'></span>
              <div>Implementation</div>
            </div>
          </div>

        </div>
        <hr style={{margin: "60px auto",maxWidth: "100%",width: "1400px"}}></hr>

      </div>
    </>
  )
}

export default DetailHome;
