import React from "react";
import {useState} from "react"

function NewReview({restaurantinfo, addReview, setIsReviewClicked}) {
    const {id} = restaurantinfo

    const [newReview, setNewReview] = useState({
        name: "",
        rating:"",
        comment:"",
        restaurant_id: id,
    })

    function handleChange(e) {
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/reviews/`, {
            method:"POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        }) 
        .then(res => res.json())
        .then(newReview => {
            console.log(newReview)
            addReview(newReview)  
        })
        setIsReviewClicked(false)
    }

    return (
        <div className="new-review">
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={newReview.name}
                    onChange={handleChange}
                />
                <br></br>
                <label>Rating: </label>
                <select
                    name="rating"
                    value={newReview.rating}
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>        
                </select> /5
            
                <br></br>

                <label>Comment: </label>
                <input 
                    type="text"
                    name="comment"
                    autoComplete="off"
                    value={newReview.comment}
                    onChange={handleChange}
                />

                <input type="submit" value="enter"/>
            </form>
        </div>
    )
}

export default NewReview