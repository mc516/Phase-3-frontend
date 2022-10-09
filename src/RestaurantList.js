import React from "react";
import RestaurantCard from "./RestaurantCard";
import NewRestaurant from   "./NewRestaurant"
import { useState, useEffect} from 'react'

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([])
    const [reviews, setReviews] = useState([])
    const [clients, setClients] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/restaurants")
        .then(res => res.json())
        .then(data => setRestaurants(data))

        fetch("http://localhost:9292/reviews")
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })

        fetch("http://localhost:9292/clients")
        .then(res => res.json())
        .then(data => setClients(data))

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
                    restaurantinfo={restaurant} 
                    clients={clients}
                    />
                })
            }

            {<button onClick={handleClick}>add new</button>}
            { isClicked ? <NewRestaurant addRestaurant={addRestaurant}/> : null}
        </div>
    )
}

export default RestaurantList