import React from "react";
import {Link} from "react-router-dom"

function PageNotFound() {
  return (
    <div className="jumbotron">
        <h1>Page not found</h1>
        <p>Back to <Link to="/">HomePage</Link></p>
    </div>
  )
}
export default PageNotFound;