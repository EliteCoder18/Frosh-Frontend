import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dither from './components/Dither.jsx'

createRoot(document.getElementById('root')).render(
<>
    <App />
   <div style={{ width: '100vw', height: '100vh' }}>
      <Dither
        waveSpeed={0.03}
        waveFrequency={3.0}
        waveAmplitude={0.3}
        waveColor={[0.1, 0.2, 0.6]}
        colorNum={22}
        pixelSize={1}
        enableMouseInteraction={false}
        mouseRadius={0.3}
      />
    </div>
    </>
)
