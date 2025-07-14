import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Particles from './components/Particles';

function App() {
  return(
   
<div className="App w-full h-screen bg-black">

<div className='w-full h-screen absolute'>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={2000}
    particleSpread={50}
    speed={0.3}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
</div>
  )
}

export default App
