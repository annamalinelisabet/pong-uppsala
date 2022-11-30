import React from 'react'
import Catering from '../../Components/Catering/Catering'
import HomeImages from '../../Components/HomeImages/HomeImages'
import Pongkasse from '../../Components/Pongkasse/Pongkasse'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar/Navbar'
import './HomeView.css'

const HomeView = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Pongkasse />
        <Catering />
        <HomeImages />
    </div>
  )
}

export default HomeView