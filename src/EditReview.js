import React from "react";
import {useState} from "react"

function EditReview({review}) {
   
    
    function handleChange(e){
        console.log(e.target.value)
       
    }

    return (
        <div className="edit-review">
            <form>
                <input
                    type="text"
                    name="rating"
                    autoComplete="off"
                    value={review.rating}
                    onChange={handleChange}
                />
                <br></br>
                <input 
                    type="text"
                    name="comment"
                    autoComplete="off"
                    value={review.comment}
                    onChange={handleChange}
                />
                <input type="submit" value="save"
                />
            </form>
        </div>
     
        
    )
}

export default EditReview