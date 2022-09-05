import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Css/NavbarStyle.css"
import { BsFillTelephoneFill } from "react-icons/bs";



const navbar = () => {
  return (
    <div>
      <header>
        <div className="container container-flex">
            <div className="logo">

              <NavLink to="/" className='navLogo'><img src="./image/logo.jpeg" alt="" /></NavLink>
            
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
                
                  <p><BsFillTelephoneFill/> Hotline:     <span>+8801745698555</span>  <p className='email'>eagleeyeagency@gmail.com</p> </p>
                 
            </div>
        </div>
      </header>
    </div>
  )
}

export default navbar
