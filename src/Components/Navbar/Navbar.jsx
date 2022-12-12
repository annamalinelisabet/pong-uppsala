import './Navbar.css'
import React  from 'react'
import { Link } from 'react-router-dom'
import PongLogo from '../../Images/PongLogo.png'

const Navbar = () => {
    
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