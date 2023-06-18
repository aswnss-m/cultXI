import { useState } from 'react'
import './App.css'
import Home from './component/Home/Home'
import Event from './component/Event/Event'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div className='mainApp'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Event />} />
        </Routes>
    </div>

  )
}

export default App
