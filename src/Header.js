import React from 'react'
import { Link, Element } from 'react-scroll';

function Header() {
    const handleToggle = () => {
        const navLinks = document.getElementById('navLinks');
        console.log("clicked");
        navLinks.classList.toggle('hidden');
    }
    return (
        <div className='relative'>
            <div className='flex justify-between items-center  border-b-2 fixed w-100 top-0 bg-white z-50 pl-3 pr-3'>
                <span className='text-xl font-extrabold'>Moiz B.</span>
                <div className=' cursor-pointer  inline-block p-2 w-10 md:hidden' onClick={() => handleToggle()} id="toggleBtn">
                    <div className='h-0.5  p-0.5 my-1 bg-black'></div>
                    <div className='h-0.5  p-0.5  my-1 bg-black'></div>
                    <div className='h-0.5  p-0.5  my-1 bg-black'></div>
                </div>
                <div className='hidden  absolute flex p-6 flex-col bg-slate-300 rounded-md text-center top-12  right-8   md:bg-transparent md:block md:flex-row md:top-0 md:relative md:p-2 md:items-center md:gap-7 md:mr-3 md:mt-2 ' id="navLinks">
                    <Link to="home" smooth={true} duration={500}>  <span className='cursor-pointer hover:underline text-lg font-semibold text-center p-2'>Home</span></Link>
                    <Link to="about" smooth={true} duration={500}>  <span className='cursor-pointer hover:underline text-lg font-semibold text-center p-2'>About</span></Link>
                    <Link to="project" smooth={true} duration={500}> <span className='cursor-pointer hover:underline text-lg font-semibold text-center p-2'>Project</span></Link>
                    <Link to="contact" smooth={true} duration={500}>  <span className='cursor-pointer hover:underline text-lg font-semibold text-center p-2'>Contact</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Header
