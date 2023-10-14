import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <section className="relative  md:mt-[70px] bg-cover bg-center text-white h-screen"style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-[88%]">
            <div className='md:w-[700px]'>
                <h1 className="text-white text-4xl md:text-6xl font-semibold">Live with Confidence</h1>
                <p className="text-white text-lg md:text-2xl my-5">José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                <button className='bg-colorPurple text-white rounded-full py-2 px-3'>View project</button>

            </div>
        
        </div>
  </section>
  )
}

export default Hero