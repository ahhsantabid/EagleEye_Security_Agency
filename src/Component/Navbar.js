import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillTelephoneFill } from "react-icons/bs";
import "../Css/NavbarStyle.css"



const navbar = () => {
  return (
    <div>
      <header>
        <div className="container container-flex">
            <div className="logo">

              <NavLink to="/" className='navLogo'><img src="./image/logoo.svg" alt="" /></NavLink>
            
            </div>

            <div className="list">
               <NavLink exact to="/" className="listItem" activeClassName='activeItem'>Home</NavLink>
               <NavLink exact to="/about" className="listItem" activeClassName='activeItem'>About</NavLink>
               <NavLink exact to="/service" className="listItem" activeClassName='activeItem'>Services</NavLink>
               <NavLink exact to="/contact" className="listItem" activeClassName='activeItem'>Contact</NavLink>
               <NavLink exact to="/policy" className="listItem" activeClassName='activeItem'>Policy</NavLink>
               <NavLink exact to="/career" className="listItem" activeClassName='activeItem'>Career</NavLink>


            
  

            </div>

            <div className="icons">
                
                  <p>Hotline:     <BsFillTelephoneFill/><span>+8801745698555</span> </p>
            </div>
        </div>
      </header>
    </div>
  )
}

export default navbar
