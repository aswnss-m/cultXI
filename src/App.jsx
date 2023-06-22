import { useState } from 'react'
import './App.css'
import Home from './component/Home/Home'
import Event from './component/Event/Event'
import { Routes,Route } from 'react-router-dom'
import Sponsers from './component/Sponsers/Sponsers'
import Music from './component/Music/Music'
import Footer from './component/Footer/Footer'
<<<<<<< HEAD
import Schedule from './component/Schedule/Schedule'
=======
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746

function App() {

  return (
    <div className='mainApp'>
      <Music />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events/*' element={<Event />} />
        <Route path = '/sponsers' element= {<Sponsers/>}/> 
<<<<<<< HEAD
        <Route path = '/schedule*' element= {<Schedule/>}/> 
      </Routes>
=======
      </Routes>
      {/* <Footer /> */}
>>>>>>> a9b187b84f5550b1ed11bba15359a8e605f50746
    </div>

  )
}

export default App
