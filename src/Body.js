import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaMapMarked } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { Element } from "react-scroll";
import image from "./assets/profile.jpg";
import medicine from "./assets/medicine.jpg";
import medicine1 from "./assets/medicine1.jpg";
import medicine2 from "./assets/medicine2.jpg";
import medicine3 from "./assets/medicine3.jpg";
import mechanic1 from "./assets/mechanic1.jpg";
import mechanic2 from "./assets/mechanic2.jpg";
import mechanic5 from "./assets/mechanic5.jpg";
import mechanic4 from "./assets/mechanic4.jpg";
import stack1 from "./assets/stack1.PNG";
import stack2 from "./assets/stack2.PNG";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Slider from "./Slider";

function Body() {
  const medicineImg = [medicine, medicine1, medicine2, medicine3];
  const mechanicImg = [mechanic1, mechanic2, mechanic4, mechanic5];
  const stackImg = [stack1, stack2];
  return (
    <div className="pl-4 pr-4">
      <Element name="home" className="element">
        <div className="flex flex-col justify-center mt-28 mx-4 bg-[url('./assets/bg.jpg')] md:bg-contain bg-cover bg-fixed rounded-sm	">
          <img
            className="rounded-full my-7 w-52 self-center flex"
            src={image}
            alt="logo"
          />
          <div className="w-fit md:w-auto">
            <h1 className="text-center text-5xl font-black mb-8 mt-8  md:justify-center md:text-center text-white">
              MERN Stack Developer
            </h1>
            {/* <img className='h-16 w-16' src='https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png' alt='hand' /> */}
          </div>
        </div>
      </Element>
      <p className="text-center items-center mb-4 mt-2">
        Hi, I'm Moiz. A passionate MERN Developer based in Gondia, Maharashtra.
        📍
      </p>
      <span className="flex mb-4 flex-row font-bold text-3xl justify-center gap-4">
        <a
          href="https://github.com/MoizBabinwale"
          target="_blank"
          rel="noreferrer"
        >
          {" "}<AiOutlineGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/moiz-babinwale-its515253/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
      </span>
      <div className="flex flex-col mb-5 items-center justify-center ">
        <p className="mb-3 font-semibold text-xl">Tech Stack</p>
        <diiv>
          <ul className="flex gap-3">
            <li>
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="skill-icon"
              />
            </li>
            <li className="bg-black text-cyan-500 w-11 items-center flex justify-center p-2 rounded-lg">
              <SiTailwindcss style={{ fontSize: "1.5rem" }} />
            </li>
            <li className="bg-white text-green-600 w-11 items-center flex justify-center shadow-md rounded-lg">
              <BiLogoMongodb style={{ fontSize: "2.5rem" }} />
            </li>
            <li className="bg-white text-green-700 w-11 items-center flex justify-center shadow-md rounded-lg">
              <FaNodeJs style={{ fontSize: "2.5rem" }} />
            </li>
            <li className="bg-white text-blue-500 w-11 items-center flex justify-center shadow-md rounded-lg">
              <FaReact style={{ fontSize: "2.5rem" }} />
            </li>
            <li />
          </ul>
        </diiv>
      </div>
      <Element name="about" className="element">
        <div className=" flex flex-col md:flex-row md:justify-center">
          <div className="about justify-center mt-8 mx-4">
            <div className="relative md:w-[600px] ">
              <img
                className="rounded-xl my-7"
                src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                alt="logo"
              />
              <span className="absolute -bottom-1 -right-1 w-32 bg-white rounded-full rotate-container md:rotate-container inline-block">
                <img
                  className=" spinimage"
                  src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                  alt="text"
                />
              </span>
            </div>
          </div>
          <div className=" flex flex-col text-center  justify-center  max-w-[54rem] md:items-start md:text-start">
            <h3 className="font-semibold text-cyan-600 text-2xl  mt-4 mb-3 md:text-start ">
              About me
            </h3>
            <h4 className=" text-2xl mb-3 font-bold w-100 md:text-start ">
              A dedicated MERN Developer <br /> based in Gondia, Maharashtra 📍
            </h4>
            <p className="font-light  text-[#767676] self-center w-96  md:text-start">
              As a Junior Full Stack Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, and Tailwind. I excel
              in designing and maintaining responsive websites that offer a
              smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </Element>
      <Element name="project" className="element">
        <div className="flex flex-col text-center  justify-center text-side max-w-[54rem] md:text-center md:max-w-none    md:justify-center">
          <p className=" font-semibold text-cyan-600 text-2xl  mt-4 mb-3 ">
            portfolio
          </p>
          <h3 className="  mb-3  font-bold w-100 text-4xl ">
            Each project is a unique piece of development 🧩
          </h3>
          <div className="card p-2 w-fit border-none   shadow-xl self-center hover:-translate-y-2 transition-transform duration-300 ease-in-out mt-3 m-2">
            <div className="flex md:w-fit justify-start flex-col md:flex-row md:gap-4 md:rounded-md">
              <div className="image p-1  gap-2  ">
                <Slider slides={medicineImg} />
              </div>
              <div className="mt-2 w-90">
                <h3 className="font-bold text-black text-left">
                  {" "}Medicine Prescription Management System:{" "}
                </h3>
                <p className="font-medium mt-1 text-justify">
                  {" "}This dynamic web application empowers administrators to
                  seamlessly add medicines along with associated symptoms. The
                  user-friendly interface facilitates efficient prescription
                  management, streamlining the process for healthcare
                  professionals. The responsive design ensures accessibility
                  across various devices, providing a modern solution for
                  medicine administration and record-keeping
                </p>
                <div className="text-start mt-3 ">
                  <p className="w-full">
                    <b>#&nbsp;Tech Use:</b>
                  </p>
                  <div className="pl-10 mt-3">
                    <ul className="list-disc	space-y-2">
                      <li>React</li>
                      <li>Java</li>
                      <li>SpringBoot</li>
                      <li>Material UI</li>
                      <li>JavaScript</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-2 w-fit border-none   shadow-xl self-center hover:-translate-y-2 transition-transform duration-300 ease-in-out mt-3 m-2">
            <div className="flex md:w-fit justify-start flex-col md:flex-row md:gap-4 md:rounded-md">
              <div className="image p-1  gap-2  ">
                <Slider slides={mechanicImg} />
              </div>
              <div className="mt-2 w-90">
                <h3 className="font-bold text-black text-left">
                  Mechanic Shop Directory:{" "}
                </h3>
                <p className="font-medium mt-1 text-justify">
                  {" "}In this clone, users can explore mechanic shop details,
                  including contact information, and effortlessly reach out to
                  mechanics for services. On the mechanic side, the platform
                  allows easy registration of different shop branches, providing
                  a comprehensive directory for users seeking automotive
                  services. The responsive design ensures optimal user
                  experience, making it a reliable and accessible solution for
                  connecting users with automotive professionals.
                </p>
                <div className="text-start mt-3 ">
                  <p className="w-full">
                    <b>#&nbsp;Tech Use:</b>
                  </p>
                  <div className="pl-10 mt-3">
                    <ul className="list-disc	space-y-2">
                      <li>React</li>
                      <li>Java</li>
                      <li>SpringBoot</li>
                      <li>Bootstrap (Library)</li>
                      <li>JavaScript</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-2 w-fit border-none   shadow-xl self-center hover:-translate-y-2 transition-transform duration-300 ease-in-out mt-3 m-2">
            <div className="flex md:w-fit justify-start flex-col md:flex-row md:gap-4 md:rounded-md">
              <div className="image p-1  gap-2  ">
                <Slider slides={stackImg} />
              </div>

              {/* Content section */}
              <div className="mt-2 w-90">
                <a
                  href="https://stackoverflowclone-henna.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-bold text-black text-left">
                    Stack Overflow Clone:
                  </h3>
                  <p className="font-medium bg-blend-multiply mt-1 text-justify">
                    Developed and launched a high-performing Full Stack website
                    clone of Stack Overflow, utilizing React, Node.js, and
                    MongoDB, resulting in a seamless user experience and
                    increased engagement by 40%. • Technologies Used: React,
                    Node.js, MongoDB, and Express
                  </p>
                  <div className="text-start mt-3 ">
                    <p className="w-full">
                      <b>#&nbsp;Tech Use:</b>
                    </p>
                    <div className="pl-10 mt-3">
                      <ul className="list-disc	space-y-2">
                        <li>React</li>
                        <li>Nodejs</li>
                        <li>MongoDB</li>
                        <li>Express JS</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
      <Element name="contact" className="element">
        <div className="bg-white w-100 h-auto flex  flex-col text-center  justify-center  ">
          <div class="contact__title">
            <p className="font-semibold text-cyan-600 text-2xl  mt-4 mb-3">
              contact
            </p>
            <h3 className=" mb-3  font-extrabold w-100 text-3xl ">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="footer align-middle items-center w-100 p-3   md:flex md:flex-row md:gap-16 justify-center">
            <div className="flex flex-col  justify-center mt-2">
              <span className="text-cyan-600 text-2xl justify-center flex text-center p-2   border-solid ">
                <FaMapMarked />
              </span>
              <div className="flex-col">
                <h3 className="font-black mt-2	">Location</h3>
                <p className="pl-3 mt-2">Civil Lines - Gondia 441601</p>
              </div>
            </div>
            <div className="flex flex-col  mt-4">
              <span className="text-cyan-600 text-2xl flex justify-center rounded-full border-solid ">
                <FaPhoneAlt />
              </span>
              <div className="flex-col">
                <h3 className="font-black mt-2	">Mobile</h3>
                <p className="pl-3">+91 9022124398</p>
              </div>
            </div>
            <div className="flex flex-col   mt-4">
              <span className="text-cyan-600 text-2xl flex justify-center rounded-full border-solid ">
                <IoIosMailUnread />
              </span>
              <div className="flex-col">
                <h3 className="font-black mt-2	">Email</h3>
                <p className="pl-3">
                  <a href="href=&quot;mailto:mbabinwale@gmail.com?subject=Trying%To%connect">
                    mbabinwale@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Body;
