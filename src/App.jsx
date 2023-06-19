import { useState } from 'react'
import './App.css'
import Home from './component/Home/Home'
import Event from './component/Event/Event'
import { Routes,Route } from 'react-router-dom'
import Sponsers from './component/Sponsers/Sponsers'
import Music from './component/Music/Music'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div className='mainApp'>
      <Music />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events/*' element={<Event />} />
        <Route path = '/sponsers' element= {<Sponsers/>}/> 
      </Routes>
      {/* <Footer /> */}
    </div>

  )
}

export default App
