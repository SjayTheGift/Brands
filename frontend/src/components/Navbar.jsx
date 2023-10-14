import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import logo from '../assets/logo.png'



const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    return (
      <div className={`bg-colorPurple w-full h-auto fixed top-0 left-0 z-[1] transition-all duration-500 p-4 text-white font-semibold`}>
        <div className='max-w-[1440px] mx-auto flex md:flex md:justify-between items-center'>
          <a >
            <img src={logo}  className='cursor-pointer' />
          </a>
          <div onClick={() => setNav(!nav)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {nav ? <AiOutlineClose />  :<AiOutlineMenu /> }
          </div>
          <div onClick={() => setNav(!nav)} >
            <ul className={`flex flex-col text-xl md:gap-6 md:flex-row items-center md:pb-0 pb-12 bg-colorPurple
              absolute  md:static md:z-auto z-[-1] top-0 left-0 w-full md:w-auto md:pl-0 pl-9 
              transition-all duration-500 ease-in-out ${nav ? 'top-[100%] opacity-100': 'top-[-1000%] opacity-0 md:opacity-100'}`}>
              <li
                    className='md:text-lg hover:underline md:hover:pb-1 transition-colors no-underline duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                    Services
              </li>
              <li
              className=' md:text-lg hover:underline md:hover:pb-1 transition-colors no-underline duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                Skills
              </li>
              <li
                  className='md:text-lg hover:underline md:hover:pb-1 transition-colors no-underline duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                Industries
              </li>
              <li
                  className='md:text-lg hover:underline md:hover:pb-1 transition-colors no-underline duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                Cases
              </li>
              <li
                  className='md:text-lg hover:underline md:hover:pb-1 transition-colors no-underline duration-500 md:my-0 my-3 cursor-pointer' onClick={() => setNav(!nav)} >
                Contact
              </li>
              <li className='mt-3'>
              <button className='bg-white text-colorPurple rounded-full py-2 px-3 md:hidden'>Let's Talk</button>
              </li>
              
            </ul>
          </div>

          <button className='bg-white text-colorPurple rounded-full py-2 px-3 hidden md:block'>Let's Talk</button>

        </div>
      </div>
    );
  };
  
  export default Navbar;