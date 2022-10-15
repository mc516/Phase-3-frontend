import React from "react";
import EditReview from "./EditReview"
import NewReview from "./NewReview"
import { useEffect, useState } from "react"

function Reviews( {reviews, restaurantinfo, handleUpdateReview, addReview, handleDeleteReview} ) {
    const [isReviewClicked, setIsReviewClicked] = useState(false)
    const [isEdit, setIsEdit] = useState(false) 
    const [isEditIndex, setIsEditIndex] = useState()

    const reviewsToDisplay = reviews.filter((review) => {return review.restaurant_id === restaurantinfo.id})

    function handleReviewClick(e){
        e.preventDefault()
        console.log('add review click')
        setIsReviewClicked((isReviewClicked) => !isReviewClicked)
    }
    
    function handleEditClick(review, index){
        console.log(review)
        console.log(index)
        setIsEditIndex(index)
        
        setIsEdit((isEdit) => !isEdit)
    }
    console.log(isEditIndex)
    function handleDeleteClick(review){
        if (window.confirm('Are you sure you wish to delete this item?')) 
        console.log(review)
        console.log(review.id)
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE",
        })

        handleDeleteReview(review.id)

    }

    return (
        <div>
            <h3 className="reviews">Reviews</h3>
          
            { 
                reviewsToDisplay.map((review, index) => 
                    { 
                        
                        return <ul key={review.id} className="reviews">
                            
                            <li>                        
                                {index === isEditIndex && isEdit ? (
                                    <EditReview review={review} handleUpdateReview={handleUpdateReview}
                                    setIsEdit={setIsEdit}/>
                                ) : (
                                    <span>
                                        <strong><p>{review.client.name} says:</p></strong>
                                        <p>{review.rating}/5</p>
                                        <p>{review.comment}</p>
                                    </span>
                                )
                            }
                            
                            <button onClick={() => handleEditClick(review, index)}>Edit</button>
                            <button onClick={() => handleDeleteClick(review)}>Delete</button> 

                            </li>
                        </ul> 
                       
                    }
                )
               
            }
            <br></br>

            {isReviewClicked ? 
                <NewReview restaurantinfo={restaurantinfo} addReview={addReview} setIsEdit={setIsEdit}/> 
                : null}
            <button onClick={handleReviewClick}>Add review</button>
        

        


        </div>
        
        
    )
}

export default Reviews