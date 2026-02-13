import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Navebar from './Components/Navebar'
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-hidden'>
      <Hero />
      <Navebar />
      <About />
    </main>
  )
}

export default App
