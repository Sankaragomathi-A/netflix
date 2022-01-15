import React from "react";
import './navbar.css';

import SearchIcon from '@material-ui/icons/Search'
import StorefrontIcon from '@material-ui/icons/Storefront'
import NotificationsIcon from '@material-ui/icons/Notifications'






 const Navbar=()=>{
     return(
         <div className="navbar">
             <span><img className="navbar__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt=""></img></span>
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>Latest</span>
            <span>My list</span>
            <span>Kids</span>
            <span><SearchIcon/></span>
            <span><NotificationsIcon/></span>
            <span><StorefrontIcon/></span>

        
        
         </div>
     )
 }
 export default Navbar