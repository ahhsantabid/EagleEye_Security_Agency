import React from 'react'
import Team from '../ApiManagementTeam';
import TeamCard from './TeamCard';
import '../Css/TeamStyle.css';
const ManagementTeam = () => {
  return (
    <div>
       <div className="text-center my-5"><h1>Management Team</h1></div>

<div className="serviceContainer">


{Team.map((values)=>{
        return(
          <>
           <div className="row">
            <TeamCard  title={values.title} secondtitle={values.secondtitle} para={values.para}  image={values.image}/>

            </div>
           
          
          <hr />
          </>
          
        )
})}



</div>
    </div>
  )
}

export default ManagementTeam
