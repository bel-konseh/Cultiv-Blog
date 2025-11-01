
import { Link } from "react-router-dom"
import "./NotFound.css"


import React from 'react'

function NotFound() {
  return (
    <div className="not-found-container">
        <h2><span>Error 404:</span>  Sorry, The Requested was not found. Please go back to Home Screen</h2>
        
        <Link to="/" className="to-home">Proceed to Go Home</Link>
    </div>
  )
}

export default NotFound