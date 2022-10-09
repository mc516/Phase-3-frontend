import React from "react";

function RestaurantCard( {restaurantinfo} ) {
    const {name, location} = restaurantinfo
    return (
        <div className="restaurant-card">
           
            <img  
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZB1r0oUYrLuIYDFCt_yLMqFnC3Lh2PDYsw&usqp=CAU"
                alt={name}
            />
            
             <div><h2>{name}</h2></div>
             <div><h3>{location}</h3></div>
        </div>     
    )
}

export default RestaurantCard