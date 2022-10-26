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

        fetch("http://localhost:9292/reviews")
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
      }, [])

    function handleClick(e) {
        setIsClicked((isClicked) => !isClicked)
    }

    function addRestaurant(NewRestaurant){
        setRestaurants([...restaurants, NewRestaurant])
    }

    function addReview(newReview) {
        setReviews([...reviews, newReview])
    }

    function handleUpdateReview(updateReview) {
        const updatedReviews = reviews.map((review) => {
            if (review.id === updateReview.id) {
                return updateReview;
            } else {
                return review
            }
        });
        setReviews(updatedReviews)
    }

    function handleDeleteReview(id) {
        const updatedReviews = reviews.filter((review) => review.id !== id)
        setReviews(updatedReviews)
    }

    function handleDeleteRestaurant(id) {
        const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id)
        setRestaurants(updatedRestaurants)
    }       
   
    return (
        <div>
            <h1>Restaurants</h1>         
            { restaurants.map( restaurant => { 
                return <RestaurantCard 
                    key={restaurant.id}
                    reviews={reviews}
                    restaurantinfo={restaurant} 
                    handleUpdateReview={handleUpdateReview}
                    handleDeleteReview={handleDeleteReview}
                    handleDeleteRestaurant={handleDeleteRestaurant}
                    addReview={addReview}
                    />
                })
            }
            {<button onClick={handleClick}>Add Restaurant</button>}
            { isClicked ? <NewRestaurant addRestaurant={addRestaurant} setIsClicked={setIsClicked}/> : null}
        </div>
    )
}

export default RestaurantList