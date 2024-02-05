import './contact.css'
import { SiMinutemailer } from "react-icons/si";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_82ilzbl', 'template_pz5g06b', form.current, 'HWBPy5vn5h3OjPi8M')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h2 className='text-dark'>Contact Me!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiMinutemailer  className="contact__option-icon"/>
            <h4 className="text-dark">Email</h4>
            <h5>kaleigh.garcia0928@gmail.com</h5>
            <a href="mailto:kaleigh.garcia0928@gmail.com">Send a message!</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea type="message" name='message' rows='5' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact