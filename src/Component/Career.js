import React from 'react'
import '../Css/CareerStyle.css'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import '../Css/NavbarStyle.css'
import Modal from './Modal';

const Career = () => {

  return (
    <div>
      <Navbar/>

      <div className="text-center"><h3>Drop your CV</h3></div>

      <div className="bothcontainer">

        <div className="fullcontainer">

          <div class="mb-3">
            <label for="name" class="form-label">Name <span>*</span></label>
            <input type="email" className="form-control" id="name" placeholder="Your name" />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address <span>*</span></label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>


          <div class="mb-3">
            <label for="phone" class="form-label">Phone <span>*</span></label>
            <input type="phone" class="form-control" id="phone" placeholder="+8801#########" />
          </div>

          <div class="mb-3">
            <label for="text" class="form-label">Present Address <span>*</span></label>
            <input type="address" class="form-control" id="address" placeholder="Your address" />
          </div>

          <div class="mb-3">
            <label for="text" class="form-label">Expected Salary <span>*</span></label>
            <input type="salary" class="form-control" id="salary" placeholder="7000-12000" />
          </div>

          <br />
          <div class="mb-3">
            <label htmlFor="file" className='cv'>Upload your CV </label>

            <input type="file" id='file' accept='file/*' />
          </div>
          <br />
          <br />


          <div className="buttonall">
            <button className='btn btn-danger my-5' id='submitbtn'>Submit</button>
            <NavLink exact to="/service" id="homebtn" activeClassName='activeItem'><button className='btn btn-danger my-5'>Watch more jobs </button></NavLink>

          </div>

        </div>
        <div className="popularPart">
          <div className="heading"><h4>Popular Service</h4></div>
          <div className="popularService">
            <div className="careerbtn"> <button >Security Guard</button></div>
            <div className="careerbtn"> <button>Driver</button></div>
            <div className="careerbtn"> <button>Female Body Guard</button></div>
            <div className="careerbtn">  <button>Night Guard</button></div>
            <div className="careerbtn"> <button>Security Guard</button></div>
            <div className="careerbtn">             <button>Personal Assistant</button>
            </div>



          </div>
        </div>
      </div>
    </div>

  )
}

export default Career
