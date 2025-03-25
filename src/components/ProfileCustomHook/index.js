import  { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const ProfileCustomHook = () => {
    const [userProfile,setUserProfile] = useState([])
    const jwtToken = Cookies.get('jwtToken')
    useEffect(() => {
            const getProfileDetails = async() => {
            try {
                const response = await fetch("http://localhost:3025/api/auth/profile",{
                    method:'GET',
                    headers:{
                        "Authorization":`Bearer ${jwtToken}`,
                        'Content-Type':"application/json"
                    }
                });
                const data = await response.json();
                // console.log("Prof:",data.user)
                setUserProfile(data.user)

            } catch (error) {
                console.error('Error Fetching profile Details')
            }
        }
        getProfileDetails()
    },[])

    // console.log("UserProfileUnit:",userProfile)

  return userProfile
}

export default ProfileCustomHook