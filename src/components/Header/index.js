import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import "./index.css"

const Header = (props) => {
  const {userProfile} = props 
  // console.log("userProfile:",userProfile)
  const jwtToken = Cookies.get("jwtToken")
  const navigate = useNavigate()
  const logoutButton = () => {
    Cookies.remove("jwtToken")
    // console.log(jwtToken)
    navigate("/login")
  }
  return (
    <nav className='nav_header_container'>
        <Link to="/" className='nav_link_item'><h3>Job Station</h3></Link>
        {jwtToken === undefined ? 
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
            :
            <div className='admin_user_header_nav_links_container'>
              <li className='login_button_item'>
                 <button type='button' className='login_button' onClick={logoutButton}>Logout</button>
              </li>
              {userProfile.role === "admin" ?
              <ul className='nav_link_with_users_container'>
                <Link to="/users_list">
                    <li>
                        <button type='button' className='register_button user_list_item'>Users</button>
                    </li>
                </Link>
                    <div className='user_profile_username_container'>
                      <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1741658188/1645290269869_wp7bfi.jpg' alt='profile' className='profile_image'/>
                      <p className='username'>{userProfile.username}[Admin]</p>
                    </div>
                </ul>
        
              :
                 <ul className='nav_links_container'>
                     <div className='user_profile_username_container'>
                       <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1741658188/1645290269869_wp7bfi.jpg' alt='profile' className='profile_image'/>
                       <p className='username'>{userProfile.username}[User]</p>
                     </div>
                 </ul>
              }
            </div>
        }
    </nav>
  )
}

export default Header