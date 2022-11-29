import React from 'react'
import { Route, Routes} from 'react-router-dom'
import CateringView from './Catering/CateringView'
import HomeView from './Home/HomeView'
import PongkasseView from './Pongkasse/PongkasseView'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <HomeView /> }/>
        <Route path='/catering' element={ <CateringView /> } />
        <Route path='pongkasse' element={ <PongkasseView /> } />
    </Routes>
  )
}

export default Views