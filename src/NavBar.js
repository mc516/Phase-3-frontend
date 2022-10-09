import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink className="nav-links" to="/">Home</NavLink>
            <NavLink className="nav-links" to="/restaurants">Restaurants</NavLink>
        </nav>
    )
}

export default NavBar