import React, { useEffect } from "react";
import Reviews from "./Reviews"
import { useState } from "react"

function RestaurantCard( {restaurantinfo, reviews, clients, handleUpdateReview, addReview, handleDeleteReview, handleDeleteRestaurant} ) {

    const {name, location, id} = restaurantinfo

    function handleDeleteClick() {
        console.log(`click ${id}`)
        fetch(`http://localhost:9292/restaurants/${id}`, {
            method:'DELETE'
        })

        handleDeleteRestaurant(id)

    }
        
    

    return (
        <div className="restaurant-card">
            <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZB1r0oUYrLuIYDFCt_yLMqFnC3Lh2PDYsw&usqp=CAU"
                alt={name}
            />
            <div><h2>{name}</h2></div>
            <div><h3>{location}</h3></div>

            { 
               <Reviews reviews={reviews} restaurantinfo={restaurantinfo} clients={clients} handleUpdateReview={handleUpdateReview} addReview={addReview} handleDeleteReview={handleDeleteReview}/> 
            }

            <button className="restarurant-delete" onClick={handleDeleteClick}>Delete</button>

        </div>     
    )
}

export default RestaurantCard