import React, { useState } from 'react'
import { toast } from "react-toastify"
import { Link,useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import axios from "axios";

import "./index.css"

const defaultSkills= ['Javascript','ReactJs','HTML','CSS','Java','NodeJs','Python','SQL','MongoDB','WordPress']
const AddJobDetails = () => {

    const [jobDetails,setJobDetails] = useState({
        companyName:'',companySize:'11-50',addLogoUrl:"",jobPosition:"",monthlySalary:'',jobType:"Full Time",remoteOrOffice:'Remote',location:'',jobDescription:'',
        aboutCompany:'',information:''
    })
    const [selectedSkills,setSelectSkills] = useState([]);
    const navigate = useNavigate()


    const addJobHandler = async(event) => {
        event.preventDefault()
        const jobFullDetails = {...jobDetails,selectedSkills}
        console.log("jobDetails:",jobFullDetails)
        const response = await axios.post("https://67d25c961161f3c2ca952340--job-listing-backend.netlify.app/api/jobs",jobFullDetails)
        console.log("Response:",response.data)
        if(response.data.success){  
            Cookies.set('jwtToken', response.data.jwtToken, {expires: 30})
            toast.success(response.data.message)
            navigate("/")
        }else{
            toast.error(response.data.message)
        }
        
    }

    const selectSkillHandler = event => {
        const selectedValue = event.target.value 
        if(selectedValue && !selectedSkills.includes(selectedValue)){
            setSelectSkills([...selectedSkills,selectedValue])
        }
    }
    
  return (
    <div className='login_page_main_container'>
        <form className='job_description_inside_container' onSubmit={addJobHandler}>
        <div className='login_left_container'>
            <h2>Add job description</h2>
            <div className="job_description_title_container">
                <h4 className="side_title">Company Name</h4>
                <input type='text' placeholder='Enter your company name here' onChange={e => setJobDetails({...jobDetails,companyName:e.target.value})} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Add Logo URL</h4>
                <input type='text' placeholder='Enter the link' onChange={e => setJobDetails({...jobDetails,addLogoUrl:e.target.value})} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Job Position</h4>
                <input type='text' placeholder='Enter Job position' onChange={e => setJobDetails({...jobDetails,jobPosition:e.target.value})} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Monthly Salary</h4>
                <input type='text' placeholder='Enter Amount in rupees' onChange={e => setJobDetails({...jobDetails,monthlySalary:e.target.value})} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Job Type</h4>
                <select onChange={e => setJobDetails({...jobDetails,jobType:e.target.value})}>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </select>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Remote/Office</h4>
                <select onChange={e => setJobDetails({...jobDetails,remoteOrOffice:e.target.value})}>
                    <option value="Remote">Remote</option>
                    <option value="Office">Office</option>
                </select>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Location</h4>
                <input type='text' placeholder='Enter location' onChange={e => setJobDetails({...jobDetails,location:e.target.value})} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Job Description</h4>
                <textarea rows={2} cols={30} placeholder='Type the job description' onChange={e => setJobDetails({...jobDetails,jobDescription:e.target.value})} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">About Company</h4>
                <textarea  rows={2} cols={30} placeholder='Type about your company' onChange={e => setJobDetails({...jobDetails,aboutCompany:e.target.value})} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Skills Required</h4>
                <select onChange={selectSkillHandler}>
                    <option value='' disabled>Enter the must have skills</option>
                        {defaultSkills
                        .filter((skill) => !selectedSkills.includes(skill))
                        .map((skill,index) => (
                        <option key={index}>{skill}</option>
                    ))}
                </select>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Information</h4>
                <input type='text' placeholder='Enter the additional information' onChange={e => setJobDetails({...jobDetails,information:e.target.value})} className='email_input_job_description' required/>
            </div>
            <div className='cancel_sign_in_buttons_container'>
               <Link to="/"> 
                    <button type='button' className='cancel_button'>Cancel</button>
                </Link>
                <button type='submit' className='add_button'>Add Job</button>
            </div>
        </div>
        <div className='job_description_right_container'>
            <h3 className='your_personal_job_title'>Your Personal Job Finder</h3>
        </div>
        
        </form>
    </div>
  )
}

export default AddJobDetails