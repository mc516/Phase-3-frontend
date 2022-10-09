import React from "react";
import { useEffect, useState } from "react"

function Reviews( {reviews, restaurantinfo, clients} ) {
    const [isClicked, setIsClicked] = useState(false)
    
    const reviewsToDisplay = reviews.filter((review) => {return review.restaurant_id === restaurantinfo.id})

    // console.log(clients)
    // console.log(reviews)

    // const clientToDisplay = clients.filter(client => {return client.id === reviews.client_id})

    // console.log(clientToDisplay)
   
    function handleClick(e){
        e.preventDefault()
        console.log('click')
        setIsClicked(true)
    }
    

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
            <button onClick={handleClick}>Add review</button>
        

        


        </div>
        
        
    )
}

export default Reviews