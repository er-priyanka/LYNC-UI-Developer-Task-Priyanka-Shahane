import './App.css';
import Navbar from './Components/Navbar';
import TopSection from './Components/TopSection';
import gridImage from './Assets/Grid.png';
import Background from './Assets/Background.png';
import LongHashX_White_1 from './Assets/LongHashX_White_1.png';
import Axelar_Logo_Full_White_1 from './Assets/Axelar_Logo_Full_White_1.png';
import filecoin from './Assets/filecoin.png';
import zuroImage from "./Assets/image_88.png";
import vrImage from "./Assets/image_87.png";
import lumosImage from "./Assets/image_90.png";
import somWebsiteImage from "./Assets/SOM_Website_Logo(1)_1.png";
import bornToDieImage from "./Assets/image_89.png";
import { useState } from 'react';
import diamondImage from "./Assets/diamond.png";
import gameImage from "./Assets/game.png";
import cryptoWalletImage from "./Assets/crypto-wallet.png";
import rectangle_24 from "./Assets/Rectangle_24.png";
import etherum from "./Assets/image_69.png";
import polygon from "./Assets/image_93.png";
import aptos from "./Assets/image_92.png";
import zkSky from "./Assets/image_55.png";
import shardeun from "./Assets/Group_228.png";
import astar from "./Assets/image_66.png";
import saga from "./Assets/image_72.png";
import avalanche from "./Assets/Avalanche_Horizontal_White_2.png";
import { BsTelegram } from "react-icons/bs";
import chainlink from "./Assets/image_58.png";
import spheron from "./Assets/spheron-white_1.png";
import biconomy from "./Assets/image_78.png";
import lighthouse from "./Assets/Group_249.png";
import image_79 from "./Assets/image_79.png";
import { BsArrowRight } from "react-icons/bs";
import gameGif from "./Assets/game-animation.gif";
import animation from "./Assets/Animation.gif";
import { FaLinkedin, FaDiscord, FaTwitter } from "react-icons/fa";


const iniProductSuitData = [
  {
    image: rectangle_24,
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: rectangle_24,
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: rectangle_24,
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: rectangle_24,
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: rectangle_24,
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: rectangle_24,
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  }
]

const iniLogoData = [
  {logoImage: etherum },
  {logoImage: polygon },
  {logoImage: aptos },
  {logoImage: zkSky },
  {logoImage: shardeun },
  {logoImage: astar },
  {logoImage: saga },
  {logoImage: avalanche },
];

const iniPartners = [
  {image: filecoin},
  {image: chainlink},
  {image: spheron},
  {image: LongHashX_White_1},
  {image: Axelar_Logo_Full_White_1},
  {image: biconomy},
  {image: lighthouse},
  {image: image_79},
]

