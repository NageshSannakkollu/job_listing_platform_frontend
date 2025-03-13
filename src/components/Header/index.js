import React from 'react'
import { Link } from "react-router-dom"

import "./index.css"

const Header = (props) => {
  const {userProfile} = props 
  console.log("UserPro:",userProfile)
  return (
    <nav className='nav_header_container'>
        <Link to="/" className='nav_link_item'><h3>Job Station</h3></Link>
        {userProfile === "admin" ? 
        <ul className='nav_links_container'>
            <Link to="/login">
              <li>
                 <button type='button' className='login_button'>Logout</button>
              </li>
            </Link>
            <Link to="/register">
              <li>
                  <button type='button' className='register_button'>Dashboard</button>
              </li>
            </Link>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1741658188/1645290269869_wp7bfi.jpg' alt='profile' className='profile_image'/>
        </ul>: 
        <ul className='nav_links_container'>
            <Link to="/login">
              <li>
                  <button type='button' className='login_button'>Login</button>
              </li></Link>
            <Link to="/register">
              <li>
                  <button type='button' className='register_button'>Register</button>
              </li>
            </Link>
        </ul>
        }
    </nav>
  )
}

export default Header