import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import '../Css/FooterStyle.css';
import { HiLocationMarker } from "react-icons/hi";



const Footer = () => {
  return (
   <>
     <footer className='footer'>
      
      <div className="footerTop">
        <div className="container container-flex">
          <div className="footerBrand">

            <NavLink to="/"  className='logo' activeClassName='activeLogo'>Eagle Eye</NavLink>
   
            <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Provident beatae saepe doloremque nostrum vero sed!</p>

            <ul className='socialList'>
        
                <NavLink  to="/" className="socialLink" ><BsFacebook/></NavLink>
                <NavLink to="/" className="socialLink"><BsTwitter/></NavLink>
                <NavLink to="/" className="socialLink"><BsInstagram/></NavLink>


            </ul>

          </div>
          <ul className="footerList">
          <p className="footerListTitle">Our Link</p>

          <NavLink to="/" className='footerLink' activeClassName='activeLink'>Home</NavLink>
          <NavLink to="/about" className='footerLink' activeClassName='activeLink'>About us</NavLink>
          <NavLink to="/service" className='footerLink' activeClassName='activeLink'>Services</NavLink>
          <NavLink to="/contact" className='footerLink' activeClassName='activeLink'>Contact Us</NavLink>
          <NavLink to="/partnership" className='footerLink' activeClassName='activeLink'>Partnership</NavLink>

         
          
           
          </ul>

          <ul className="footerList">

          <p className="footerListTitle">Our Services</p>
          <NavLink to="/" className='footerLink' activeClassName='activeLink'>Guards & Supervisors</NavLink>
          <NavLink to="/service" className='footerLink' activeClassName='activeLink'>Driver</NavLink>
          <NavLink to="/service" className='footerLink' activeClassName='activeLink'>Body Guard</NavLink>
          <NavLink to="/service" className='footerLink' activeClassName='activeLink'>Armed Guard</NavLink>
          <NavLink to="/service" className='footerLink' activeClassName='activeLink'>Female Body Guard</NavLink>

          </ul>


          <ul className="footerList">
            
              <p className="footerListTitle">Other Links</p>
            


              <NavLink to="/" className='footerLink' activeClassName='activeLink'>FAQ</NavLink>
          <NavLink to="/policy" className='footerLink' activeClassName='activeLink'>Privacy Policy</NavLink>
          <NavLink to="/policy" className='footerLink' activeClassName='activeLink'>Terms and Conditions</NavLink>
          <NavLink to="/contact" className='footerLink' activeClassName='activeLink'>Support</NavLink>
          <NavLink to="/license" className='footerLink' activeClassName='activeLink'>License</NavLink>

           
           
          </ul>

          <ui className="footerList">
            <li>
              <p className="footerListTitle">Contact Us</p>
            </li>
            <li className="footerItem">
              <div className="footerItemIcon">
              <p><BsFillTelephoneFill/> Hotline: <span>+8801832696133</span> </p>
              <p><HiOutlineMail/> Email: <span>fortune2020@gmail.com</span> </p>
              <p> <HiLocationMarker/> Address: House#12/A, Dhanmondi-1, Beside Beli Tower, Dhaka-1206</p>

              </div>
            </li>
          </ui>
        </div>
      </div>



       <div className="footerBottom">
        <p className='copyright'>&copy; 2022 <span>EagleEye @ahhsantabid</span>. All Right Reserved</p>
       </div>
     </footer>
















   {/* <div className="footer">
   <div className="footerTop">
    
      <div className="firstcoloum">
      <h3 className='companyName'>Eagle Eye</h3>
      <p className='footerPara'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente delectus ad, doloribus exercitationem eveniet modi laboriosam tempora a distinctio perferendis?</p>
      <div className="icon">
        <BsFacebook/>
        <BsInstagram/>
        <BsTwitter/>

      </div>  
      </div>

<div className="secondcoloum">
<h3 className='ourLink'>Our Link</h3>
    
    <div className="footerlist">
    
              <ul>
                <li>a</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
    

</div>

<div className="thirdcoloum">
<h3 className='contactus'>Contact Us</h3>

<div className="contactlist">
  
</div>

</div>
    </div>
   </div>

    */}

   </>
  )
}

export default Footer
