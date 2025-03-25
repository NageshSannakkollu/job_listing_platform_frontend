import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import ProfileCustomHook from '../ProfileCustomHook'
import UserItem from '../UserItem'


import "./index.css"
const UsersList = () => {
    const [usersList,setUsersList] = useState([])
    const userProfile = ProfileCustomHook();
    // console.log("userProfileData:",userProfile)
    useEffect(() => {   
        const getUsers = async() => {
            const response = await axios.get("http://localhost:3025/api/all-users")
            const usersResponse = await response;
            setUsersList(usersResponse.data.users)
        }
        getUsers()
    },[])
    
  return (
    <>   
        <Header userProfile={userProfile}/>
        <div className='main_landing_page_container'>
            <h3 className='users_list_title'>Users List</h3>
            <div className='user_details_main_container'>
            <ul className='user_details_heading_titles_container'>
                <li className='user_id'>ID</li>
                <li className='user_id user_username'>Username</li>
                <li className='user_id user_email'>Email</li>
                <li className='user_id user_username'>Mobile</li>
                <li className='user_id user_username'>Role</li>
            </ul>
            <hr/>
            <ul className='user_details_with_role_container'>
                {usersList.map(eachUser => (
                    <UserItem userDetails={eachUser} key={eachUser.id} />
                ))}
            </ul>
        </div>
        </div>
    </>
  )
}

export default UsersList