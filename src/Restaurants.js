import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from 'react'

function Restaurants() {
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/restaurants")
        .then(res => res.json())
        .then(data => setRestaurants(data))
      }, [])

        
    return (
        <div>
            <h1>Restaurants</h1>
            { restaurants.map( restaurant => { return <RestaurantCard />})}
        </div>
    )
}

export default Restaurants