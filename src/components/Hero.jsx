import React from 'react'
import Particles from './Particles.jsx';
import Navbar from './Navbar.jsx';
import Aurora from './Aurora';
import LightRays from './LightRays';
import CollaborateButton from './CollaborateButton';


const Hero = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* <Navbar /> */}
      {/* <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={400}
        particleSpread={10}
        speed={0.4}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      /> */}
      <Aurora
        colorStops={["#3FB549", "#55C5AF", "#506479"]}
        blend={0.5}
        amplitude={1}
        speed={1}
      />


      {/* <LightRays
    raysOrigin="top-center"
    raysColor="#fff"
    raysSpeed={1.5}
    lightSpread={1}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.2}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  /> */}

      <div className="herotext absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] flex flex-col justify-center items-center mt-16">

        <div className="flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-[5rem] leading-[1.1] md:leading-[1] font-bold text-white mb-2 md:mb-4 tracking-tighter drop-shadow-lg text-center">
            Designing bold, user‑first
          </h1>

          <div className='flex flex-wrap justify-center items-center gap-2 md:gap-4'>
            <h1 className="text-5xl sm:text-7xl md:text-[5rem] leading-[1] font-bold text-white tracking-tighter drop-shadow-lg">
              brands,
            </h1>
            <h1 className="fancy font-serif italic text-5xl sm:text-7xl md:text-[5.5rem] leading-[1] text-white font-normal">
              with intention
            </h1>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 my-4 mt-8 md:mt-16 w-full md:w-[80%] lg:w-[60%]'>

          <p style={{ "--shine-delay": "0s" }} className='w-fit relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-1/2 before:h-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.10),transparent)] before:skew-x-[-20deg] before:content-[""] before:animate-[shine-loop_1s_infinite_linear] before:[animation-delay:var(--shine-delay)] before:pointer-events-none text-sm rounded-full border border-white/0 bg-white/5 backdrop-blur-lg shadow-xl px-4 py-3 md:px-6 md:py-4 flex justify-center md:justify-between items-center text-white font-medium'>No hiring headaches</p>
          <p style={{ "--shine-delay": "0.1s" }} className='w-fit relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-1/2 before:h-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.10),transparent)] before:skew-x-[-20deg] before:content-[""] before:animate-[shine-loop_1s_infinite_linear] before:[animation-delay:var(--shine-delay)] before:pointer-events-none text-sm rounded-full border border-white/0 bg-white/5 backdrop-blur-lg shadow-xl px-4 py-3 md:px-6 md:py-4 flex justify-center md:justify-between items-center text-white font-medium'>Weekly turnaround times</p>
          <p style={{ "--shine-delay": "0.2s" }} className='w-fit relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-1/2 before:h-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.10),transparent)] before:skew-x-[-20deg] before:content-[""] before:animate-[shine-loop_1s_infinite_linear] before:[animation-delay:var(--shine-delay)] before:pointer-events-none text-sm rounded-full border border-white/0 bg-white/5 backdrop-blur-lg shadow-xl px-4 py-3 md:px-6 md:py-4 flex justify-center md:justify-between items-center text-white font-medium'>One flat monthly rate</p>
        </div>

        <p className='text-gray-400 text-center w-full md:w-[70%] lg:w-[60%] mx-auto p-4 md:p-7 font-light text-sm md:text-base'>At TagNtarget, we help small startups tackle the world’s biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market</p>

        <CollaborateButton className="align-center" variant="white" />



      </div>
    </div>

  )
}

export default Hero