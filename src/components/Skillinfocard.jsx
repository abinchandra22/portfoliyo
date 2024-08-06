import React from 'react'
import './Skillinfocard.css'
function Skillinfocard({ heading, skills }) {
  return (
    <div className='skill-info-card'>
      <h5 className='text-danger'>{heading}</h5>
      {/* <h1 className='text-danger'>hiiiii</h1> */}

      <div className='skill-info-content'>
        {skills.map((item, index) => (
          < React.Fragment key={`skill_${index}`}>
            <div className='skill-info'>
              <p>{item.skill}</p>
              <p className='percentage'>{item.percentage}</p>
            </div>

            <div className='skill-progress-bg'>
              <div className="skill-progress" style={{ width: item.percentage }}>

              </div>
            </div>

          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default Skillinfocard