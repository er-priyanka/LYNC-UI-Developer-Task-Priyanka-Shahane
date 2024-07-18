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



const iniProductSuitData = [
  {
    image: "",
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: "",
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: "",
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: "",
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: "",
    title: "LYNC Wallet SDK",
    desc: "Empowering developers to integrate account abstraction in their game, dapp, metaverse and more in minutes."
  },
  {
    image: "",
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
      className='bg-grid
      pt-[62px]
      '
      >
        <Navbar />
        <TopSection />

        
        <div>
          <p className='text-white'>Backed by</p>
          
          {/* logo container */}
          <div>
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
          <div>
            <p>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span style={{color:'blue'}}>gaming experience.</span> So that you can deliver the next big hit!</p>
          </div>

          {/* blockchain heading and some logos*/}

          <div>
            <h1>Making blockchain gaming accessible to <span>everyone!</span></h1>
            {/* logo container */}
            <div>
              <div>
                <img src={zuroImage} alt="logo1" />
              </div>
              <div>
                <img src={vrImage} alt="logo2" />
              </div>
              <div>
                <img src={lumosImage} alt="logo3" />
              </div>
              <div>
                <img src={somWebsiteImage} alt="logo3" />
              </div>
              <div>
                <img src={bornToDieImage} alt="logo3" />
              </div>
            </div>
          </div>

          {/* power heading and description */}
          <div>
            <h1>Power Up Your Web3 Game Development, With <span className='text-blue'>LYNC SDKs</span></h1>
            <p>LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few clicks.</p>
          </div>

          {/* diamond container */}
          <div>
            <p>Don't Worry about the <span className='text-blue-700'>Web3</span> Complexities</p>

            <ul>
              <li>Save 9-12 months of developement time</li>
              <li>Focus completely on Game DEv and Mechanics</li>
              <li>Save Up to $500K+ on Salaries & Smart Contract Auding</li>
              <li>Go Cross-Chain in a few clicks</li>
            </ul>
          </div>

          {/* grid container */}
          <div>
            {/* card 1 */}
            <div>
                <div>
                  <h1>Elevate Your Gameplay with Essential Insights!</h1>
                  <p>Unleash Your Potential - Explore the Knowledge Hub Today!</p>
                  <button>View Docs</button>
                </div>
                <img src="" alt="game image" />
            </div>

            {/* card 2 */}
            <div>
              <h1>200+</h1>
              <p>Projects have downloaded & integrated LYNC SDKs</p>
            </div>

            {/* card 3 */}
            <div>
            <h1>8000+</h1>
            <p>Contracts have been deployed via LYNC</p>
            </div>

            {/* card 4 */}
            <div>
            <h1>50000+</h1>
            <p>User ops created in 10 hours</p>
            </div>
          </div>

          {/* Product suite */}
          <div>
            <h1>Product <span className='text-blue-700'>Suite</span></h1>
            {/* grid */}
            <div>
              {
                productSuitData.map((product, index) => (
                  <div key={index}>
                    <img src={product.image} alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.desc}</p>
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
  );
}

export default App;
