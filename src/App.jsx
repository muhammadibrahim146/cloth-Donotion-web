import { useState } from 'react'

//import './App.css'
import Hero from './components/Hero'
import Donotprofil from './components/Donotprofil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Hero/>
     <Donotprofil/>
    </>
  )
}

export default App
