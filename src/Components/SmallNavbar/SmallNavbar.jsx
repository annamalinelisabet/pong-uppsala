import React from 'react'
import './SmallNavbar.css'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
import PongLogo from '../../Images/PongLogo.png'


const SmallNavbar = () => {
    const navRef = useRef();

    const [showDropdown, setShowDropdown] = useState(false)
    const [showOnlineDropdown, setShowOnlineDropdown] = useState(false)
    const [showBookDropdown, setShowBookDropdown] = useState(false)

    const showNavbar = () => {
        navRef.current.classList.add("responsive_nav")
    }
    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav")
    }
    
  return (
    <div className='SmallNavbar'>
        <div className='nav-wrapper'>
            <Link to="/">
                <div className={`logo-container ${ showNavbar ? 'indexLow' : ''}`}  >
                    <img src={PongLogo} className='logo' alt="pong-logo" />
                </div>
            </Link>

                <div className='emty-div'></div>
                        <div className='nav-links-container'>

                            <nav ref={navRef} className='nav-links'>
                                <li>
                                    <Link className='link home'>Hem</Link>
                                </li>
                                <li className='dropdown'>
                                    <Link className={`link ${showDropdown ? `linkActive` : ``}`} onClick={() => setShowDropdown(state => !state)}>Menyer</Link>
                                    <div className={`${showDropdown ? `showDropdown` : `dropdown-content`}`}>
                                        <li><Link to="/" className='dropdown-link '>Lunch</Link></li>
                                        <li><Link to="/" className='dropdown-link '>Middag</Link></li>
                                        <li><Link to="/" className='dropdown-link '>Brunch</Link></li>
                                        <li><Link to="/" className='dropdown-link '>Pongkasse</Link></li>
                                        <li><Link to="/" className='dropdown-link '>Dryck</Link></li>
                                    </div>
                                </li>

                                <li className='dropdown'>
                                    <Link className={`link ${showOnlineDropdown ? `linkActive` : ``}`} onClick={() => setShowOnlineDropdown(state => !state)}>Beställ Online</Link>
                                    <div className={showOnlineDropdown ? `showDropdown` : `dropdown-content`}>
                                        <li><Link to="/" className='dropdown-link '>Take Away</Link></li>
                                        <li><Link to="/" className='dropdown-link '>Hemlevernas</Link></li>
                                        <li><Link to="/" className='dropdown-link '>Vår app</Link></li>
                                    </div>
                                </li>
                                <li className='dropdown'>
                                    <Link className={`link ${showBookDropdown ? `linkActive` : ``}`} onClick={() => setShowBookDropdown(state => !state)}>BOKA</Link>
                                    <div className={showBookDropdown ? `showDropdown` : `dropdown-content`}>
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

export default SmallNavbar