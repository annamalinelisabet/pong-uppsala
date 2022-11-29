import React from 'react'
import './Catering.css'
import CateringImg from '../../Images/catering-pil-ho.png'
import { Link } from 'react-router-dom'

const Catering = () => {
  return (
    <div className='Catering'>
        <div className='container'>
            <div className="img-div">
                <img src={CateringImg} alt="Catering" />
            </div>
            <div className="text-div">
                <h3>NYHET!</h3>
                <p>Nu kan ni beställa catering från oss på Pong Uppsala till er fest, bröllop, familjemiddag – oavsett vad ser vi till att ordna med en alldeles egen Pong Buffé hemma hos er!</p>
                <Link className='link' to='/catering'>LÄS MER</Link>
            </div>
        </div>
    </div>
  )
}

export default Catering