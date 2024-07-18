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
  {logoImage: ""},
  {logoImage: ""},
  {logoImage: ""},
  {logoImage: ""},
  {logoImage: ""},
  {logoImage: ""},
];

const iniPartners = [
  {image: ""},
  {image: ""},
  {image: ""},
  {image: ""},
  {image: ""},
  {image: ""},
  {image: ""},
  {image: ""},
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
            <p className='text-[30px] text-white font-bold'>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span className='text-blue-700'>gaming experience.</span> So that you can deliver the next big hit!</p>
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
            <div className='w-[30%] h-[100%]  absolute bottom-[0px] right-0'>
              <img className='object-none' src={diamondImage} alt='diamond image' />
            </div>

            </div>
            
          </div>
         

          {/* grid container */}
          <div className='
          w-[80%]
          m-auto       
          mt-[100px]
          flex justify-center
          gap-[10px]
          text-left
          '>
            {/* card 1 */}
            <div className='border
            flex 
            p-[20px]
            rounded-[32px]
            box-border
            w-[50%]
            bg-gradient-to-tr from-[#9706c7] via-[#020617] to-[#020617]
            '
            >
                <div className='
                text-left  leading-[25px] '
                
                >
                  <h1 className='text-[24px] font-bold'>Elevate Your Gameplay with Essential Insights!</h1>
                  <p className='text-[rgba(141, 150, 178, 1)] mt-[15px]'>Unleash Your Potential - Explore the Knowledge Hub Today!</p>
                  <button className='mt-[40px] bg-white rounded-[20px] text-black py-[8px] px-[14px]'>View Docs</button>
                </div>
                <div className='w-[50%]'>
                  <img src={gameImage} alt="game image" />
                </div>
            </div>

            <div className='flex gap-[10px] w-[50%] box-border'>
              <div className='flex flex-col box-border justify-between w-[40%]'>
                {/* card 2 */}
                <div className='
                border min-h-[48%] 
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
                <div className=' min-h-[48%] border rounded-[20px] p-[20px]'>
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
                <div className='border w-[65%] rounded-[20px] '>
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
                    <img src={cryptoWalletImage} alt='crypto wallet image' />
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
          <div>
            <h1>With LYNC, build on your <span className='text-blue-700'>favorite chain.</span></h1>
            <div>
              {
                logos.map((logo, index) => (
                  <div key={index}>
                    <img src={logo.logoImage} alt={`logo ${index+1}`} />
                  </div>
                ))
              }
            </div>
          </div>

          {/* from our blog */}
          <div>
            <h1>From our Blog</h1>
            <p>Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights, Tips, and Innovations in Gaming SDKs!</p>

            {/* carousel */}
            {/* replace this comment with blog carousel */}
          </div>

          {/* valuable reviews */}
          <div>
            <h1>Valuable <span className='text-blue-700'>Reviews</span></h1>
            {/* carousel */}
            {/* replace this comment with carousel */}
          </div>

          {/* strongest web3 community */}
          <div>
            <h1>Strongest Web3</h1>
            <h1>Community</h1>
            <button>Join Telegram</button>
          </div>

          {/* our believers and partners */}
          <div>
            <h1>Our <span>Believers and Partners</span></h1>
            {/* partners grid container */}
            <div>
              {
                partners.map((item, indx) =>(
                  <div key={indx}>
                    <img src={item.image} alt={`image ${indx+1}`} />
                  </div>
                ))
              }
            </div>
           
          </div>

          {/* bottom section */}
          <div>
            <h1>Got a game idea?</h1>
            <h1>Let's ake it big together !!!</h1>
            <button>Get started</button>
          </div>

          {/* footer */}
          <div>
            <div>
              {/* start */}
              <div>
                <h1>LYNC</h1>
                <p>A GameFi Infrastructure</p>
                <div>
                  <img src="" alt="linked in" />
                  <img src="" alt="discord" />
                  <img src="" alt="twitter" />
                </div>
              </div>

              {/* middle */}
              <div>
                <div>
                  <p>Product</p>
                  <ul>
                    <li>
                      <a href="">SDK's</a>
                      <a href="">Transfer API's</a>
                      <a href="">Token API's</a>
                      <a href="">NFT API's</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p>Company</p>
                  <ul>
                    <li>
                      <a href="">About us</a>
                      <a href="">Press Kit</a>
                      <a href="">Security</a>
                      <a href="">Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p>Contact</p>
                  <ul>
                    <li>
                      <a href="">Email</a>
                      <a href="">Discord</a>
                      <a href="">Telegram</a>
                      <a href="">Press</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* end */}
              <div>
                <h1>Suprechange your inbox</h1>
                <p>Sign up for our newsletter</p>
                <div>
                  <input placeholder='enter your email address' />
                  <button>Submit</button>
                </div>
              </div>
            </div>

            <p>2024 LYNC World <a href="">Terms of service</a></p>
          </div>
         









        </div>


        </div>
        

        
       
      </div>
      
    </div>
  );
}

export default App;
