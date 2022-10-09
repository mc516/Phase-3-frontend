import React from "react";
import RestaurantCard from "./RestaurantCard";
import NewRestaurant from   "./NewRestaurant"
import { useState, useEffect} from 'react'

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([])
    const [reviews, setReviews] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/restaurants")
        .then(res => res.json())
        .then(data => setRestaurants(data))
      }, [])

    useEffect(() => {
        fetch("http://localhost:9292/reviews")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    }, [])

    function handleClick(e) {
        console.log('click')
        // e.currentTarget.disabled = true
        setIsClicked((isClicked) => !isClicked)
    }

    function addRestaurant(NewRestaurant){
        setRestaurants([...restaurants, NewRestaurant])
    }
        
    return (
        <div>
            <h1>Restaurants</h1>
            { restaurants.map( restaurant => { 
                return <RestaurantCard 
                    key={restaurant.id}
                    reviews={reviews}
                    restaurantinfo={restaurant} />
                })
            }

            {<button onClick={handleClick}>add new</button>}
            { isClicked ? <NewRestaurant addRestaurant={addRestaurant}/> : null}
        </div>
    )
}

export default RestaurantList