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
import html from "./assets/html.png";
import postman from "./assets/postman.png";
import css from "./assets/css.jpeg";
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
        <div className="flex flex-col items-center justify-center mt-20">
          <img src={image} alt="Your Name" className="w-32 h-48 rounded-full shadow-lg border-2 border-gray-300 object-cover" />
          <h1 className="text-2xl font-bold mt-4 text-gray-800">Moiz Babinwale</h1>
          <p className="text-sm text-gray-500">MERN Stack Developer</p>
        </div>
      </Element>
      <div className="mx-auto w-full max-w-xl px-4">
        <p className="text-center text-base sm:text-lg mb-2 mt-2">
          Hi, I'm <span className="font-semibold">Moiz</span>. A passionate MERN Developer based in Nagpur, Maharashtra. 📍
        </p>

        <p className="text-center text-sm sm:text-base text-gray-700">
          Empower your business with a compelling online presence! If your business or profession needs a website, connect with me on WhatsApp at
          <a className="text-blue-600 font-medium" href="https://wa.me/919022124398?text=Hello%20Moiz,%20I%20am%20interested%20in%20your%20services">
            {" "}
            +919022124398{" "}
          </a>
          . As a freelancer, I specialize in creating effective and engaging websites tailored to your unique needs.
        </p>

        <div className="mt-4 flex justify-center">
          <a
            href="https://drive.google.com/drive/my-drive?zx=ebl7bnjtqd5r"
            download
            className="bg-cyan-600 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 rounded-lg hover:bg-cyan-700 transition duration-300 mb-2 md:mb-0"
          >
            Download Resume
          </a>
        </div>
      </div>

      <span className="flex mb-4 flex-row font-bold text-3xl justify-center gap-4">
        <a href="https://github.com/MoizBabinwale" target="_blank" rel="noreferrer">
          {" "}
          <AiOutlineGithub />
        </a>
        <a href="https://www.linkedin.com/in/moiz-babinwale-its515253/" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin />
        </a>
      </span>
      <div className="flex flex-col mb-5 items-center justify-center ">
        <p className="mb-3 font-semibold text-xl">Tech Stack</p>
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          <ul className="flex gap-3">
            <li className="w-10 h-10 flex items-center justify-center">
              <img src={html} alt="HTML  icon" className="max-w-full max-h-full" />
            </li>

            <li className="w-10 h-10 flex items-center justify-center">
              <img src={css} alt="Css  icon" className="max-w-full max-h-full" />
            </li>
            <li className="w-10 h-10 flex items-center justify-center">
              <img src={postman} alt="postman  icon" className="max-w-full max-h-full" />
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
        </div>
      </div>
      <div className="flex flex-col mb-5 items-center justify-center text-center">
        <Element name="about" className="element">
          <div class="contact__title">
            <p className="font-semibold text-cyan-600 text-2xl  mt-4 mb-3">About</p>
          </div>
          <h4 className="text-2xl mb-3 font-bold w-full text-center md:text-start">MERN Stack Developer with 1+ Year of Professional Experience 📍</h4>
          <div className="flex justify-center">
            <p className="text-[#767676] w-[90%] max-w-xl text-center md:text-start">
              I'm a dedicated MERN developer with 14 months of experience in React.js and full-stack development. At <b>Pranam Creative Solutions</b>, I honed my frontend skills in React, while at{" "}
              <b>OLINEO Digital India</b>, I built full-stack applications and optimized performance across the MERN stack. My focus lies in building scalable, secure, and responsive web applications
              using technologies like MongoDB, Express, React, Node.js, and Tailwind CSS.
            </p>
          </div>
        </Element>
      </div>

      <Element name="project" className="element">
        <div className="flex flex-col justify-center items-center ">
          <div class="contact__title">
            <p className="font-semibold text-cyan-600 text-2xl  mt-4 mb-3">Projects</p>
          </div>
          {/* Project Card 1 */}
          <div className="card p-4 w-full max-w-4xl   shadow-xl self-center hover:-translate-y-2 transition-transform duration-300 ease-in-out mt-6 m-2 bg-white rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <Slider slides={stackImg} />
              </div>
              <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Stack Overflow Clone</h3>
                  <p className="font-medium text-gray-700 text-justify">
                    A full-stack replica of Stack Overflow, featuring user authentication, posting, voting, and search functionality with a clean modern UI.
                  </p>
                  <p className="text-sm mt-2 font-semibold text-cyan-600">
                    💼 Role: Full Stack Developer – Created the entire MERN stack solution with authentication, API development, and deployment on Vercel.
                  </p>
                  <div className="mt-3">
                    <p className="mt-3 text-sm">
                      <b># Tech Used:</b> React, Spring Boot, Java, Material UI, HTML/CSS
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://stackoverflowclone-henna.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 px-3 py-1 rounded-md text-sm hover:bg-blue-700">
                    🔗 Live Demo
                  </a>
                  <a href="https://github.com/MoizBabinwale/Client" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-900">
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="card p-4 w-full max-w-4xl   shadow-xl self-center hover:-translate-y-2 transition-transform duration-300 ease-in-out mt-6 m-2 bg-white rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <Slider slides={mechanicImg} />
              </div>
              <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Mechanic Shop Directory</h3>
                  <p className="font-medium text-gray-700 text-justify">
                    A responsive directory platform where users can explore mechanic shop details and contact them, while shop owners register multiple branches with ease.
                  </p>
                  <p className="text-sm mt-2 font-semibold text-cyan-600">💼 Role: Frontend Developer – Designed user and admin dashboards using React and styled with Bootstrap.</p>
                  <div className="mt-3">
                    <p className="mt-3 text-sm">
                      <b># Tech Used:</b> React, Spring Boot, Java, Material UI, HTML/CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="card p-4 w-full max-w-4xl   shadow-xl self-center hover:-translate-y-2 transition-transform duration-300 ease-in-out mt-6 m-2 bg-white rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <Slider slides={medicineImg} />
              </div>
              <div className="flex flex-col justify-between w-full md:w-1/2">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">Medicine Prescription Management System</h3>
                  <p className="font-medium text-gray-700 text-justify">
                    A web app to add and manage medicine records linked with symptoms. The system streamlines prescription processes for healthcare professionals, with a clean UI and mobile-friendly
                    design.
                  </p>
                  <p className="text-sm mt-2 font-semibold text-cyan-600">💼 Role: Full Stack Developer – Built and integrated both frontend UI and backend services using Java and Spring Boot.</p>
                  <div className="mt-3">
                    <p className="mt-3 text-sm">
                      <b># Tech Used:</b> React, Spring Boot, Java, Material UI, HTML/CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="contact" className="element">
        <div className="bg-white w-100 h-auto flex  flex-col text-center  justify-center  ">
          <div class="contact__title">
            <p className="font-semibold text-cyan-600 text-2xl  mt-4 mb-3">contact</p>
            <h3 className=" mb-3  font-extrabold w-100 text-3xl ">Don't be shy! Hit me up! 👇</h3>
          </div>
          <div className="footer align-middle items-center w-100 p-3   md:flex md:flex-row md:gap-16 justify-center">
            <div className="flex flex-col  justify-center mt-2">
              <span className="text-cyan-600 text-2xl justify-center flex text-center p-2   border-solid ">
                <FaMapMarked />
              </span>
              <div className="flex-col">
                <h3 className="font-black mt-2	">Location</h3>
                <p className="pl-3 mt-2">Mankapur - Nagpur 440001</p>
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
                  <a href="mailto:mbabinwale@gmail.com?subject=Trying%20to%20connect">mbabinwale@gmail.com</a>
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
