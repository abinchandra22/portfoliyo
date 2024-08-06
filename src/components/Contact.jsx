import React from 'react'
import './Contact.css'
import Contactinfo from './Contactinfo'
import mail from '../assets/mail.gif'
import linkedin from '../assets/linkedin.gif'
import Contactform from './Contactform'

function Contact() {
  return (
    <section className='contact-container'>
      <h5 className='contact-ani'>Contact Me </h5>

      <div className='contact-content'>
        <div className='contact-ani' style={{ flex: 1 }}>
          <Contactinfo
            iconUrl={mail}
            text1='abinchandra191@gmail.com'></Contactinfo>

          <Contactinfo
            iconUrl={linkedin}
            text2='Abin Chandra'></Contactinfo>


        </div>
        <div className='form-ani' style={{ flex: 1 }}>
          <Contactform></Contactform>
        </div>

      </div>
    </section>
  )
}

export default Contact