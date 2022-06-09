import React from 'react';
import './Banner.css'
import mypic from '../../image/pic/9648-removebg.png'

const Banner = () => {

    return (
        <div className='mt-10 mb-20 banner-div'>
            <div class="hero bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={mypic} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='ml-7'>
      <h1 class="text-5xl font-bold"><span className='one'>Hi! I Am</span> <br /> <span className='two'>Afzal Hossen Hasib</span></h1>
      <p class="py-6">I'm a Bangladesh based front‑end developer focused on crafting clean and user‑friendly experiences, I am passionate about building excellent website that improves the lives of those around me.</p>
      <button class="btn resume-button">Download Resume</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;