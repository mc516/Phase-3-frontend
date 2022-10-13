import React, { useEffect } from "react";
import Reviews from "./Reviews"
import { useState } from "react"

function RestaurantCard( {restaurantinfo, reviews, clients, handleUpdateReview} ) {
    const {name, location} = restaurantinfo
   
    

    return (
        <div className="restaurant-card">
            <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZB1r0oUYrLuIYDFCt_yLMqFnC3Lh2PDYsw&usqp=CAU"
                alt={name}
            />
            <div><h2>{name}</h2></div>
            <div><h3>{location}</h3></div>

            {<Reviews reviews={reviews} restaurantinfo={restaurantinfo} clients={clients} handleUpdateReview={handleUpdateReview}/>}

            

        </div>     
    )
}

export default RestaurantCard