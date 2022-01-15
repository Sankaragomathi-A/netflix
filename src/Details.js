import React, { useState } from "react";
import './Details.css'
import Trailer from "./Trailer";

const Details=({title,image,videoID,imageDetailsBg})=>{

    const [TrailerButton,setTrailerButton]=useState(false)
    const hey=()=>{}

    const handleClick=()=>{
        setTrailerButton(!TrailerButton)
    }

    return(
        

        <div className="mt-3 details__background">

            <img className="details__background__image img-fluid" src={imageDetailsBg} alt=""></img>
                
                <div className="details__content">

                <h2 className="details__title">{title}</h2>
            <p className="details__description  pt-5"> The Rise of Skywalker premiered in Los Angeles on December 16, 2019, and was released in the United States on December 20. It received mixed reviews from critics, who praised the acting, action sequences, musical score, and visual effects but criticized the story, pacing, fan service, and perceived departures from the plot and themes of The Last Jedi. It grossed over $1.074 billion worldwide, becoming the seventh-highest-grossing film of 2019; although it was the lowest-grossing installment of the trilogy, it turned an estimated </p>
        <button  onClick={(hey(), handleClick.bind(this))} className="mt-4 btn btn-danger text-center py-2 px-4 trailerButton">Tralier</button>
         </div>

         <Trailer  videoID={videoID} ></Trailer>
       
         </div>
    )
}
export default Details