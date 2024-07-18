import React from 'react';
import infinityImage from "../Assets/Group_12.png"
import { BsArrowRight } from "react-icons/bs";

// style={{backgroundImage:"linear-gradient(to right, #020617,rgba(63,55,201,0.5),#020617,rgba(63,55,201,0.45),#020617)"}}


const Navbar = () => {
  return (
    <div className='
    w-[100%]
    py-[62px]
   
    '
    >
        {/* background div1 */}
        <div className='w-[800px] h-[500px] 
        bg-gradient-to-t from-[#020617]  via-[rgba(63,55,201,0.5)] to-[#020617]
        rotate-[-54deg]
        rounded-[25px]
        absolute
        top-[-400px]
        left-[18%]
        -z-20
        '></div>
        {/* background div 2 */}
        <div className='w-[700px] h-[300px] 
        bg-gradient-to-t from-[#020617]  via-[rgba(63,55,201,0.5)] to-[#020617]
        rotate-[44deg]
        rounded-[25px]
        absolute
        top-[-250px]
        right-[10px]
        -z-20
        '></div>

        {/* navbar container */}
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
    </div>
    
  )
}

export default Navbar;