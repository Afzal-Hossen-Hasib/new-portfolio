import React from 'react';
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
      <footer >
              <div>
                  <ul className='social-icon'>
                      <li> <a href="https://github.com/afzahossenhasib" target='_blank'><ion-icon name="logo-github"></ion-icon></a> </li>
                      <li> <a href="https://www.linkedin.com/in/afzal-hossen-hasib-ba159b241/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a> </li>
                  </ul>

                  <p> &#169; {year} || All Rights Reserved</p>
              </div> 
          </footer>
  );
};

export default Footer;