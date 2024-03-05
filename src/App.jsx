import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Services from './components/Services'
import GenshinServices from './components/services/GenshinServices'

function App() {

  return (
    <div className='max-w-screen min-h-screen text-white'>
      <Navbar/>
      <Welcome/>
      <Services/>
      <GenshinServices/>
    </div>
  )
}

export default App
