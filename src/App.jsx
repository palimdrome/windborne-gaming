import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'

function App() {

  return (
    <div className='w-screen min-h-screen text-white'>
      <Navbar/>
      <Welcome/>
    </div>
  )
}

export default App
