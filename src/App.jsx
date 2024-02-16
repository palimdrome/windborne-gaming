import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='container w-screen min-h-screen'>
      <Navbar/>
    </div>
  )
}

export default App
