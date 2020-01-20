import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <span className="logo">YouTube</span>{" "}
            <Link to="/">Home</Link>{" "}
            <Link to="/about">About</Link>{" "}
        </nav>
    )
}

export default Navbar;