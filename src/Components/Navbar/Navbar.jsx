import './Navbar.css'
import React  from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import PongLogo from '../../Images/PongLogo.png'
// import hero from '../../Images/hero.png'


const Navbar = () => {
    const navRef = useRef();
    const hideLogo = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    
  return (
        <div className='Navbar'>
            <Link to="/">
                <div className='logo-container' >
                    <img src={PongLogo} className='logo' alt="pong-logo" />
                </div>
            </Link>
        </div>
  )
}

export default Navbar