import React from 'react';
import './Banner.css'
import mypic from '../../image/pic/LRM_EXPORT_20171219_183922.jpg'

const Banner = () => {

    return (
        <div className='mt-10 mb-20 banner-div'>
            <div class="hero bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={mypic} class="max-w-sm w-full" />
    <div className='ml-7'>
      <h1 class="text-5xl font-bold"><span className='one'>Hi! I Am</span> <br /> <span className='two'>Afzal Hossen Hasib</span></h1>
      <p class="py-6">I'm a Bangladesh based Junior Web Developer focused on crafting clean and user‑friendly experiences, I am passionate about building excellent website that improves the lives of those around me.</p>
      <a href="https://drive.google.com/uc?export=download&id=1OQuZUZxirHnBiMHDCmweVaHp9SiHH-Qb">

      <button class="btn resume-button shadow-lg shadow-cyan-500/50" download>Download Resume</button>
      </a>
      <a href="https://drive.google.com/file/d/1OQuZUZxirHnBiMHDCmweVaHp9SiHH-Qb/view" target='_blank'>
      
      <button class="ml-5 btn resume-button shadow-lg shadow-cyan-500/50" download>Preview Resume</button>
      </a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;