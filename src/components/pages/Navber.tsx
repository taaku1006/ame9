import React from "react";
import {Link} from "react-router-dom";
import './Navber.css';

const Navbar = () =>{
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/page1">Rainfall</Link>
            <Link to="/page2">Temperature</Link>
        </nav>
    );
};

export default Navbar;