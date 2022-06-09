import React from 'react';
import './Navbar.css'
import hasib from '../../image/pic/shape-5 (2).png'

const Navbar = () => {
    return (
        <div class="px-36 navbar bg-base-100 header-section">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     
      <li><a href="#about">About</a></li>
        
      <li><a href="#project">Projects</a></li>
      
      </ul>
    </div>
    <img className='w-12' src={hasib} alt="" />
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
   
      <li><a href="#about">About</a></li>
      
      <li><a href="#project">Projects</a></li>
      
    </ul>
  </div>
  <div class="navbar-end">
    <a href="#contact"><button class="btn btn-sm resume-button">Contact Me</button></a>
  </div>
</div>
    );
};

export default Navbar;