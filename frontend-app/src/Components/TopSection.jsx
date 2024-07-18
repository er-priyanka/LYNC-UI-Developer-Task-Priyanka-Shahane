import React from 'react';
import { BsArrowRight } from "react-icons/bs";


const TopSection = () => {
  return (
    <div className='
    bg-[#020617]
     '>
      <div
      className='
      w-[100%]
      bg-topSection
      bg-no-repeat 
      bg-cover 
      bg-center
      mt-[10px]
      p-[80px]
      border
      border-black
      text-white
      ' 
      >
        <div className='
        border
        w-[70%]
        m-auto
        '>
          <h1>Launch Your Game</h1>
          <h1>on <span>Web 3.0</span> in Minutes</h1>
          <p>We help game developers to launch their game on Web 3.0, by keeping bloackchain complexities aside with WebWorld SDKs!</p>
          <div>
            <div>
              <button>Get started</button>
              <BsArrowRight />
            </div>
            <div>
              <button>View Docs</button>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default TopSection;