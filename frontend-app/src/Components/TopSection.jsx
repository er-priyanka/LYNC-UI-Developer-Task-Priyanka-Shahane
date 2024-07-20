import React from 'react';
import { BsArrowRight } from "react-icons/bs";


const TopSection = () => {
  return (
    <div
      className='
      w-[100%]
      bg-topSection
      bg-no-repeat   
      p-[80px]
      text-white
      font-sans
      ' 
      >
        <div className='
        w-[60%]
        m-auto
        p-[10px]
        '>
          <h1
          className='
          text-[70px]
          font-black

          ' 
          >Launch Your Game</h1>
          <h1
           className='
           text-[70px]
           font-black
           ' 
          >on <span className='
          bg-gradient-to-r from-[#FF0276] to-[#7209B7]
          bg-clip-text text-transparent
          '>Web 3.0</span> in Minutes</h1>
          
          <p
          className='text-[24px]'
          >We help game developers to launch their game on Web 3.0, by keeping bloackchain complexities aside with WebWorld SDKs!</p>
          
          <div
          className='flex justify-center items-center gap-[20px] mt-[10px]'
          >
            <div className='flex items-center gap-[20px]
            bg-gradient-to-r to-[rgb(63,55,201)] from-[#4CC9F0] 
            py-[5px] px-[10px]
            rounded-[20px]
            '>
              <button>Get started</button>
              <BsArrowRight />
            </div>
            <div className='flex items-center gap-[20px]'>
              <button>View Docs</button>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default TopSection;