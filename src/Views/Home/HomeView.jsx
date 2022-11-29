import React from 'react'
import Catering from '../../Components/Catering/Catering'
import HomeImages from '../../Components/HomeImages/HomeImages'
import Pongkasse from '../../Components/Pongkasse/Pongkasse'
import './HomeView.css'

const HomeView = () => {
  return (
    <div>
        <Pongkasse />
        <Catering />
        <HomeImages />
    </div>
  )
}

export default HomeView