import React from 'react'
import "../styles/home.css"
import img1 from "../Aseets/sohail.png"
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
function Home() {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div className='home' id='home'>Home
    <div className='main-home'>
      <div className='main-content'>
        <div className='left-home'>

        <motion.h1 {...animations.h1} className='h1'>
            Hi, I Am <br /> Sohail khan
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div className='home-button'>
            <button className='hire'>Hire me</button>
            <button className='projects'>Projects</button>
          </div>
<div className='count'>
  <div className='home-one'>
    <h2>+100 <br />Client Worldwide</h2>

  </div>
  <div className='home-two'>
    <h2>+200 <br /> <h5> Project Done </h5></h2>

  </div>
  <div className='home-three'>
    <h3>Contact<br />sohailkhanas23as23@gmail.com</h3>

  </div>
</div>



        </div>
<div className='right-home'>
  <div className='image-home'>
  <img src={img1} alt="" className='image1' />
  </div>

</div>
      </div>
    </div>
    </div>
  )
}

export default Home