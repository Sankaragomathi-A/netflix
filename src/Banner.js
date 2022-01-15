import React from "react";
import './Banner.css'
import AddIcon from '@material-ui/icons/Add'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const Banner=()=>{
    return(
    <div className="banner">
        <img className="banner__logo" src="https://i0.wp.com/www.secondhalftravels.com/wp-content/uploads/2018/08/Dark-German-series-Netflix.jpg?fit=1800%2C720&ssl=1" alt=""></img>
        <h3>NETFLIX <small>ORIGINAL</small></h3>
        <h2>DARK</h2>
        <div className="button__div">
            <button className="button1">
                 <PlayArrowIcon style={{fontSize:10}}/>Play
            </button>
            <button className="button2">
                <AddIcon style={{fontSize:10}}/>My list
            </button>
        </div>

        <div className="intro__container">
            <p className="intro">
                Dark is a German fiction thriller streaming television series co-operation created by Baran bo Odar and Jantje Friese.
            </p>
        </div>




    </div>
    )
}
export default Banner