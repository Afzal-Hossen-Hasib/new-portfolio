import React from 'react';
import about from '../../image/pic/shape-5 (2).png'
import './About.css'

const About = () => {
    return (
        <div class="hero mb-20 bg-base-200 about-me">
        <div class="hero-content flex-col lg:flex-row">
          <img src={about} class="max-w-md rounded-lg" />
          <div className='ml-7'>
            <h1 class="text-5xl font-bold">About Me</h1>
            <p class="py-6">I enjoy taking complex problems and turning them into simple ones. I also love the logic and structure of coding and always strive to write efficient code whether it be HTML, CSS, or ReactJs. I'm a self-motivated and passionate web developer with a deep interest in JavaScript. Expert in developing Single-Page applications (SPA)using ReactJS. Have a good knowledge of ES6, Bootstrap and also comfortable with NodeJS, Material-UI, ExpressJS, and MongoDB.</p>
            <button class="btn resume-button">Know More</button>
          </div>
        </div>
      </div>
    );
};

export default About;