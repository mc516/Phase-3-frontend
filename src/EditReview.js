import React from "react";
import {useState} from "react"

function EditReview({review}) {
    const [newReview, setNewReview] = useState(review)
    
    function handleChange(e){
        console.log(e.target.value)
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value
        })
    }

    console.log(newReview)

    return (
        <div className="edit-review">
            <form>
                <input
                    type="text"
                    name="rating"
                    autoComplete="off"
                    value={newReview.rating}
                    onChange={handleChange}
                />
                <br></br>
                <input 
                    type="text"
                    name="comment"
                    autoComplete="off"
                    value={newReview.comment}
                    onChange={handleChange}
                />
                <input type="submit" value="save"
                />
            </form>
        </div>
     
        
    )
}

export default EditReview