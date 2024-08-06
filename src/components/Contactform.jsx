// import React from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import './Contactform.css'
function Contactform() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vdaxwns', 'template_ddu5fsr', form.current, {
        publicKey: 'u1IpkjbUvchu3ekgW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email sent successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Email not sent ")

        },
      );
  };
  return (
    <div className='contact-form-content'>

      <form ref={form} onSubmit={sendEmail}>
        {/* <div className="name-container"> */}
        <input type="text" name='user_name' placeholder='Name' />
        {/* </div> */}
        <input type="text" name='user_email' placeholder='Email' />
        <textarea type='text' name='message' placeholder='Message' rows={3}></textarea>

        <button type="submit" value="Send">SEND</button>
      </form>

    </div>
  )
}

export default Contactform