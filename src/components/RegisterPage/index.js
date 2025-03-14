import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import "./index.css"
import axios from 'axios'
import { toast } from 'react-toastify'
const RegisterPage = () => {
    const [registerValues,setRegValues] = useState({name:"",email:'',password:''})
    const navigate = useNavigate()

    const registerHandler = async(event) => {
        event.preventDefault()
        console.log("registerValues:",registerValues)
        const response = await axios.post("https://job-list-backend.netlify.app/api/auth/signup",registerValues)
        console.log("RegResponse:",response);
        if(response.data.success){
            toast.success(response.data.message)
            navigate("/login")
        }else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='login_page_main_container'>
            <form className='login_page_inside_container' onSubmit={registerHandler}>
            <div className='login_right_container'>
                <h3 className='your_personal_job_title'>Your Personal Job Finder</h3>
            </div>
            <div className='login_left_container'>
            <div className='login_page_titles_container'>
                <h2>Create an account</h2>
                <p className='job_finder_para'>Your Personal job finder is here</p>
            </div>
                <input type='text' placeholder='Name' onChange={e => setRegValues({...registerValues,name:e.target.value})} className='email_input' required/>
                <input type='email' placeholder='Email' onChange={e => setRegValues({...registerValues,email:e.target.value})} className='email_input' required/>
                <input type='number' placeholder='Mobile' onChange={e => setRegValues({...registerValues,mobile:e.target.value})} className='email_input' required/>
                <input type='text' placeholder='Password' onChange={e => setRegValues({...registerValues,password:e.target.value})} className='email_input' required/>
                <div className='terms_policy_checkbox_container'>
                    <input type='checkbox' id="checkbox" />
                    <label htmlFor='checkbox'>By Creating an account, I agree to our terms of use and privacy policy</label>
                </div>
                <button type='submit' className='submit_button create_acc_btn'>Create Account</button>
                <p className='dont_have_acc'>Already have an account? <Link to="/login" className='sign_up_link'>Sign In</Link> </p>
            </div>
            
            
            </form>
        </div>
  )
}

export default RegisterPage
