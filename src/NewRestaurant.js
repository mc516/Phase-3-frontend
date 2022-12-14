import React from "react";
import { useState } from "react"

function NewRestaurant( {addRestaurant, setIsClicked} ) {
    const [restaurant, setRestaurant] = useState({
        name: "",
        location: "",
    })

    function handleChange(e) {
        setRestaurant({
            ...restaurant,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(restaurant)
        })
        .then(res => res.json())
        .then(NewRestaurant => {
            addRestaurant(NewRestaurant)
            setRestaurant({
                name: "",
                location: "",
            })
        })
        setIsClicked(false)
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <img  
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZB1r0oUYrLuIYDFCt_yLMqFnC3Lh2PDYsw&usqp=CAU" alt="fork and knives"
                 />
                 <br></br>

                <label htmlFor="name">Name: </label>
                <input 
                    id="name"
                    type="text"
                    autoComplete="off"
                    value={restaurant.name}
                    onChange={handleChange}
                />
<br></br>
                <label htmlFor="location">Location: </label>
                <input 
                    id="location"
                    type="text"
                    autoComplete="off"
                    value={restaurant.location}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewRestaurant