import Dither from './components/Dither.jsx'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Dither
        waveSpeed={0.05}
        waveFrequency={3.0}
        waveAmplitude={0.3}
        waveColor={[0, 0.4, 1]}
        colorNum={25}
        pixelSize={1}
        enableMouseInteraction={true}
        mouseRadius={0.1}
      />
    </div>
  )
}

export default App

