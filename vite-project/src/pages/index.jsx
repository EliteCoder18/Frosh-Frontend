import Dither from '../components/Dither';

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Dither 
        waveColor={[0.2, 0.5, 0.8]}
        disableAnimation={false}
        enableMouseInteraction={false}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.2}
        waveFrequency={2}
        waveSpeed={0.03}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Welcome to Frosh</h1>
      </div>
    </div>
  );
}

