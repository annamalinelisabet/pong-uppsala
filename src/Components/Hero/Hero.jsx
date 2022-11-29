import React from 'react'
import './Hero.css'
import hero from '../../Images/hero.png'
import shipping from '../../Images/shipping.png'
import takeaway from '../../Images/take-away.png'

const Hero = () => {
  return (
    <div className='Hero'>


      <div className='hero-wrapper'>

      <div className='black'></div>
        <div className='circle-wrapper'>

          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='circle flip-card-front takeaway-circle'>
                <img src={takeaway} alt="A bag with the text take away" className='takeaway-img' />
              </div>
              <div className=' circle flip-card-back'>
                <h1>Take Away</h1>
                <p>Beställ din mat direk i appen eller på datorn.</p>
                <p> Hämtade sedan upp din mat i restaurangen</p>
              </div>
            </div>
          </div>


            <div className='circle home-delivery-circle'>
              <img src={shipping} alt="guy on a moped delivering food" className='homedelivery-img' />
            </div>
        </div>
        
        <div className='img-wrapper'>
            <img src={hero} className="hero-img" alt="sushi on plate" />
        </div>

      </div>

      <div className='bg-img info-wrapper'>
        <div className='container-small'>
          <div className='line'></div>
            <div className='text-wrapper'>
              <p><span className='title'>Välkommen</span> till oss på Storgatan 27, intill centralstationen i Uppsala. </p>
              <br />
              <p>Vardagar dukar vi upp vår populära asiatiska lunchbuffé och på kvällarna lyxar vi till den lite extra. Vi erbjuder också à la carte serverad vid bordet.</p>
          </div>
          <div className='btn-wrapper'>
            <button className='btn btn-book-table'>Boka bord</button>
            <button className='btn btn-order-online'>Beställ online</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero