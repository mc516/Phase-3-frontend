import React, { useEffect } from "react";
import Reviews from "./Reviews"
import { useState } from "react"

function RestaurantCard( {restaurantinfo, reviews} ) {
    const {name, location} = restaurantinfo
    
    const [isClicked, setIsClicked] = useState(false)
    

    function handleClick(e) {
        setIsClicked((isClicked) => !isClicked)
        console.log(restaurantinfo)
    }

    return (
        <div className="restaurant-card" onClick={handleClick}>
            <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZB1r0oUYrLuIYDFCt_yLMqFnC3Lh2PDYsw&usqp=CAU"
                alt={name}
            />
            <div><h2>{name}</h2></div>
            <div><h3>{location}</h3></div>

            {isClicked ? <Reviews reviews={reviews} restaurantinfo={restaurantinfo}/> : null}


        </div>     
    )
}

export default RestaurantCard