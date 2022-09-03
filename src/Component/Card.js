import React from 'react'
import Data from './ApiDataService'


const Card = ({image,para,title}) => {
  return (
    <div>
      
        <div className="cardShow">
  <img src={image} className="cardImage" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="para">{para}</p>
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
</div>
        </div>
   
  )
}

export default Card
