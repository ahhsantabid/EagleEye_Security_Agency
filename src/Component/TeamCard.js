import React from 'react'
import '../Css/TeamStyle.css';
import Team from '../ApiManagementTeam'

const TeamCard = ({image,para,secondtitle,title}) => {
  return (
    <div>
      <div className="cardShow">
  <img src={image} className="cardImage" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h3 className='secondtitle'>{secondtitle}</h3>
    <p className="para">{para}</p>
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
</div>

    </div>
  )
}

export default TeamCard
