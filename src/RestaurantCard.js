import React from "react";

function RestaurantCard( {restaurantinfo} ) {
    const {name, location} = restaurantinfo
    return (
        <div className="restaurant-card">
            <h1>Test</h1>
            <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZB1r0oUYrLuIYDFCt_yLMqFnC3Lh2PDYsw&usqp=CAU"
                alt={name}
            />
            
             <div>{name}</div>
             <div>{location}</div>
        </div>     
    )
}

export default RestaurantCard