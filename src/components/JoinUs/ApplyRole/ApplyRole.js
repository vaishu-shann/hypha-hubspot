import React from 'react'
import "./applyRole.css"

const ApplyRole = () => {
    return (
        <div className='apply-sec'>
            <div className='apply-sec-head'>Apply for a Role at Hypha HubSpot Development</div>
            <div className='apply-sec-desc'>Complete the form below and tell us about yourself and what position interests you.<br /><br />Don't see an open role that's right for you? Please feel free to select 'Other' and apply anyway so we can keep your information on file. We can't wait to meet you!</div>


            <div style={{ marginTop: 60 }}>
                <div className='label'>First Name<span style={{ color: 'red' }}>*</span></div>
                <input className='apply-form' type='text' />
                <div className='label'>Last Name<span style={{ color: 'red' }}>*</span></div>
                <input className='apply-form' type='text' />
                <div className='label'>Email<span style={{ color: 'red' }}>*</span></div>
                <input className='apply-form' type='text' />
                <div className='label'>Tell us about yourself</div>
                <input className='apply-form' type='text' />
                <div className='label'>Applying for<span style={{ color: 'red' }}>*</span></div>
                <input type="radio" id="html" name="fav_language" value="Frontend" style={{ marginTop: 15, cursor: 'pointer' }} />
                <label for="html">Front-end Developer</label><br />
                <input type="radio" id="css" name="fav_language" value="Other" style={{ marginTop: 20, cursor: 'pointer' }} />
                <label for="css">Other</label><br />
                <div className='label' style={{ marginTop: 30 }}>Upload your Resume<span style={{ color: 'red' }}>*</span></div>
                <input type="file" id="myFile" name="filename" />
                <div className='label' style={{ marginTop: 30, marginBottom: 0 }}>Portfolio Link</div>
                <div className='label-desc'>Have a portfolio showcasing your best work? Please paste the link here.</div>

                <input className='apply-form' type='text' />
             
            <div  className="submit-btn">Submit</div>
      
            </div>

        </div>
    )
}

export default ApplyRole
