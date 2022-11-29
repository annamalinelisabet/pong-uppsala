import React from 'react'
import './Gastrogate.css'
import GastrogateLogo from '../../Images/gastrogate-logo.png'

const Gastrogate = () => {
  return (
    <div className='Gastrogate'>
        <div className="img-div">
            <img src={GastrogateLogo} alt="Gastrogate Logo" />
        </div>
    </div>
  )
}

export default Gastrogate