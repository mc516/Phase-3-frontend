import React from "react";

function Reviews( {reviews, restaurantinfo} ) {

    const reviewsToDisplay = reviews.filter((review) => {return review.restaurant_id === restaurantinfo.id})

    console.log(reviewsToDisplay)

    // console.log(reviews)

    return (
        <div>
            <h3>reviews</h3>
            { 
                reviewsToDisplay.map((review) => { return <h3>{review.comment}</h3>}) 
            }

        </div>
        
        
    )
}

export default Reviews