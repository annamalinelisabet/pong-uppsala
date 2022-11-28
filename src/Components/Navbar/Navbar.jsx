import './Navbar.css'
import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
 
import PongLogo from '../../Images/PongLogo.png'

const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav")
    }
  return (
    <div className='Navbar'>
        <div className='logo-container'>
            <img src={PongLogo} className='logo' alt="pong-logo" />
        </div>

        <div className='nav-wrapper'>
            <div className='emty-div'></div>
                <div className='nav-links-container'>

                    <nav ref={navRef} className='nav-links'>
                        <li>
                            <Link className='link'>Hem</Link>
                        </li>
                        <li>
                            <Link className='link'>Menyer</Link>
                        </li>
                        <li>
                            <Link className='link'>Beställ Online</Link>
                        </li>
                        <li>
                            <Link className='link'>BOKA</Link>
                        </li>
                        <button className='btn-container' onClick={hideNavbar}><FaTimes className='nav-btn nav-close-btn'/></button>
                    </nav>

                    <button className='btn-container' onClick={showNavbar}>
                        <FaBars className='nav-btn nav-open-btn'/>
                    </button>

                </div>
        </div>

    </div>
  )
}

export default Navbar