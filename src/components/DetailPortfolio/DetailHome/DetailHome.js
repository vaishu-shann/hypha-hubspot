import React from 'react'
import "./detailHome.css"
import Detailbanner from "../../../assets/images/canidium-portfolio-feature.png"

const DetailHome = () => {
  return (
    <>
      <div className='d-home-banner'>
        <div className='d-home-cont'>
          <div className='d-home-head'>Canidium</div>
          <div className='d-home-desc'>Canidium is a leading sales performance management firm dedicated to helping business leaders surpass their revenue goals through strategic consulting and technology solutions. Specializing in Sales Performance Management (SPM), Pricing, Configure Price Quote (CPQ), Sales Consulting, and Software Implementation and Setup, Canidium provides comprehensive services designed to optimize business performance. With decades of expertise, Canidium's solution architects and strategists are equipped to tackle complex challenges and drive success in competitive markets.</div>
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
