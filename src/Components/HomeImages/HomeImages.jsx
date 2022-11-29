import { useState, useEffect } from 'react'
import './HomeImages.css'
import { motion } from 'framer-motion'
import PongBar from '../../Images/pongbar.png'
import Miljo1 from '../../Images/uppsala-miljo-3-lr.jpg'

const HomeImages = () => {

  const [first, setFirst] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setFirst(state => !state)
    }, 5000)
    return (() => clearTimeout(timer))
  }, [first])

  return (
    <div className='HomeImages'>
        <div className="line-div">
            <div className='line'></div>
            <div className='white-line'></div>
            <div className='line'></div>
        </div>
        <div className="img-div">
            { first ? <motion.img src={PongBar} alt="Pong Uppsala Bar" /> : <motion.img src={Miljo1} alt="Pong Uppsala Interior" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}}/>}
        </div>
        <div className="line-div">
            <div className='line'></div>
            <div className='white-line'></div>
            <div className='line'></div>
        </div>        
    </div>
  )
}

export default HomeImages