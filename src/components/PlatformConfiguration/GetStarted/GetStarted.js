import React from 'react'
import "./getStarted.css"

const GetStarted = () => {
    return (
        <div className='get-started-sec'>
            <div className='get-started-head'>Let's get started.  </div>
            <div className='get-started-desc'>Contact us today to begin scaling your operation, driving sales and service efficiencies, improving your marketing efforts, and making the most of your HubSpot investment.</div>

            <div className='g-s-contact'>Contact Us Today</div>

            <div className='g-s-flex'>
                <div style={{ width: "100%" }}>
                    <div className='label' style={{ marginBottom: 4 }}>First Name<span style={{ color: 'red' }}>*</span></div>
                    <input className='g-s-form' type='text' />
                </div>
                <div style={{ width: "100%" }}>
                    <div className='label' style={{ marginBottom: 4 }}>Last Name</div>
                    <input className='g-s-form' type='text' />
                </div>
            </div>
            <div className='g-s-flex'>
                <div style={{ width: "100%" }}>
                    <div className='label' style={{ marginBottom: 4 }}>Email<span style={{ color: 'red' }}>*</span></div>
                    <input className='g-s-form' type='text' />
                </div>
                <div style={{ width: "100%" }}>
                    <div className='label' style={{ marginBottom: 4 }}>Phone Number</div>
                    <input className='g-s-form' type='text' />
                </div>
            </div>
            <div className='g-s-flex'>
                <div style={{ width: "100%" }}>
                    <div className='label' style={{ marginBottom: 4 }}>How would you describe yourself?</div>
                    <select className='g-s-form-select' style={{cursor:'pointer'}}>
                        <option>Please select </option>
                        <option>Business Owner / C-Suite </option>
                        <option>Director / Manager </option>
                        <option>Marketer /  Writer </option>
                        <option>Designer / Developer</option>
                        <option>Sales / Support </option>
                        <option>Other </option>
                    </select>
                </div>
                <div style={{ width: "100%" }} >
                    <div className='label' style={{ marginBottom: 4 }}>Are you currently using HubSpot?</div>
                    <select className='g-s-form-select' style={{cursor:'pointer'}}>
                        <option>Please select </option>
                        <option>Using HubSpot </option>
                        <option>Interested in using HubSpot </option>
                        <option>Unfamiliar with HubSpot </option>
                        <option>a HubSpot Solutions Partner</option>
                    </select>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <div className='label' style={{ marginBottom: 4 }}>Company Name</div>
                <input className='g-s-form-2' type='text' />
            </div>
            <div style={{ width: "100%", marginTop: 30 , marginBottom:40}}>
                <div className='label' style={{ marginBottom: 4 }}>Message<span style={{ color: 'red' }}>*</span></div>
                <input className='g-s-form-2' type='text' style={{ height: 50 }} />
            </div>
            <div  className="submit-btn">Submit</div>
        </div>
    )
}

export default GetStarted
