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

    function addReview(newReview) {
        setReviews([[...reviews, newReview]])
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
        
   
    return (
        <div>
            <h1>Restaurants</h1>
            
            { restaurants.map( restaurant => { 
                return <RestaurantCard 
                    key={restaurant.id}
                    reviews={reviews}
                    restaurantinfo={restaurant} 
                    handleUpdateReview={handleUpdateReview}
                    addReview={addReview}
                    />
                })
            }

            {<button onClick={handleClick}>Add Restaurant</button>}
            { isClicked ? <NewRestaurant addRestaurant={addRestaurant}/> : null}
        </div>
    )
}

export default RestaurantList