import React from 'react'
import '../Css/ServiceStyle.css';
import Card from './Card';
import Data from './ApiDataService';
import Testimonial from './Testimonial';
import ClientReview from './ClientReview';
import Navbar from './Navbar';
import '../Css/NavbarStyle.css'

const Service = () => {
  return (
    <div>
<Navbar/>
      <div className="text-center"><h1>Our Services</h1></div>

      <div className="serviceContainer">


{Data.map((values)=>{
              return(
                <>
                 <div className="row">
                  <Card  title={values.title} para={values.para} image={values.image}/>

                  </div>
                
                
                </>
              )
    })}



      </div>
      <hr />
      <ClientReview/>


    </div>
  )
}

export default Service
