import React from 'react'
import '../Css/ContactStyle.css';

import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Navbar from './Navbar';
import '../Css/NavbarStyle.css'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="contactfullpage">
      <div className="container">
        <div className="text-center">
          <h1>Contact Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum cumque tempore molestiae qui delectus porro magnam. Reprehenderit sunt recusandae excepturi temporibus unde consequatur repudiandae voluptatibus quaerat alias iure praesentium delectus nihil vel ipsum adipisci, ratione quod inventore reiciendis. Voluptates, neque.</p>

          </div>
          <div className="contactPage">
        <div className="leftcontact">
          <div className="address">
            
            <h3><IoLocationSharp className='icon'/> Address</h3>
            <p>House#12/A, Block#A, Road#56, Dhanmondi-1 (beside Bell Tower), Dhaka-1205</p>
          </div>

          <br />

          <div className="phone">
            <h3><BsFillTelephoneForwardFill className='icon'/>  Phone</h3>
            <p>+0880117586932, +08801789652587</p>
          </div>

          <br />

          <div className="email">
            <h3><MdEmail className='icon'/>  Email</h3>
            <p>eagleeye.hr@gmail.com <br /> hrpool@gmail.com</p>
          </div>
<br />
        </div>




        <div className="rightcontact">
          <div className="containerform">

          <div class="mb-3">
  <label for="name" class="form-label">Name</label>
  <input type="email" className="form-control" id="name" placeholder= "Your name"/>
</div>

          <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>


<div class="mb-3">
  <label for="phone" class="form-label">Phone</label>
  <input type="phone" class="form-control" id="phone" placeholder="+8801#########"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Quary Box</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Briefly discribe your issue..."></textarea>
</div>
<button className='btn btn-danger my-5'>Send feedback</button>

          </div>
        </div>
      </div>
      </div>
      </div>
      <hr />
    </div>
  )
}

export default Contact
