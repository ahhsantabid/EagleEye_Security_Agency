import React from 'react'
import '../Css/ClientReviewStyle.css'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';





const ClientReview = () => {
 
  return (
    <div>
      {/* <div className="slide-container swiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>


                <div className="card-image">
                  <img src="https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='card-img' />
                </div>
              </div>

              <div className="card-content">
                <h2 className='name'>Ahhsan Tabid</h2>
                <h4 className='tag'>@ahhsantabid</h4>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptas voluptatibus non aut impedit aliquid id, vero officiis quas tempore distinctio unde beatae. Fugiat placeat ea magnam maxime odit explicabo.</p>
              </div>

              <div className="reviews">
                <a href=""><AiFillStar className='review-icon' /></a>
                <a href=""><AiFillStar className='review-icon' /></a>
                <a href=""><AiFillStar className='review-icon' /></a>
                <a href=""><AiFillStar className='review-icon' /></a>
                <a href=""><AiOutlineStar className='review-icon' /></a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div> */}


             
            <div className="testimonial-heading">
                <span>Comments</span>
                <h1>Clients Says</h1>
            </div>
           

        <div className="container">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="./image/clientReview.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="./image/clientReview5.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="./image/clientReview4.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>

    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>

        <hr />
           
    </div>
  )
}

export default ClientReview