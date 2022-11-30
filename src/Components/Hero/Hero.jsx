import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import hero from '../../Images/hero.png'
import shipping from '../../Images/shipping.png'
import takeaway from '../../Images/take-away.png'

const Hero = () => {
  return (
    <div className='Hero'>

    <div className='hero-wrapper'>

      <div className='black'>
              <Link to="/">
                <div className='flip-card-takeaway'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front'>
                    <img src={takeaway} alt="A bag with the text take away" className='takeaway-img' />
                    </div>
                    <div className='flip-card-back'>
                      <h1>Take Away</h1>
                      <p>Beställ din mat direk i appen eller på datorn. Hämtade sedan upp din mat i restaurangen</p>
                      <p className='small-txt'>Läs mer och beställ</p>
                    </div>
                  </div>
                </div>
              </Link>
      </div>

          <div className='img-wrapper'>
            <img src={hero} className="hero-img" alt="sushi on plate" />
              <Link to="/">
                <div className='flip-card-delivery'>
                  <div className='flip-card-inner'>
                    <div className='flip-card-front-delivery'>
                    <img src={shipping} alt="guy on a moped delivering food" className='homedelivery-img' />
                    </div>
                    <div className='flip-card-back-delivery txt-wrapper'>
                      <h1>Hemleverans</h1>
                      <p>Beställ din mat direk i appen eller på datorn och få den hemleverad.</p>
                      <p className='small-txt'>Läs mer och beställ</p>
                    </div>
                  </div>
                </div>
              </Link>
        </div>

        

      </div>

          <div className='bg-img'>
            <div className='info-wrapper container'>
                  <div className='text-wrapper'>
                    <p><span className='title'>Välkommen</span> till oss på Storgatan 27, intill centralstationen i Uppsala.<span className='mt-2'>Vardagar dukar vi upp vår populära asiatiska lunchbuffé och på kvällarna lyxar vi till den lite extra. Vi erbjuder också à la carte serverad vid bordet.</span></p>
                </div>

                <div className='line'></div>
                <div className='lg-text-wrapper'>
                  <h1 className='lg-title'>Välkommen</h1>
                  <div className='with'>
                    <p className='lg-text'>till oss på Storgatan 27, intill centralstationen i Uppsala.<span className='dblock'>Vardagar dukar vi upp vår populära asiatiska lunchbuffé och på kvällarna lyxar vi till den lite extra. Vi erbjuder också à la carte serverad vid bordet.</span></p>
                  </div>
                </div>

                <div className='btn-wrapper'>
                  <button className='btn btn-book-table'>Boka bord</button>
                  <button className='btn btn-order-online'>Beställ online</button>
                </div>
            </div>
          </div>
          <div className='black-second'></div>
    </div>
  )
}

export default Hero