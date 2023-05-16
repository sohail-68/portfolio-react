import React from 'react'
import {} from "react-icons/fa"
import {AiOutlineInstagram, AiOutlineLinkedin,AiOutlineWhatsApp,AiOutlineGithub} from "react-icons/ai"
import{FaCopyright,FaPhone} from "react-icons/fa"
import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footer'>
      <h2 className='footer-head'>SOHAIL WEBDEVELOPER</h2>
  <div className='footer-lorem'>    Lorem ip Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut placeat voluptate in voluptatum, aliquid velit nostrum, a quibusdam maxime repudiandae! Aspernatur explicabo corporis, consequatur ipsam delectus officiis quidem culpa. sum dolor sit amet consectetur adipisicing el it. Quibusdam at quam officia ab deserunt beatae, cor</div>
      
        <div className='footer-main'> <h1>contact with me </h1>

  <div className='phone'> <FaPhone className='faphone'/>  
 <p>9983937070</p>  </div>   
        <ul className='footer-list'>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>skill</li>
            <li>project</li>
        </ul></div>
        <div className='icons'>
            <AiOutlineInstagram size={30} className="fa"/>
            <AiOutlineLinkedin size={30} className='fal'/>
            <AiOutlineWhatsApp size={30} className='faw'/>

        </div>
        <div className='copyright'>
          <FaCopyright/> all right reserved 2023
          Designed by Sohail
        </div>
       
    </div>
  )
}

export default Footer