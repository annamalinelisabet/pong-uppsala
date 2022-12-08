import { useEffect } from 'react'
import './Pongkasse.css'
import PongkasseImg from '../../Images/uppsala-pongkasse.png'
import { Link } from 'react-router-dom'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pongkasse = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='Pongkasse container'>
      <div className="pong-wrapper">
        <div className='img-div' data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
            <img src={PongkasseImg} alt="Pongkasse" />
        </div>
        <div className='vegan'>
          <small>FINNS SOM VEGANSK</small>
        </div>
      </div>
      <div className="text-div">
          <h1 className='header'>PONGKASSE</h1>
          <p>Pongkassen är den perfekta kassen för er som gillar enkelhet och vill njuta av en vällagad asiatisk mat hemma. <span>Pongkassen består av en kall tallrik, två varma tallrikar och två efterrätter för två personer.</span></p>
          <Link to='/pongkasse'><button className='btn btn-pong'>beställ hem idag</button></Link>
      </div>
    </div>
  )
}

export default Pongkasse