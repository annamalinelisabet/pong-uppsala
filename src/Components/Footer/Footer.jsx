import React from 'react'
import './Footer.css'
import Logo from '../../Images/pong_uppsala_logo.png'
import {FaInstagram, FaFacebookF, FaTripadvisor } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-container">
            <div className="footer-left">
                <div className="img-div">
                    <img src={Logo} alt="Pong Uppsala Logo" />
                </div>
                <p className='subtitle'>Adress</p>
                <a className='link' href="https://www.google.com/maps/place/PONG+Uppsala/@59.8596955,17.6422592,17z/data=!3m2!4b1!5s0x465fcbf85215f6e5:0x9f070cb5107eed8e!4m5!3m4!1s0x465fcbf8545224e7:0x848745336b7208a3!8m2!3d59.8596929!4d17.6467439">Storgatan 27</a>
                <a className='link' href="https://www.google.com/maps/place/PONG+Uppsala/@59.8596955,17.6422592,17z/data=!3m2!4b1!5s0x465fcbf85215f6e5:0x9f070cb5107eed8e!4m5!3m4!1s0x465fcbf8545224e7:0x848745336b7208a3!8m2!3d59.8596929!4d17.6467439">753 31 Uppsala</a>
                <p className='subtitle'>Telefon</p>
                <p>018-10 28 28</p>
                <div className="social-links">
                    <div className='circle'><FaInstagram className='icon'/></div>
                    <div className='circle'><FaFacebookF className='icon'/></div>
                    <div className='circle'><FaTripadvisor className='icon'/></div>
                </div>                
            </div>
            <div className="footer-right">
                <h2>Öppettider</h2>
                <p className='subtitle'>Lunch</p>
                <div className='flex'>
                    <p>Vardagar</p>
                    <p>10.30 - 15.00</p>
                </div>
                <p className='subtitle'>Kväll</p>
                <div className='flex'>
                    <p>Måndag-Tisdag</p>
                    <p>17.00 - 22.00</p>
                </div>
                <div className='flex'>
                    <p>Onsdag-Fredag</p>
                    <p>17.00 - 23.00</p>
                </div>
                <p className='subtitle'>Helg</p>
                <div className='flex'>
                    <p>Lördag</p>
                    <p>11.00 - 23.00</p>
                </div>
                <div className='flex'>
                    <p>Söndag</p>
                    <p>11.00 - 22.00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer