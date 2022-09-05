import React from 'react'
import '../Css/HomeAnimationStyle.css'
import { NavLink } from 'react-router-dom'
import { BsFillTelephoneFill } from "react-icons/bs";
import App from '../App';




const HomeAnimation = () => {
  return (
    <div>
    
      <div className="banner">
        <div className="slider">
            <img src="https://images.pexels.com/photos/6105483/pexels-photo-6105483.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  id="slideImg"/>
        </div>
        <div className="overlay">
            <div className="navbar">
                <div className="logo">
                <NavLink to="/" className='navLogo'><img src="./image/logo.jpeg" alt="" /></NavLink>

                </div>
                   
                   
            <div className="listt">
               <NavLink exact to="/" className="listItemm" activeClassName='activeItemm'>Home</NavLink>
               {/* <NavLink exact to="/about" className="listItem" activeClassName='activeItem'>About</NavLink> */}
               <NavLink exact to="/service" className="listItemm" activeClassName='activeItemm'>Service</NavLink>
               <NavLink exact to="/contact" className="listItemm" activeClassName='activeItemm'>Contact</NavLink>
               <NavLink exact to="/policy" className="listItemm" activeClassName='activeItemm'>Policy</NavLink>
               <NavLink exact to="/career" className="listItemm" activeClassName='activeItemm'>Career</NavLink>


            
  

            </div>
                 

                <div className="info">
                <p><BsFillTelephoneFill/> Hotline:     <span>+8801745698555</span>  <p className='email'>eagleeyeagency@gmail.com</p> </p>

                    
                </div>
            </div>

            <div className="content">
                <h1>Welcome to Eagle Eye Security Agency</h1>
                <h5>The company provides male and female security guardshomes, apartments, offices, banks, NGOs, construction sites, factories, events etc. Guards can be provided for any time of the day in 8 hour shifts as per requirement of the client.</h5>

                <div >
                    <NavLink to="/service" className='button'><button >WATCH MORE</button></NavLink>


                    <NavLink to="/about" className='button'><button >ABOUT US</button></NavLink>


                </div>
            </div>
      
      </div>

     
    </div>




    

  
    </div>
  )
}

export default HomeAnimation
