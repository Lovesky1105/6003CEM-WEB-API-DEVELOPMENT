import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navBar'>
    <div className="navbar-logo">
   
         <ul className='navbar-menu'>
         <li><Link to="/login">Login</Link></li>
         <li><Link to="/signUp">Sign Up</Link></li>
         <li><Link to="/home">Home</Link></li>
         <li><Link to="/drinks">Drinks</Link></li>
         <li><Link to="/recipe">Recipe</Link></li>
         <li><Link to="/food">Food</Link></li>
         <li><Link to="/profile">Profile</Link></li>
         </ul>
    </div>
    </div>
  )
}

export default Navbar