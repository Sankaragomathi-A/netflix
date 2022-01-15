import YouTube from "react-youtube";
import React from "react";
import './Trailer.css'

const Trailer=({videoId})=>{
    const opts = {
        height: '490',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
    return(
        <div className="trailer">
            <YouTube className="video" videoId={videoId} opts={opts}></YouTube>
            <div>
            <button className="trailer__btn  btn btn-light text-end text-dark p-3">Download<i class="fas fa-arrow-down"></i></button>
         </div>
         </div>
    )
}
export default Trailer