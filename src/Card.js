import React from "react";
import './Card.css'

 const Card=({image})=>{
     return(
         <div className="card">
             <img className="card__image" src={image} alt="" srcSet=""></img>
         </div>

     )
 }
 export default Card
