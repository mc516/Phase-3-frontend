import React from "react";

function Reviews( {reviews, restaurantinfo} ) {

    const reviewsToDisplay = reviews.filter((review) => {return review.restaurant_id === restaurantinfo.id})

    console.log(reviewsToDisplay)

    // console.log(reviews)

    return (
        <div>
            <h3 className="reviews">Reviews</h3>
            { 
                reviewsToDisplay.map((review) => 
                    { return <ol key={review.id} className="reviews">
                        
                        <li> 
                            {review.rating }/5
                            <br></br>
                            {review.comment}
                            </li>
                        

                    </ol> 
                    }
                ) 
            }

        </div>
        
        
    )
}

export default Reviews