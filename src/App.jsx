import { useState } from 'react'
import './App.css'
import Home from './component/Home/Home'
import Event from './component/Event/Event'
import { Routes,Route } from 'react-router-dom'
import Sponsers from './component/Sponsers/Sponsers'

function App() {

  return (
    <div className='mainApp'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events/*' element={<Event />} />
        <Route path = '/sponsers' element= {<Home/>}/> 
      </Routes>
    </div>

  )
}

export default App
