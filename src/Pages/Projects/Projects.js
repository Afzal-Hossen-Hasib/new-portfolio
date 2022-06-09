import React from 'react';
import modern from '../../image/project/modern-moto.png'
import motor from '../../image/project/motor-mania.png'
import fitness from '../../image/project/fitness-friends.png'
import panda from '../../image/project/panda.png'
import food from '../../image/project/food.png'
import wedding from '../../image/project/wedding.png'
import './Projects.css'

const Projects = () => {
    return (
        <div id='project' className='project-section'>
            <h2>My Projects</h2>
            <div class="hero bg-base-200 shadow-2xl card-one">
  <div class="hero-content flex-col lg:flex-row">
    <img src={modern} class="w-6/12 rounded-lg" />
    <div className='ml-8'>
      <h1 class="text-2xl font-bold">MODERN MOTO (MANUFACTURER FULL-STACK WEBSITE)</h1>
      <p class="pb-2 pt-2">
          <ul>
            <li>Use Google And Email/Password Authentication System So A User And An Admin Must Log In First. The User And Admin Data Will be Save In The Database.</li>
            <li>After Login A User Can Purchase The Parts And Pay By Credit Card (Stripe). User Can See Their Purchase History And Give Reviews. </li>
            <li>Admin Can See All Users’ Purchase History And Add Another Email As An Admin. An Admin Also Can Manage (Add, Delete) The Parts.</li>
          </ul>
          </p>
      <div>
      <a href="https://modern-motor.web.app/" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Live Site</button>
      </a>
      <a className='mx-5' href="https://github.com/afzahossenhasib/Nine_Modern_Moto_Client" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Client</button>
      </a>
      <a href="https://github.com/afzahossenhasib/Nine_Modern_Moto_Server" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Server</button>
      </a>
      </div>
    </div>
  </div>
</div>

<div class="hero bg-base-200 my-20 shadow-2xl card">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={motor} class="w-6/12 rounded-lg" />
    <div className='mr-8'>
      <h1 class="text-2xl font-bold">MOTOR MANIA (WAREHOUSE-MANAGEMENT FULL-STACK WEBSITE )</h1>
      <p class="pb-2 pt-2">
          <ul>
            <li>Motor Mania Is A Fully Responsive Website Where Bike Riding Accessories Are Available.</li>
            <li>Use Google, GitHub, And Email/Password Authentication System So A User Must log in First</li>
            <li>After Login A User Can Add Products, Delete, And Update Products.</li>
          </ul></p>
      <a href="https://motor-mania-65f3c.web.app/" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Live Site</button>
      </a>
      <a className='mx-5'  href="https://github.com/afzahossenhasib/Eight_Motor_Mania_Client" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Client</button>
      </a>
      <a href="https://github.com/afzahossenhasib/Eight_Motor_Mania_Server" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Server</button>
      </a>
    </div>
  </div>
</div>

<div class="hero bg-base-200 shadow-2xl card">
  <div class="hero-content flex-col lg:flex-row">
    <img src={fitness} class="w-6/12 rounded-lg" />
    <div className='ml-8'>
      <h1 class="text-2xl font-bold">FITNESS FRIENDS (INDEPENDENT SERVICE PROVIDER FRONT-END WEBSITE)</h1>
      <p class="pb-2 pt-2">
          <ul>
            <li>It’s A User-Friendly Website Where Gym Training Services Are Available. </li>
            <li> Use Google, GitHub, And Email/Password Authentication System So A User Must log in First. </li>
            <li>After Login A User Can Purchase The Training Services.</li>
          </ul>
          </p>
      <div>
      <a className='mr-5' href="https://gym-trainer-871db.web.app/" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Live Site</button>
      </a>
      <a href="https://github.com/afzahossenhasib/Seven_Gym_Trainer" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Client</button>
      </a>
      </div>
    </div>
  </div>
</div>

<div class="hero bg-base-200 my-20 shadow-2xl card">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={panda} class="w-6/12 rounded-lg" />
    <div className='mr-8'>
      <h1 class="text-2xl font-bold">PANDA E-COMMERCE WEBSITE</h1>
      <p class="pb-2 pt-2">
          <ul>
          <li>Simple Landing Page</li>
          </ul></p>
      <a href="https://afzahossenhasib.github.io/Panda-Final-Project/#slider" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Live Site</button>
      </a>
      <a className='mx-5'  href="https://github.com/afzahossenhasib/Panda-Final-Project" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Client</button>
      </a>
    </div>
  </div>
</div>

<div class="hero bg-base-200 shadow-2xl card">
  <div class="hero-content flex-col lg:flex-row">
    <img src={food} class="w-6/12 rounded-lg" />
    <div className='ml-8'>
      <h1 class="text-2xl font-bold">A Bite Of Yummy</h1>
      <p class="pb-2 pt-2">
          <ul>
            <li>Create A Dashboard Where Monthly Sell And Investment Are Available.</li>
            <li>Customer Review Ar Also Available</li>
          </ul>
          </p>
      <div>
      <a className='mr-5' href="https://a-bite-of-yummy.netlify.app/" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Live Site</button>
      </a>
      <a href="https://github.com/afzahossenhasib/Six_BiteOf_Yammy" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Client</button>
      </a>
      </div>
    </div>
  </div>
</div>

<div class="hero bg-base-200 my-20 shadow-2xl card">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={wedding} class="w-6/12 rounded-lg" />
    <div className='mr-8'>
      <h1 class="text-2xl font-bold">Bespoke Convention Center</h1>
      <p class="pb-2 pt-2">
          <ul>
            <li>Simple Landing Page</li>
          </ul></p>
      <a href="https://bespoke-convention-center.netlify.app/#" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Live Site</button>
      </a>
      <a className='mx-5'  href="https://github.com/afzahossenhasib/First_Convenstion_Center" target='_blank'>
      <button class="btn btn-sm resume-button shadow-lg shadow-cyan-500/50">Client</button>
      </a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Projects;