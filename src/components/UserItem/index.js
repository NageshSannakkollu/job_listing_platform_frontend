import React from 'react'

import './index.css'
const UserItem = (props) => {
    const {userDetails} = props;
    const {id,email,username,mobile,role} = userDetails
    console.log("userDetails:",userDetails)
  return (
    <li className='user_item_list_container'>
        <p className='user_id'>{id}</p>
        <p className='user_username username_item'>{username}</p>
        <p className='user_email'>{email}</p>
        <p className='user_username'>{mobile}</p>
        <p className='user_username'>{role}</p>
    </li>
  )
}

export default UserItem