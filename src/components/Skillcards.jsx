import React from 'react'
import './Skillcards.css'
function Skillcards({ title, iconUrl, isActive, onClick }) {
  return (
    <div className={`skill-card ${isActive ? "active" : ""} `}
      onClick={() => onClick()}
    >
      <div className='skill-icon' >
        <img src={iconUrl} alt={title} style={{ height: '3.5rem', width: '3.5rem' }} />
      </div>

      <span>{title}</span>

    </div>
  )
}

export default Skillcards