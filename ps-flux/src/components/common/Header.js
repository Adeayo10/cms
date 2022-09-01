import React from "react";

function Header() {
  return (
    <nav className="navbar-dark bg-light">
      <a href="/">Home</a> | {" "}<a href="/courses">Courses</a> | <a href="/about">About</a> 

    </nav>
  );
}

export default Header;
