import React from 'react'
import '../Css/HomeStyle.css'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Policy from './Policy'
import ClientReview from './ClientReview'
import License from './License'
import HomeAnimation from './HomeAnimation'



const Home = () => {
  return (
    <div>
       <div className="home-container">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img src="./image/Header2.svg" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Eagle Eye Security Services</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur explicabo sint voluptas iusto quod ullam iure ex voluptate fugit tenetur?</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src="./image/Header1.svg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Security Guards and Supervisors</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aliquam quod autem nihil dolor. Natus.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/8591606/pexels-photo-8591606.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5> Armed Guards</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, error!</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


       
      </div>
      
   
    </div>
  )
}

export default Home