function App() {
  const [productSuitData, setProductSuitData] = useState(iniProductSuitData);
  const [logos, setLogos] = useState(iniLogoData);
  const [partners, setPartners] = useState(iniPartners);
  
  return (
    <div 
    className="App
    text-white
    bg-[#020617]
    p-0
    "
    
    >
      <div
      className='bg-grid'
      >
        <div className='
        bg-[#020617] 
        opacity-[80%]
        '>
          <Navbar />
          <TopSection />
     
          <div>
          <p className='text-[#DADDD8]
          text-[24px]
          '>Backed by</p>
          
          {/* logo container */}
          <div
          className='flex
          w-[40%]
          m-auto
          mt-[53px]
          border
          border-[rgba(255, 255, 255, 0.21)]
          rounded-[32px]
          justify-between
          items-center
          bg-[#111426]
          ' 
          
          >
            <div>
              <img src={LongHashX_White_1} alt="logo1" />
            </div>
            <div>
              <img src={Axelar_Logo_Full_White_1} alt="logo2" />
            </div>
            <div>
              <img src={filecoin} alt="logo3" />
            </div>
          </div>

          {/* text */}
          <div className='
          w-[54%]
          align-center
          m-auto
          mt-[100px]
          border-y
          border-y-slate-300
          '>
            <p className= 'text-[30px] lg:text-[30px] md:text-[24px] sm:text-[18px] text-white font-bold'>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span className='text-blue-700'>gaming experience.</span> So that you can deliver the next big hit!</p>
          </div>

          {/* blockchain heading and some logos*/}

          <div
          className='
          w-[80%]
          m-auto 
          p-[30px]       
          '
          style={{
            backgroundImage: "radial-gradient(rgba(63,55,201,0.5), rgba(63,55,201,0.3), rgba(63,55,201,0.2), rgba(63,55,201,0), rgba(63,55,201,0) )"
          }} 
          >
            <h1 className='
            text-[40px] 
            lg:text-[40px] md:text-[32px] sm:text-[24px]
            font-bold
            w-[60%]
            m-auto
            my-[50px]
             '>Making blockchain gaming accessible to <span className='text-blue-700'>everyone!</span></h1>
           
            {/* logo container */}
            <div className='
            flex justify-between items-center

            '>
              <div>
                <img src={zuroImage} alt="logo1" />
              </div>
              <div>
                <img src={bornToDieImage} alt="logo3" />
              </div>
              <div>
                <img src={lumosImage} alt="logo3" />
              </div>
              <div>
                <img src={somWebsiteImage} alt="logo3" />
              </div>
              
              <div>
                <img src={vrImage} alt="logo2" />
              </div>
            </div>
          </div>

          {/* power heading and description */}
          <div className='
          w-[70%]
          m-auto
          '>
            <h1 className='
             text-[40px]
             lg:text-[40px] md:text-[32px] sm:text-[24px] 
            font-bold
            w-[60%]
            m-auto
            mt-[50px]
            '>Power Up Your Web3 Game Development, With <span className='
            bg-gradient-to-r from-[#FF0276] to-[#7209B7]
          bg-clip-text text-transparent
            '>LYNC SDKs</span></h1>
            <p className='text-[22px] 
            w-[60%]
            m-auto
            '>LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few clicks.</p>
          </div>

          {/* diamond container */}
          <div className='w-[80%]  m-auto align-left'>
            <div className='
              mt-[50px]
              border
              border-gray-400
              rounded-[24px]
              p-[40px]
              bg-[#211442]
              flex
              justify-between
              box-border
              relative
            '>
              {/* container 1 */}
            <div className='w-[70%]  text-left'>
              <p className='text-[32px] font-bold'>Don't Worry about the <span className='
              bg-gradient-to-r from-[#FF0276] to-[#7209B7]
              bg-clip-text text-transparent
              '>Web3</span> Complexities</p>

              <ul className='text-[24px] leading-[52px]'>
                <li>Save 9-12 months of developement time</li>
                <li>Focus completely on Game DEv and Mechanics</li>
                <li>Save Up to $500K+ on Salaries & Smart Contract Auding</li>
                <li>Go Cross-Chain in a few clicks</li>
              </ul>
            </div>

            {/* container 2 */}
            <div className='w-[30%] md:block sm:hidden h-[100%]  absolute bottom-[0px] right-0'>
              <img className='object-none' src={diamondImage} alt='diamond image' />
            </div>

            </div>
            
          </div>
         

          {/* grid container */}
          <div className='
          w-[80%]
          m-auto       
          mt-[100px]
          flex flex-col sm:flex-col lg:flex-row
          justify-center 
          gap-[16px]
          text-left
          '>
            {/* card 1 */}
            <div className='border border-gray-500
            flex 
            p-[20px]
            rounded-[32px]
            box-border
            w-[100%]
            lg:w-[50%] sm:w-[100%]
            bg-gradient-to-tr from-[#9706c7] via-[#020617] to-[#020617]
            '
            >
                <div className='
                text-left  leading-[30px] w-[50%]'
                
                >
                  <h1 className='text-[24px] font-bold'>Elevate Your Gameplay with Essential Insights!</h1>
                  <p className='text-[rgba(141, 150, 178, 1)] mt-[15px]'>Unleash Your Potential - Explore the Knowledge Hub Today!</p>
                  <button className='mt-[40px] bg-white rounded-[20px] text-black py-[8px] px-[14px]'>View Docs</button>
                </div>
                <div className='w-[50%]'>
                  <img className='object-cover ' src="https://s3-alpha-sig.figma.com/img/efc2/0bf1/269ff51dfea508b952adde5a5602a36c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nmVeb1qCcm3i6~-eQAJowradzE3EeQgW0xXzv9gA0nbe2NYUA3qlcL7A7o1xnPstL1M5sEIIFJBA0lnFt15L7wvAiWchMYI7lqK622eLyl0rObQvvEk47pCULVjqZaem92rYFzsooW7aN1EByidr05eWuDdgDXV7VpcJcsD7B3Cw~N-u~SI2ajpzYOL8NkU7VTH50sqJeXc4FzXvJofnNaJLSSdUzvGWohvutjrxZIssmpjLNElfrKJ3adPEbiOCLBXMf6-cO1T4Sy5mRnnmVKh1FhR9E-KGfgxlkv5slLIAVtKmqGDXK0JTKW8KIEXj-R8nhuMFJ8YWO0D1nC1vTw__" alt="game image" />
                </div>
            </div>

            <div className='flex flex-col md:flex-row 
            gap-[16px] w-[100%] lg:w-[50%] sm:w-[100%]
            box-border'>
              <div className='flex flex-col
              box-border justify-between 
              lg:w-[40%] md:w-[40%] w-[100%]
              gap-[20px]
              '>
                {/* card 2 */}
                <div className='
                border border-gray-500 min-h-[48%] 
                rounded-[20px]
                p-[20px]
                '>
                  <h1
                  className='
                  bg-gradient-to-bl from-[#3F37C9] to-[#4CC9F0]
                  bg-clip-text
                  text-transparent
                  font-extrabold
                  text-[32px]
                  w-fit
                  ' 
                  >200+</h1>
                  <p className='text-[#8D96B2]'>Projects have downloaded & integrated LYNC SDKs</p>
                </div>

                {/* card 3 */}
                <div className=' min-h-[48%] border border-gray-500 rounded-[20px] p-[20px]'>
                  <h1
                  className='
                  bg-gradient-to-br from-[#FF0276] to-[#7209B7]
                  bg-clip-text
                  text-transparent
                  font-extrabold
                  text-[32px]
                  w-fit
                  ' 
                  >8000+</h1>
                  <p className='text-[#8D96B2]'>Contracts have been deployed via LYNC</p>
                </div>
              </div>
                

                {/* card 4 */}
                <div className='border border-gray-500 w-[100%] md:w-[65%] rounded-[20px] '>
                  <div className='p-[20px] box-border'>
                    <h1
                    className='
                    bg-gradient-to-bl from-[#3F37C9] to-[#4CC9F0]
                    bg-clip-text
                    text-transparent
                    font-extrabold
                    text-[32px]
                    w-fit'
                    >50000+</h1>
                    <p className='text-[#8D96B2]'>User ops created in 10 hours</p>
                  </div>
                  <div>
                    <img className='w-[100%] max-h-[300px] object-contain' src={animation} alt='crypto wallet image' />
                  </div>
                </div>
            </div>

            
          </div>

          {/* Product suite */}
          <div className='mt-[100px]'
          style={{
            backgroundImage: "radial-gradient(rgba(63,55,201,0.5), rgba(63,55,201,0.3), rgba(63,55,201,0.2), rgba(63,55,201,0), rgba(63,55,201,0) )"
          }}           
          >
            <h1 className='
            text-[40px] 
            lg:text-[40px] md:text-[32px] sm:text-[24px]
            font-bold
            w-[60%]
            m-auto
            
            '>Product <span className='text-blue-700'>Suite</span></h1>
            {/* grid */}
            <div
            className='
            w-[70%]
            m-auto
            mt-[100px]
            text-left
            grid
            grid-cols-3
            lg:grid-cols-3
            md:grid-cols-2
            sm:grid-cols-1

            gap-[20px]
            ' 
            >
              {
                productSuitData.map((product, index) => (
                  <div key={index}
                  className='
                  bg-gradient-to-b from-[rgba(63,55,201,0)] via-[#020617] to-[#020617]
                  px-[22px]
                  pb-[45px]
                  rounded-[20px]
                  '
                  >
                    <img className='w-[100%]' src={product.image} alt={product.title} />
                    <h1 className='mt-[20px] text-[24px] font-bold'>{product.title}</h1>
                    <p className='text-[#8D96B2] text-[14px]'>{product.desc}</p>
                  </div>
                ))
              }
            </div>
          </div>
          
          {/* build your favorite chain */}
          <div className='
          
          w-[80%]
          m-auto
          mt-[100px]
          py-[50px]
          '
          style={{
            backgroundImage: "radial-gradient(rgba(63,55,201,0.5), rgba(63,55,201,0.3), rgba(63,55,201,0.2), rgba(63,55,201,0), rgba(63,55,201,0) )"
          }} 
          >
            <h1
            className='
            text-[40px]
            lg:text-[40px] md:text-[32px] sm:text-[24px] 
            font-bold
            w-[50%]
            m-auto' 
            >With LYNC, build on your <span className='text-blue-700'>favorite chain.</span></h1>
            <div className='
            grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2
            mt-[50px]
            '>
              {
                logos.map((logo, index) => (
                  <div className='align-center h-[60px] p-[10px]' key={index}>
                    <img className=' w-[100%] h-[100%] object-contain' src={logo.logoImage} alt={`logo ${index+1}`} />
                  </div>
                ))
              }
            </div>
          </div>

          {/* from our blog */}
          {/* <div> */}
            {/* <h1>From our Blog</h1>
            <p>Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights, Tips, and Innovations in Gaming SDKs!</p> */}

            {/* carousel */}
            {/* replace this comment with blog carousel */}
          {/* </div> */}

          {/* valuable reviews */}
          {/* <div> */}
            {/* <h1>Valuable <span className='text-blue-700'>Reviews</span></h1> */}
            {/* carousel */}
            {/* replace this comment with carousel */}
          {/* </div> */}

          {/* strongest web3 community */}
          <div
          className='
          w-[80%]
          m-auto
          mt-[150px]
          h-[500px]
          ' 
          style={{
            backgroundImage: "radial-gradient(rgba(63,55,201,0.5), rgba(63,55,201,0.3), rgba(63,55,201,0.2), rgba(63,55,201,0), rgba(63,55,201,0) )"
          }} 
          >
            <div className='h-[100%]
             bg-community
             bg-contain bg-center bg-no-repeat
             flex flex-col justify-center items-center
             '>
              <h1 className='
              text-[40px]
              lg:text-[40px] md:text-[32px] sm:text-[24px]
              font-bold
              leading-[50px]
              w-[30%]
              '>Strongest Web3 <span className='text-blue-800'>Community</span></h1>
              
              <div className='flex items-center gap-[10px]
            bg-gradient-to-r to-[#3F37C9] from-[#4CC9F0] 
            py-[8px] px-[14px]
            rounded-[20px]
            mt-[20px]
            '>
              <BsTelegram />
              <button>Get started</button>
              
            </div>
            </div>
            
          </div>

          {/* our believers and partners */}
          <div className='
          w-[80%]
          m-auto
          mt-[200px]
          '
          style={{
            backgroundImage: "radial-gradient(rgba(63,55,201,0.5), rgba(63,55,201,0.3), rgba(63,55,201,0.2), rgba(63,55,201,0), rgba(63,55,201,0) )"
          }} 
          >
            <h1 
            className='text-[40px] 
            lg:text-[40px] md:text-[32px] sm:text-[24px]
            font-bold
            w-[60%]
            m-auto'
            >Our <span className='
            bg-gradient-to-bl from-[blue] to-blue-400
            bg-clip-text text-transparent
            '>Believers and Partners</span></h1>
            {/* partners grid container */}
            <div className='
            mt-[50px]
            grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
            gap-[20px]
            '>
              {
                partners.map((item, indx) =>(
                  <div className='border  border-gray-600 rounded-[20px] p-[20px] px-[10px] bg-rectangleBg bg-no-repeat bg-cover bg-center ' key={indx}>
                    <img style={{
                      objectFit:`${indx==0?'cover':'contain'}`
                    }} className=' w-[70%] h-[50px] m-auto object-fill' src={item.image} alt={`image ${indx+1}`} />
                  </div>
                ))
              }
            </div>
           
          </div>

         

          {/* footer */}
          <div className='
          
          mt-[200px] pb-[100px] m-auto relative 
          '>
               {/* bottom section */}
               <div >
                  <h1
                  className='
                  text-[150px] 
                  font-bold w-fit m-auto
                  bg-gradient-to-t from-[#020617] to-[#838080]
                  bg-clip-text text-transparent
                  ' 
                  >LYNC</h1>
                      <div className='
                      absolute
                      top-[130px]
                      left-[35%]
                      '
                      style={{
                        backgroundImage: "radial-gradient(#020617, #020617, rgba(63,55,201, 0), rgba(63,55,201, 0) )"
                      }}
                      >
                        <h1 className='text-[40px] lg:text-[40px] md:text-[32px] sm:text-[24px] font-bold'>Got a game idea?</h1>
                        <h1 className='text-[40px] lg:text-[40px] md:text-[32px] sm:text-[24px] font-bold'>Let's ake it big together !!!</h1>
                        
                        <div className='flex items-center gap-[20px]
                        bg-gradient-to-bl to-[rgb(63,55,201)] from-[#4CC9F0] 
                        py-[5px] px-[10px]
                        rounded-[20px]
                        w-fit m-auto mt-[15px]
                        '>
                          <button>Get started</button>
                          <BsArrowRight />
                        </div>
                      </div>

               </div>
            


            <div className='
             w-[80%] m-auto pt-[200px]
            bg-Floor_Pattern bg-no-repeat bg-center bg-contain
            flex flex-col lg:flex-row gap-[20px]
             justify-between text-left
             
            '>
              <div 
              className=' w-[100%]
              lg:w-[60%] 
              flex flex-col md:flex-row gap-[20px]
              justify-between text-left
              '
              >
                {/* start */}
              <div >
                <h1 className='text-[32px] text-white font-bold'>LYNC</h1>
                <p className='text-[16px] font-bold'>A GameFi Infrastructure</p>
                <div className=' mt-[10px] flex gap-[8px] items-center'>
                  <div className='border border-gray-600 rounded-[50%] p-[8px]'>
                    <FaLinkedin />
                  </div>
                  <div className='border border-gray-600 rounded-[50%] p-[8px]'>
                    <FaDiscord />                 
                  </div>
                  <div className='border border-gray-600 rounded-[50%] p-[8px]'>
                    <FaTwitter />                
                  </div>
                 
                </div>
              </div>

              {/* middle */}
              <div className='flex gap-[20px]'>
                <div>
                  <p className='font-bold text-[18px]'>Product</p>
                  <ul className='leading-8 text-[14px]'>
                    <li>
                      <a href="">SDK's</a>
                    </li>
                    <li>                      
                      <a href="">Transfer API's</a>
                    </li>
                    <li>
                      <a href="">Token API's</a>
                    </li>
                    <li>
                      <a href="">NFT API's</a>
                    </li>
                    
                  </ul>
                </div>

                <div >
                  <p className='font-bold text-[18px]'>Company</p>
                  <ul className='leading-8 text-[14px]'>
                    <li>
                      <a href="">About us</a>
                    </li>
                    <li>
                      <a href="">Press Kit</a>
                    </li>
                    <li>
                      <a href="">Security</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className='font-bold text-[18px]'>Contact</p>
                  <ul className='leading-8 text-[14px]'>
                    <li>
                      <a href="">Email</a>
                    </li>
                    <li>
                      <a href="">Discord</a>
                    </li>
                    <li>
                      <a href="">Telegram</a>
                    </li>
                    <li>
                      <a href="">Press</a>
                    </li>
                  </ul>
                </div>
              </div>

              </div>
              

              {/* end */}
              <div className='w-[100%] text-center lg:text-left lg:w-[30%]'>
                <h1 className='text-[20px] font-bold '>Suprechange your inbox</h1>
                <p className='text-[14px]'>Sign up for our newsletter</p>
                <div className='border w-fit border-gray-500 rounded-[20px] mt-[15px] pr-[10px] '>
                  <input className=' p-[10px] bg-transparent placeholder:text-[14px]' placeholder='enter your email address' />
                  <button className='
                  py-[5px] px-[30px]
                  text-[14px]
                  rounded-[20px]
                  bg-gradient-to-tr from-blue-400 to-blue-800
                  '>Submit</button>
                </div>
              </div>
            </div>
            
            <div className='flex justify-center items-center gap-[10px] mt-[50px]'>
              <p className='text-[14px] '>2024 LYNC World</p>
              <ul className='list-disc list-inside'>
                <li>
                  <a className='underline underline-offset-2' href="">Terms of service</a>
                </li>
              </ul>
            </div>
          </div>
         









        </div>


        </div>
        

        
       
      </div>
      
    </div>
  );
}

export default App;
