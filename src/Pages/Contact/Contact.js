import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../image/email/contact.png'

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
        <div>
            <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={contact} class="w-2/4 rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-3xl font-bold">Get In Touch Contact Me</h1>
      
      <form ref={form} onSubmit={sendEmail}>
      <div>
      <label class="label">
    <span class="label-text">Name</span>
    <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
  </label>
      </div>

      <div>
      <label class="label">
    <span class="label-text">Email</span>
    <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
  </label>
      </div>

      <div>
      <label class="label">
    <span class="label-text">Subject</span>
    <input type="text" name='subject' placeholder="Subject" class="input input-bordered w-full max-w-xs" />
  </label>
      </div>

      <div>
      <label class="label">
    <span class="label-text">Message</span>
    <textarea class="textarea textarea-bordered" name='message' placeholder="Your Message"></textarea>
  </label>
      </div>

      <button class="btn">Button</button>

      </form>

    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;