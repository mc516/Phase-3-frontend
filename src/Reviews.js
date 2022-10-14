import React from "react";
import EditReview from "./EditReview"
import NewReview from "./NewReview"
import { useEffect, useState } from "react"

function Reviews( {reviews, restaurantinfo, clients, handleUpdateReview} ) {
  

    const [isReviewClicked, setIsReviewClicked] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    
    const reviewsToDisplay = reviews.filter((review) => {return review.restaurant_id === restaurantinfo.id})

    // console.log(clients)
    // console.log(reviews)

    // const clientToDisplay = clients.filter(client => {return client.id === reviews.client_id})

    // console.log(clientToDisplay)
   
    function handleReviewClick(e){
        e.preventDefault()
        console.log('add review click')
        setIsReviewClicked((isReviewClicked) => !isReviewClicked)
    }
    
    function handleEditClick(e){
        setIsEdit((isEdit) => !isEdit)
    }

    function handleDeleteClick(){
        console.log('delete click')
    }

    return (
        <div>
            <h3 className="reviews">Reviews</h3>
          
            { 
                reviewsToDisplay.map((review) => 
                    { return <ol key={review.id} className="reviews">
                        <li> 
                            
                          
                            {isEdit ? (
                                <EditReview review={review} handleUpdateReview={handleUpdateReview}
                                setIsEdit={setIsEdit}/>
                            ) : (
                                <span>
                                    <p>{review.rating}/5</p>
                                    <p>{review.comment}</p>
                                </span>
                            )


                            }

                            <button onClick={handleEditClick}>Edit</button>
                            <button onClick={handleDeleteClick}>Delete</button> 
                        </li>
                        </ol> 
                       
                    }
                )
               
            }
            <br></br>

            {isReviewClicked ? <NewReview restaurantinfo={restaurantinfo}/> : null}
            <button onClick={handleReviewClick}>Add review</button>
        

        


        </div>
        
        
    )
}

export default Reviews