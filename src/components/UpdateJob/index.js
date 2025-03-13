import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import { Link,useNavigate, useParams } from "react-router-dom"
import Cookies from "js-cookie"
import axios from "axios";

import "./index.css"

const defaultSkills= ['Javascript','ReactJs','HTML','CSS','Java','NodeJs','Python','SQL','MongoDB','WordPress']
const UpdateJob = () => {
    const [jobValues,setJobValues] =useState([]) 

    // const [jobValues,setJobValues] = useState({
    //     companyName:'',companySize:'11-50',addLogoUrl:"",jobPosition:"",monthlySalary:'',jobType:"Full Time",remoteOrOffice:'Remote',location:'',jobDescription:'',
    //     aboutCompany:'',information:''
    // })
    const [selectedSkills,setSelectSkills] = useState([]);
    const navigate = useNavigate()

    const {id} = useParams()
    console.log("updatedId:",id)
    useEffect(() => {
        const getSpecificJOb = async() => {
            const response = await axios.get(`https://67d25c961161f3c2ca952340--job-listing-backend.netlify.app/api/jobs/${id}`)
            const data = await response.data;
            console.log("Data:",data)
            setJobValues([data])
        }
        getSpecificJOb()
    },[])

        const updateHandler = async(event) => {
        event.preventDefault()
        const jobDetailsInfo = jobValues[0]
        console.log("jobDetailsInfo:",jobDetailsInfo)
        const response = await axios.put(`https://67d25c961161f3c2ca952340--job-listing-backend.netlify.app/api/jobs/${id}`,jobValues[0])
            const data = await response.data;
            console.log()
            if(data.success){
                toast.success(data.message)
                navigate("/")
            }
            toast.error(data.message)
    } 

    const selectSkillHandler = event => {
        const selectedValue = event.target.value 
        if(selectedValue && !selectedSkills.includes(selectedValue)){
            setSelectSkills([...selectedSkills,selectedValue])
        }
    }
    

  return (
    <div className='login_page_main_container'>
        <form className='job_description_inside_container' onSubmit={updateHandler}>
        {jobValues.map(eachItem => {
            return (
                <div className='login_left_container'>
            <h2>Add job description</h2>
            <div className="job_description_title_container">
                <h4 className="side_title">Company Name</h4>
                <input type='text' value={eachItem.companyName} onChange={e => setJobValues([{...jobValues[0],companyName:e.target.value}])} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Add Logo URL</h4>
                <input type='text' value={eachItem.addLogoUrl} onChange={e => setJobValues([{...jobValues[0],addLogoUrl:e.target.value}])} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Job Position</h4>
                <input type='text' value={eachItem.jobPosition} onChange={e => setJobValues([{...jobValues[0],jobPosition:e.target.value}])} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Monthly Salary</h4>
                <input type='text' value={eachItem.monthlySalary} onChange={e => setJobValues([{...jobValues[0],monthlySalary:e.target.value}])} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Job Type</h4>
                <select value={eachItem.jobType} onChange={e => setJobValues([{...jobValues[0],jobType:e.target.value}])}>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                </select>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Remote/Office</h4>
                <select value={eachItem.remoteOrOffice} onChange={e => setJobValues([{...jobValues[0],remoteOrOffice:e.target.value}])}>
                    <option value="Remote">Remote</option>
                    <option value="Office">Office</option>
                </select>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Location</h4>
                <input type='text' value={eachItem.location} onChange={e => setJobValues([{...jobValues[0],location:e.target.value}])} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Job Description</h4>
                <textarea rows={2} cols={30} value={eachItem.jobDescription} onChange={e => setJobValues([{...jobValues[0],jobDescription:e.target.value}])} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">About Company</h4>
                <textarea  rows={2} cols={30} value={eachItem.aboutCompany} onChange={e => setJobValues([{...jobValues[0],aboutCompany:e.target.value}])} className='email_input_job_description' required/>
            </div>
            <div className="job_description_title_container">
                <h4 className="side_title">Skills Required</h4>
                <select value={eachItem.selectedSkills} onChange={selectSkillHandler}>
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
                <input type='text' value={eachItem.information} onChange={e => setJobValues([{...jobValues[0],information:e.target.value}])} className='email_input_job_description' required/>
            </div>
            <div className='cancel_sign_in_buttons_container'>
                <button type='submit' className='add_button'>Update Job</button>
            </div>
        </div>
            )
        })}
        
        <div className='job_description_right_container'>
            <h3 className='your_personal_job_title'>Your Personal Job Finder</h3>
        </div>
        
        </form>
    </div>
  )
}

export default UpdateJob