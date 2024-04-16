import './Footer.css';
import { gfurniturelogo } from '../index';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerTexts'>
            <div className='subscriptions'>
                <img className='footerLogoImg' src={gfurniturelogo} alt="" />
                <p>Join our newsletter to stay up to date on features and releases.</p>
                <form action="">
                    <input placeholder='Enter Your Email' type="email" />
                    <button>Subscribe</button>
                </form>
                <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
            </div>
            <div className='footer-navs'>
                <div>
                    <h4>About Us</h4>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Returns</p>
                    <p>Blog</p>
                    <p>Shipping</p>
                </div>
                <div>
                    <h4>Customer Support</h4>
                    <p>Affiliates</p>
                    <p>Payments</p>
                    <p>Returns</p>
                    <p>Our Policies</p>
                    <p>Return Policies</p>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <p><FaFacebookF /> Facebook</p>
                    <p><FaTwitter /> Twitter</p>
                    <p><FaInstagram /> Instagram</p>
                    <p><FaLinkedin /> Linkedin</p>
                    <p><FaPinterest /> Pinterest</p>
                </div>
            </div>
        </div>
        <div className='copyrights'>
            <p>&copy; 2023 GFirnuture. All rights reserved.</p>
            <div>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;