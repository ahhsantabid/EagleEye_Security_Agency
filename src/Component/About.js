import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/AboutStyle.css';
import ManagementTeam from './ManagementTeam';
import Partnership from './Partnership';
import Navbar from './Navbar';
import '../Css/NavbarStyle.css'
const About = () => {
  return (
    
    <div>
    <Navbar/>

      
     <div className="mainSection">
      <div className="leftBox">
        <h1>Why Choose Us <hr /></h1>
        <p className='paraAbout'> <span> Eagle Eye Security Service</span>  is Bangladesh’s premium security services company. But what sets us apart is our diligent, incessant pursuit of excellence in our work.</p>
        <p className='second paraAbout'>We provide the widest range of security solutions across all 64 districts of Bangladesh, as well as maintaining a steady international clientele. Our operations are coordinated by the very best of military trained, professional and a dexterous workforce. </p>

        <ul activeClassName="active" className="stats-list">
          <li className="stats-card">
            <p className='h3 stats-title'>2050</p>

            <p className='stats-text'>Satisfied Clients</p>
          </li>

         

          <li className="stats-card">
            <p className='h3 stats-title'>5</p>

            <p className='stats-text'>Years Completed</p>
          </li>

          <li className="stats-card">
            <p className='h3 stats-title'>2300</p>

            <p className='stats-text'>Total Clients</p>
          </li>
        </ul>
      
      <div className="btnAbout">
        <NavLink to="/chooseus" className="btnAboutNavlink" >Read more</NavLink>
      </div>
      </div>

      <div className="rightBox">
        <img src="https://images.pexels.com/photos/7372462/pexels-photo-7372462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
     </div>
<hr />
     <ManagementTeam/>
     <Partnership/>
    </div>
  )
}

export default About
