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
                        <li className='dropdown'>
                            <Link className='link'>Menyer</Link>
                            <div className='dropdown-content'>
                                <li><Link to="/" className='dropdown-link '>Lunch</Link></li>
                                <li><Link to="/" className='dropdown-link '>Middag</Link></li>
                                <li><Link to="/" className='dropdown-link '>Brunch</Link></li>
                                <li><Link to="/" className='dropdown-link '>Pongkasse</Link></li>
                                <li><Link to="/" className='dropdown-link '>Dryck</Link></li>
                            </div>
                        </li>

                        <li className='dropdown'>
                            <Link className='link'>Beställ Online</Link>
                            <div className='dropdown-content'>
                                <li><Link to="/" className='dropdown-link '>Take Away</Link></li>
                                <li><Link to="/" className='dropdown-link '>Hemlevernas</Link></li>
                                <li><Link to="/" className='dropdown-link '>Vår app</Link></li>
                            </div>
                        </li>
                        <li className='dropdown'>
                            <Link className='link'>BOKA</Link>
                            <div className='dropdown-content'>
                                <li><Link to="/" className='dropdown-link '>Boka bord</Link></li>
                                <li><Link to="/" className='dropdown-link '>Catering</Link></li>
                                <li><Link to="/" className='dropdown-link '>Eget rum</Link></li>
                                <li><Link to="/" className='dropdown-link '>Konferens</Link></li>
                            </div>
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