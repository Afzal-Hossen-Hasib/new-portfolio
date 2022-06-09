import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../image/email/contact.png'
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_h5qf96d', 'template_4t2g012', form.current, 'NbUhiOvOlqbpAl_4U')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
 

    return (
        <div className='mb-20 contact'>
            <div class="hero bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={contact} class="w-3/6 rounded-lg shadow-2xl" />
    <div className='ml-8'>
      <h1 class="text-3xl font-bold">Get In Touch Contact Me</h1>
      
      <form ref={form} onSubmit={sendEmail}>
      <div>
      <label class="label">
    <span class="label-text mr-5">Name: </span>
    <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
  </label>
      </div>

      <div>
      <label class="label">
    <span class="label-text mr-5">Email:</span>
    <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
  </label>
      </div>

      <div>
      <label class="label">
    <span class="label-text mr-5">Subject:</span>
    <input type="text" name='subject' placeholder="Subject" class="input input-bordered w-full max-w-xs" />
  </label>
      </div>

      <div>
      <label class="label">
    <span class="label-text">Message:</span>
    <textarea name="message" id="" cols="30" rows="3"></textarea>
  </label>
      </div>

      <button class="btn resume-button">Send Message</button>

      </form>

    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;