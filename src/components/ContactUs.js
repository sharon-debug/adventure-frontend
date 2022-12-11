import React, { useRef } from 'react'
import "./ContactUs.css"
//import map_image from "../img/map.png"

function ContactUs() {
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  return (
    <div>
    <h1 id='us'>Contact Us</h1>
    <div className='topsection'>
      <div className='row'>
        <h2>Help</h2>
        <br />
        <p>
          You can always get in touch with us. Our support team is always
          24hrs on the line. Reach us by chat or make a call for any urgent
          service
        </p>
      </div>
      <div className='row'>
        <h2>Feedback</h2>
        <br />
        <p>
          We value our customer's feedbak. do not hesutate toleave us a
          comment on our services. We're glad to hear from you
        </p>
      </div>
      <div className='row'>
        <h2>Address</h2>
        <br />
        <p>
          We are located along TwoMbili Street, at PikiByke Plaza, Nairobi
          Kenya.You can also check our websites to find our offices next to
          you
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Nairobi</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> nairobi@adventure.com
        </p>
      </div>
      <div>
        <h3>Mombasa</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> mombasa@adventure.com
        </p>
      </div>
      <div>
        <h3>Kisumu</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kisumu@adventure.com
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Kiambu</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kiambu@adventure.com
        </p>
      </div>
      <div>
        <h3>Taita Taveta</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> taita@adventure.com
        </p>
      </div>
      <div>
        <h3>Kajiado</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kajiado@adventure.com
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Nakuru</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> nakuru@adventure.com
        </p>
      </div>
      <div />
      <div />
    </div>
  </div>
        
  )
}

export default ContactUs;