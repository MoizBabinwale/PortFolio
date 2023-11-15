import React, { useEffect, useState } from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { FaMapMarked } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { Link, Element } from 'react-scroll';
import image from "./assets/profile.jpeg"

function Body() {

    return (
        <div className='pl-4 pr-4'>
            <Element name="home" className="element">
                <div className='flex flex-col justify-center mt-28 mx-4'>
                    <img className='rounded-full my-7 w-52 self-center flex' src={image} alt='logo' />
                    <div className='w-fit md:w-auto'>
                        <h1 className='text-center text-5xl font-black mb-8 mt-8 decoration-[#2d2e32] md:justify-center md:text-center '>Front-End React Developer</h1>
                        {/* <img className='h-16 w-16' src='https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png' alt='hand' /> */}
                    </div>
                </div>
            </Element>
            <p className='text-center items-center mb-4'>Hi, I'm Moiz. A passionate Front-end React Developer based in Nagpur, Maharashtra. 📍</p>
            <span className='flex mb-4 flex-row font-bold text-3xl justify-center gap-4'>
                <a href='https://github.com/MoizBabinwale' target="_blank" >   <AiOutlineGithub /></a>
                <a href='https://www.linkedin.com/in/moiz-babinwale-its515253/' target="_blank"  >    <AiOutlineLinkedin /></a>
            </span>
            <div className='flex flex-col mb-5 items-center justify-center '>
                <p className='mb-3 font-semibold text-xl'>Tech Stack</p>
                <diiv>
                    <ul className='flex gap-3'>
                        <li><img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon" /></li>
                        <li><img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon" /></li>
                        <li className='bg-black text-cyan-500 w-11 items-center flex justify-center p-2 rounded-lg'><SiTailwindcss /></li>
                        <li></li>
                    </ul>
                </diiv>
            </div>
            <Element name="about" className="element">
                <div className=' flex flex-col md:flex-row md:justify-center'>
                    <div className='about justify-center mt-8 mx-4'>
                        <div className='relative md:w-[600px] '>
                            <img className='rounded-xl my-7' src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt='logo' />
                            <span className='absolute -bottom-1 -right-1 w-32 bg-white rounded-full rotate-container md:rotate-container inline-block'>
                                <img className=' spinimage' src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt="text" />
                            </span>
                        </div>
                    </div>
                    <div className=" flex flex-col text-center  justify-center  max-w-[54rem] md:items-start md:text-start">
                        <h3 className='font-semibold text-cyan-600 text-2xl  mt-4 mb-3 md:text-start '>About me</h3>
                        <h4 className=' text-2xl mb-3 font-bold w-100 md:text-start '>A dedicated Front-end Developer <br /> based in Nagpur, Maharashtra 📍</h4>
                        <p className='font-light  text-[#767676] self-center w-96  md:text-start'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, and Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                    </div>
                </div>
            </Element>
            <Element name="project" className="element">
                <div className='flex flex-col text-center  justify-center text-side max-w-[54rem] md:text-center md:max-w-none    md:justify-center'>
                    <p className=' font-semibold text-cyan-600 text-2xl  mt-4 mb-3 '>portfolio</p>
                    <h3 className='  mb-3  font-bold w-100 text-4xl '>Each project is a unique piece of development 🧩</h3>
                    <div className='card'>

                    </div>
                </div>
            </Element>
            <Element name="contact" className="element">
                <div className='bg-white w-100 h-auto flex  flex-col text-center  justify-center  ' >
                    <div class="contact__title">
                        <p className='font-semibold text-cyan-600 text-2xl  mt-4 mb-3'>contact</p>
                        <h3 className=' mb-3  font-extrabold w-100 text-3xl '>Don't be shy! Hit me up! 👇</h3>
                    </div>
                    <div className="footer align-middle items-center w-100 p-3   md:flex md:flex-row md:gap-16 justify-center">
                        <div className='flex flex-col  justify-center mt-2'>
                            <span className='text-cyan-600 text-2xl justify-center flex text-center p-2   border-solid '>
                                <FaMapMarked />
                            </span>
                            <div className='flex-col'>
                                <h3 className='font-black mt-2	'>Location</h3>
                                <p className='pl-3 mt-2'>Jaiprakash Nagar - Nagpur 440001</p>
                            </div>
                        </div>
                        <div className='flex flex-col  mt-4'>
                            <span className='text-cyan-600 text-2xl flex justify-center rounded-full border-solid '>
                                <FaPhoneAlt />
                            </span>
                            <div className='flex-col'>
                                <h3 className='font-black mt-2	'>Mobile</h3>
                                <p className='pl-3'>+91 9022124398</p>
                            </div>
                        </div>
                        <div className='flex flex-col   mt-4'>
                            <span className='text-cyan-600 text-2xl flex justify-center rounded-full border-solid '>
                                <IoIosMailUnread />
                            </span>
                            <div className='flex-col'>
                                <h3 className='font-black mt-2	'>Email</h3>
                                <p className='pl-3'><a href='href="mailto:mbabinwale@gmail.com?subject=Trying%To%connect'>mbabinwale@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default Body
