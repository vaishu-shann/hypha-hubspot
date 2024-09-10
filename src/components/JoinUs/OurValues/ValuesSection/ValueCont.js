import React from 'react'
import "./value.css"


const valueFeed = [
    {id:1, title:"Empathy",desc:"We recognize the feelings, perspectives, and experiences of others and do our best to understand and support them. We treat each other as we'd want to be treated, with compassion, consideration, and professionalism."},
    {id:2, title:"A11y",desc:"We champion accessibility and promote an open and accessible web that incorporates inclusive design and content practices to help ensure products, services, and opportunities are available to all."},
    {id:3, title:"Teamwork",desc:"Together, we can move mountains. Together, we can pull down stars. Together, we can achieve greatness. Together, there is no limit. Together, we will change the world."},
    {id:4, title:"Inclusion",desc:"We celebrate diversity, embrace differences, and strive to create an environment of mutual respect and appreciation for those of all backgrounds."},
    {id:5, title:"Accountability",desc:"We take great pride in our work and share personal responsibility for our collective duties and accomplishments. We trust each other and derive strength and confidence in knowing we've got each other's backs—while owning our individual successes and failures."},
    {id:6, title:"Kindness",desc:"This is something far too often overlooked, ignored, or flat-out abandoned within company cultures, yet perhaps the most important value of them all. It's really quite simple: Be kind."}
]


const ValueCont = () => {
  return (
    <div className='value-container'>
      <div className='value-cont-head'>Our Values</div>
      <div className='value-cards'>
      {valueFeed?.map((item,index)=>{
        return(
<>
                   <div className='single-value-card'>
            <div className='value-card-head'>{item.title}</div>
            <div className='value-card-desc'>{item.desc}</div>
        </div>
                </>
        )
      })}
      
      </div>
    </div>
  ) 
}

export default ValueCont
