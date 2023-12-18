import React, { useState } from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

function Slider({ slides }) {

    const [currentPage, setCurrentPage] = useState(0)

    const nextPage = () => {
        if (currentPage === slides.length - 1) setCurrentPage(0);
        else setCurrentPage(currentPage + 1);
    }

    const previPage = () => {
        if (currentPage === 0) setCurrentPage(slides.length - 1);
        else setCurrentPage(currentPage - 1);
    }

    return (
        <div className='relative overflow-hidden '>
            <div className='flex transition ease-out duration-400'
                style={{
                    transform: `translateX(-${currentPage * 100}%)`
                }}
            >
                {slides.map((s) => (
                    <img src={s} alt='projects' />
                ))}
            </div>
            <div className='flex absolute justify-between px-3 items-center top-0 h-full w-full text-blue-400'>
                <button className='' onClick={previPage}>
                    <FaArrowCircleLeft size={30} />
                </button>
                <button className='' onClick={nextPage}>
                    <FaArrowCircleRight size={30} />
                </button>
            </div>
        </div>
    )
}

export default Slider
