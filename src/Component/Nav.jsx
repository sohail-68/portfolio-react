import "../styles/navbar.css"
import {FaBars,FaTimes} from "react-icons/fa"
import { useState } from 'react'
function Nav() {
  const[click,setclick]=useState(false)

  function Handle(){
    setclick(!click)
  }



return (
  <div className= "header">

      <a href="/"> <h1 className='ptf'>portfolio</h1></a>
      <ul className={click ? "nav-menu active":"nav-menu"}>
        <a href="#home"  ><li>Home</li></a>
        <a  href="#about"><li>About</li></a>
        <a href="#testimonial"><li>Testimonial</li></a>
    <a  href="#contact"> <li>Contact</li></a>
     <a  href="#skills"> <li>Skills</li></a>
     </ul>
  
  <div className='humburger ' onClick={Handle}>
    {click ? ( <FaTimes  size={20}  style={{color:"black"}} />):
    (<FaBars  size={20}  style={{color:"black"}} />)}
  </div>
       </div>


)
}


export default Nav
