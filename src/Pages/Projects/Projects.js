import React from 'react';
import modern from '../../image/project/modern-moto.png'
import motor from '../../image/project/motor-mania.png'
import fitness from '../../image/project/fitness-friends.png'

const Projects = () => {
    return (
        <div>
            <h1 className='text-center'>My Projects</h1>
            <div class="hero bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={modern} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-2xl font-bold">MODERN MOTO (MANUFACTURER FULL-STACK WEBSITE)</h1>
      <p class="py-6">
          <ul>
            <li>Use Google And Email/Password Authentication System So A User And An Admin Must Log In First. The User And Admin Data Will be Save In The Database.</li>
            <li>After Login A User Can Purchase The Parts And Pay By Credit Card. User Can See Their Purchase History And Give Reviews. </li>
            <li>Admin Can See All Users’ Purchase History And Add Another Email As An Admin. An Admin Also Can Manage (Add, Delete) The Parts.</li>
          </ul>
          </p>
      <div>
      <a href="https://modern-motor.web.app/" target='_blank'>
      <button class="btn btn-sm">Live Site</button>
      </a>
      <a className='mx-5' href="https://github.com/afzahossenhasib/Nine_Modern_Moto_Client" target='_blank'>
      <button class="btn btn-sm">Client</button>
      </a>
      <a href="https://github.com/afzahossenhasib/Nine_Modern_Moto_Server" target='_blank'>
      <button class="btn btn-sm">Server</button>
      </a>
      </div>
    </div>
  </div>
</div>

<div class="hero bg-base-200 my-20">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={motor} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-2xl font-bold">MOTOR MANIA (WAREHOUSE-MANAGEMENT FULL-STACK WEBSITE )</h1>
      <p class="py-6">
          <ul>
            <li>Motor Mania Is A Fully Responsive Website Where Bike Riding Accessories Are Available.</li>
            <li>Use Google, GitHub, And Email/Password Authentication System So A User Must log in First</li>
            <li>After Login A User Can Add Products, Delete, And Update Products.</li>
          </ul></p>
      <a href="https://motor-mania-65f3c.web.app/">
      <button class="btn btn-sm">Live Site</button>
      </a>
      <a className='mx-5'  href="https://github.com/afzahossenhasib/Eight_Motor_Mania_Client" target='_blank'>
      <button class="btn btn-sm">Client</button>
      </a>
      <a href="https://github.com/afzahossenhasib/Eight_Motor_Mania_Server" target='_blank'>
      <button class="btn btn-sm">Server</button>
      </a>
    </div>
  </div>
</div>

<div class="hero bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={fitness} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-2xl font-bold">FITNESS FRIENDS (INDEPENDENT SERVICE PROVIDER FRONT-END WEBSITE)</h1>
      <p class="py-6">
          <ul>
            <li>It’s A User-Friendly Website Where Gym Training Services Are Available. </li>
            <li> Use Google, GitHub, And Email/Password Authentication System So A User Must log in First. </li>
            <li>After Login A User Can Purchase The Training Services.</li>
          </ul>
          </p>
      <div>
      <a className='mr-5' href="https://gym-trainer-871db.web.app/" target='_blank'>
      <button class="btn btn-sm">Live Site</button>
      </a>
      <a href="https://github.com/afzahossenhasib/Seven_Gym_Trainer" target='_blank'>
      <button class="btn btn-sm">Client</button>
      </a>
      </div>
    </div>
  </div>
</div>
<button class="btn btn-secondary">See More..</button>
        </div>
    );
};

export default Projects;