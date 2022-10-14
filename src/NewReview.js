import React from "react";
import {useState} from "react"

function NewReview() {
    const [newReview, setNewReview] = useState({})

    function handleChange(e) {
        console.log(e.target.value)
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit new review!')
        console.log(newReview)
    }

    return (
        <div className="new-review" onSubmit={handleSubmit}>
            <form>
                <label>Name: </label>
                <input 
                    type="text"
                    name="name"
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
                {/* <input
                    type="text"
                    name="rating"
                    autoComplete="off"
                    value={newReview.rating}
                    onChange={handleChange}
                /> /5 */}

                <br></br>

                <label>Comment: </label>
                <input 
                    type="text"
                    name="comment"
                    value={newReview.comment}
                    onChange={handleChange}
                />

                <input type="submit" value="enter"/>
            </form>
        </div>
    )
}

export default NewReview