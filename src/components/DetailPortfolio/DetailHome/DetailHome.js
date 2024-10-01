import React from 'react';
import "./detailHome.css";
import Detailbanner from "../../../assets/images/canidium-portfolio-feature.png";

const DetailHome = () => {
  return (
    <>
      <div className='d-home-banner'>
        <div className='d-home-cont'>
          <div className='d-home-head'>Sun Life - Insurance Application</div>
          <div className='d-home-desc'>
              <h3>Overview of Sun Life:</h3>
              <p>
                Sun Life is a prominent financial services organization serving millions of clients across Canada, the U.S., Asia, the U.K., and other regions. With a strong commitment to helping clients navigate life's important moments, Sun Life offers a comprehensive suite of protection and wealth products and services. Their offerings include:
              </p>
              <ul>
                <li><strong>Insurance Products:</strong> Life, health, wellness, disability, critical illness, stop-loss, and long-term care insurance.</li>
                <li><strong>Investment Solutions:</strong> Mutual funds, segregated funds, annuities, and guaranteed investment products.</li>
                <li><strong>Advisory Services:</strong> Financial and retirement planning services tailored to individual and business needs.</li>
                <li><strong>Asset Management:</strong> Pooled funds, institutional portfolios, and pension funds.</li>
              </ul>
              
              <h3>Commitment to Wellness:</h3>
              <p>Beyond financial services, Sun Life is dedicated to promoting health and wellness within communities through initiatives such as:</p>
              <ul>
                <li><strong>Team Up Against Diabetes:</strong> A significant investment supporting diabetes awareness, prevention, care, and research globally.</li>
                <li><strong>Health-Screening Clinics:</strong> Programs to facilitate early detection and management of health conditions.</li>
                <li><strong>Workplace Peer-Support Programs:</strong> Initiatives to foster supportive environments in workplaces.</li>
                <li><strong>Disease-Prevention Programs:</strong> Strategies aimed at promoting healthy living and preventing illness.</li>
              </ul>
          </div>

        </div>
        <div className='port-fit-img'>
          <img src={Detailbanner} alt="" className='d-home-img' />
          <div className='port-stat'>
            <div className="port-date">
              <h3 className="heading5">Launch Date</h3>
              June 24, 2024
            </div>
            <div className="port-status">
              <h3 className="heading5">Status</h3>
              <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
                <span className='online-green'></span>
                <div>Implementation</div>
              </div>
            </div>
          </div>
          <hr style={{margin: "60px auto",maxWidth: "100%",width: "1400px"}}></hr>
        </div>
      </div>
    </>
  )
}

export default DetailHome;
