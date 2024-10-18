import navbarlogo from '../../../../src/assets/images/navbarlogo.png'
import { useNavigate } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from 'react';
import { Box } from '@mantine/core';

export const Navbar = () => {
  const navigate= useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full h-16 bg-white flex justify-center items-center md:mt-10 '>
                <div className='w-11/12 h-12 bg-white flex flex-row gap-80   '>
                <Box className="w-56 h-full  flex flex-row items-center gap-2">
                  <div className="bg-[#07F] w-10 h-10 rounded-full flex items-center justify-center">
                    <img src={navbarlogo}/>
                  </div>
                  <p className="text-black text-[25px] font-semibold leading-[25px]">AeroVision</p>
                </Box>
                <div className='md:hidden absolute  right-0'>
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-3xl'>
                  <RiMenu2Fill />
                  </button>
                </div>
                <div className='flex flex-row w-2/4 h-12  gap-44 items-center'>
                <div className='hidden md:flex md:flex-row md:items-center md:gap-12'>
                    <button className='text-lg font-semibold'><a href="/HomePage">Home</a></button>
                    <button className='w-32 text-lg font-semibold '><a href="/AboutMe">About Me</a></button>
                    <button className=' text-lg font-semibold'><a href="/Services">Services</a></button>
                    <button className=' text-lg font-semibold'>Blog</button>
                    <button className='w-32  text-lg font-semibold'><a href='/Contact'>Contact Me</a></button>
                </div>

                {isMenuOpen && (
                  <div className='absolute top-16 left-0 w-full bg-white flex flex-col items-center md:hidden'>
                    <button className='py-2 text-lg font-semibold'><a href="/HomePage">Home</a></button>
                    <button className='py-2 w-32 text-lg font-semibold'><a href="/AboutMe">About Me</a></button>
                    <button className='py-2 text-lg font-semibold'><a href="/Services">Services</a></button>
                    <button className='py-2 text-lg font-semibold'>Blog</button>
                    <button className='py-2 w-32 text-lg font-semibold'><a href='/Contact'>Contact Me</a></button>
                    <button className='py-2 h-12 w-40 bg-[#07F] rounded-full text-white text-lg font-semibold'>Let's Chat</button>
                  </div>
                )}

                <div>
                    <button className='hidden md:h-12 md:w-40 md:bg-[#07F] md:rounded-full md:text-white md:text-lg md:font-semibold'>Let's Chat</button>
                </div>

                </div>

            </div>
    </div>
    
  )
}






