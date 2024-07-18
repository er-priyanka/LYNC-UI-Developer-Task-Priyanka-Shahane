import React from 'react';
import infinityImage from "../Assets/Group_12.png"
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='
    w-[80%]
    m-auto
    bg-[#281450]
    text-white
     flex justify-between
    items-center
    border-[#FFFFFF36]
    py-[10px]
    px-[20px]
    rounded-[48px]
    border
    '>
        <div>
            <img src={infinityImage} alt='infinity image' />
        </div>
        <div className="
        w-[50%]
        flex
        justify-between
        items-center
        
        ">
            <a href="">Home</a>
            <a href="">Documentation</a>
            <a href="">Blogs</a>
            <a href="">LYNC Portal</a>
            <a href="">Request a demo</a>
        </div>
        <div className="
        flex 
        justify-center 
        items-center
        py-[8px]
        px-[14px]
        bg-white
        text-black
        gap-[4px]
        rounded-[20px]
         ">
            <button >
                Get started    
            </button>
            <BsArrowRight />

        </div>
    </div>
  )
}

export default Navbar;