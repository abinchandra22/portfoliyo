import React, { useState } from 'react'
import './Skill.css'
import { SKILLS } from '../utils/data'
import Skillcards from './Skillcards'
import Skillinfocard from './Skillinfocard'
// import 'boxicons'
function Skill() {
  const [selectSkill, setSelectSkill] = useState(SKILLS[0])
  const handleSlectSkill = (data) => {
    setSelectSkill(data)
  }

  return (
    <section className='skills-container w-100 '>
      <h2 >Technical Proficiency</h2>

      <div className='skills-content mt-5 row '>
        <div className='skills col-lg-6 '>
          {SKILLS.map((item) => (
            <Skillcards
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectSkill.title === item.title}
              onClick={() => {
                handleSlectSkill(item)
              }}
            ></Skillcards>
          ))}
        </div>
        {/* <div className='col-lg-2 w-100'></div> */}

        <div className='skills-info col-lg-6 w-100'>
          <Skillinfocard
            heading={selectSkill.title}
            skills={selectSkill.skills}

          ></Skillinfocard>
        </div>
      </div>

    </section>
  )
}

export default Skill