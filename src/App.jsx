import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Services from './components/Services'

function App() {

  return (
    <div className='w-screen min-h-screen text-white'>
      <Navbar/>
      <Welcome/>
      <Services/>
    </div>
  )
}

export default App
