import React, { useState, useEffect } from 'react';
import {GrNext, GrPrevious} from 'react-icons/gr'
import Line from "./Line"

import small_banana from '../assets/img/small_banana.jpg'
import small_bike from '../assets/img/small_bike.jpg'
import small_car from '../assets/img/small_car.jpg'
import small_drone from '../assets/img/small_drone.jpg'
import small_glasses from '../assets/img/small_glasses.jpg'
import small_nikeshoes from '../assets/img/small_nikeshoes.jpg'

const CaseStudies = () => {

  const sliders = [
    {
    "img":small_banana,
    "heading": "The Olympian",
    "paragraph": "The only athlete in the world to do her Olympic routine in 2020."
    
    },
    {
    "img":small_bike,
    "heading": "The Savings Jar",
    "paragraph": "Grow your savings treasure and grow your dragon."
    
    },
    {
    "img":small_car,
    "heading": "Skhokho seMali",
    "paragraph": "Helping South Africans become #CashCleva with Skhokho and TymeBank."
    
    },
    {
    "img":small_drone,
    "heading": "The Olympian",
    "paragraph": "The only athlete in the world to do her Olympic routine in 2020."
    
    },
    {
    "img":small_glasses,
    "heading": "Cool Glasses",
    "paragraph": "The best glasses to by in 2024."
    
    },
    {
    "img":small_nikeshoes,
    "heading": "The Olympian",
    "paragraph": "The only athlete in the world to do her Olympic routine in 2020."
    
    },
  ];

  const [value, setValue] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliders.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliders.length - 3 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      
      // Update the value based on screen size
      if (screenWidth >= 768) {
        setValue(3);
      } else if (screenWidth >= 576) {
        setValue(2);
      }else{
        setValue(1);
      } 
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Initial value based on screen size
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <section className='bg-white text-black z[2] py-12 px-6'> 
      <div className='max-w-[1440px] mx-auto overflow-x-auto'> 
        <div className='flex flex-row items-center text-center gap-3 mb-8'>
            <Line/>
            <p>Case studies</p>
          </div>

        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="flex md:overflow-x-auto">
              
              {sliders.slice(currentIndex, currentIndex + value).map((slider, index) => (
                <div key={index} className="md:w-1/3 w-full sm:h-auto p-4 relative">
                  <img src={slider.img} alt={`Image ${index + currentIndex + 1}`} className="object-cover w-full h-80" />
                  <div class="absolute inset-0 flex items-center justify-center z-10">
                    <div className='absolute bottom-9 left-2 text-white px-8 bg-opacity-75'>
                      <Line />
                      <h5 className='text-xl md:text-2xl font-bold my-3'>{slider.heading}</h5>
                      <p className='overflow-hidden sm:text-xs'>{slider.paragraph}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={handlePrev} className="p-2">
                <GrPrevious size={20}/>
              </button>
              <button onClick={handleNext} className="p-2">
                <GrNext size={20}/>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
    
  )
}

export default CaseStudies