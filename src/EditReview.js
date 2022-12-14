import React from "react";
import {useState} from "react"

function EditReview({review, handleUpdateReview, setIsEdit}) {
    const {id} = review
    const [newReview, setNewReview] = useState(review)
    
    function handleChange(e){
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        // e.preventdefault()
        fetch(`http://localhost:9292/reviews/${id}`, {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: newReview.rating,
                comment: newReview.comment
            })
        })
        .then(res => res.json())
        .then(updatedReview => {handleUpdateReview(updatedReview)}) 
        setIsEdit(false)   
    }

    return (
        <div className="edit-review">
            <form onSubmit={handleSubmit}>
                {<strong><p>{review.client.name} says:</p></strong>}
                <input
                    type="text"
                    name="rating"
                    autoComplete="off"
                    value={newReview.rating}
                    onChange={handleChange}
                /> / 5

                <br></br>
                
                <input 
                    type="text"
                    name="comment"
                    autoComplete="off"
                    value={newReview.comment}
                    onChange={handleChange}
                />
                <input type="submit" value="save"/>
            </form>
        </div>           
    )
}

export default EditReview