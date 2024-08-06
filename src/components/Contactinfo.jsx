import React from 'react'
import './Contactinfo.css'
function Contactinfo({ iconUrl, text1, text2 }) {
  return (
    <div className='contact-details-card'>
      <div className="icon">
        <img src={iconUrl} alt={text1} />
      </div>
      <p>{text1}</p>
      <a href="https://www.linkedin.com/in/abin-chandra-2a233b226/"> <p>{text2}</p></a>
    </div>
  )
}

export default Contactinfo