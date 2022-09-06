import React from "react";
import { NavLink } from 'react-router-dom'

function Header() {
 let activeStyle = {color:"whitesmoke"};
  return (
    <nav className="navbar-dark bg-dark">
      <NavLink to="/" exact activeStyle={activeStyle}>Home
      </NavLink> 
       {" |  "}
       <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink> 
       {" | "} 
       <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </nav>
  );
}

export default Header;
