import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Services from './components/Services'
import GenshinServices from './components/services/GenshinServices'
import HonkaiStarRailServices from './components/services/HonkaiStarRailServices'
import Timeline from './components/about/Timeline'
import Teams from './components/teams/Teams'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {

  return (
    <div className='max-w-screen min-h-screen text-white font-jost'>
      <Navbar/>
      <Welcome/>
      <Services/>
      <GenshinServices/>
      <HonkaiStarRailServices/>
      <Timeline />
      <Teams />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
