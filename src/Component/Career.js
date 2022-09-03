import React from 'react'
import '../Css/CareerStyle.css'

const Career = () => {
  return (
    <div>

        <div className="text-center"><h2>Drop your CV</h2></div>
       
          <div className="fullcontainer">

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
  <label for="text" class="form-label">Present Address</label>
  <input type="address" class="form-control" id="address" placeholder="Your address"/>
</div>

<br />
<div class="mb-3">
<label htmlFor="file" className='cv'>Upload your CV </label>

  <input type="file" id='file' accept='file/*' />
</div>
<br />
<br />


<div className="buttonall">
<button className='btn btn-danger my-5'>Send feedback</button>
<button className='btn btn-danger my-5'> <a href="/">Back to Home page</a> </button>
</div>

          </div>
        </div>
   
  )
}

export default Career
