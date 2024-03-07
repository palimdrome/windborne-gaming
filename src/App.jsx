import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Services from './components/Services'
import GenshinServices from './components/services/GenshinServices'
import HonkaiStarRailServices from './components/services/HonkaiStarRailServices'
import Timeline from './components/Timeline'
import Teams from './components/teams/Teams'

function App() {

  return (
    <div className='max-w-screen min-h-screen text-white'>
      <Navbar/>
      <Welcome/>
      <Services/>
      <GenshinServices/>
      <HonkaiStarRailServices/>
      <Timeline />
      <Teams />
    </div>
  )
}

export default App
