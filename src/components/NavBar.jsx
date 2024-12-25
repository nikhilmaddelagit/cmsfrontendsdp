import React from 'react'
import { Link} from 'react-router-dom';
import './navbar.css';



export default function NavBar() {
  return (
    <div>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">User Login</Link>
        <Link to="/adminlogin">Admin Login</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/aboutus">About Us</Link>


      </nav>
 
    </div>
  )
}
