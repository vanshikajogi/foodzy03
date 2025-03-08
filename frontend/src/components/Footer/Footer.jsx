// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil quis rem ratione, veniam impedit voluptatem? Officia ad id minima nemo, explicabo, provident velit sed nulla, hic voluptas nam adipisci!</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Private policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
            <li>+1-212-454-7850</li>
            <li>contact@Foodzy.com</li>    
            </ul>
            
        </div>
         </div>
      <hr />
      <p className='footer-copyright'> Copyright 2024 © Foodzy.com - All Reserved Rights. </p>
      
      </div>
      )
}

export default Footer
