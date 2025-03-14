import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatDistanceToNow,parseISO } from "date-fns"
import { GrCurrency } from "react-icons/gr";
import { PiSuitcaseSimple } from "react-icons/pi";
import Header from '../Header'
import axios from 'axios'
import Cookies from 'js-cookie'

import "./index.css"

const JobDetailsPage = () => {
  const [jobInfo,setJobInfo] = useState([])
  const [userProfile,setUserProfile] = useState("")
  const {id} = useParams()

  const jwtToken = Cookies.get("jwtToken")
  useEffect(() => {
    const getProfileDetails = async() => {
            try {
                const response = await fetch("https://job-list-backend.netlify.app/api/auth/profile",{
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

    const getSpecificJob = async() => {
      try {
          const response = await axios.get(`https://job-list-backend.netlify.app/api/jobs/${id}`,{
            method:"GET",
            headers:{
                        "Authorization":`Bearer ${jwtToken}`,
                        'Content-Type':"application/json"
                    }
            })
          console.log("GettingSpecificJob:",response.data)
          setJobInfo(response.data)
      } catch (error) {
        console.error(`Error fetching job details`)
      }
      // const response = await axios.get(`http://localhost:3025/api/jobs/${id}`)
      // setJobInfo(response.data)
    }
    getSpecificJob()
  },[id])

  
  const {aboutCompany,companyName,addLogoUrl,jobType,jobPosition,jobDescription,remoteOrOffice,location,selectedSkills,companySize,information,monthlySalary,created_at} = jobInfo
  // const jobPostTime = formatDistanceToNow(new Date(parseISO(`${created_at}`)))
  console.log("jobPostTime:",created_at)
  // console.log(JSON.parse(selectedSkills))
  // const selectedSkillsSet =selectedSkills
  // console.log("selectedSkills:", JSON.parse(selectedSkillsSet))
  return (
    <div>
        <Header userProfile={userProfile}/>
        <div className='job_details_main_page'>
            <div className='job_information_title_container'>
                <h2>{companyName}.pvt.ltd</h2>
            </div>
            <div className='job_details_inside_container'> 
              <div className='admin_page_job_info_first_line'>
                    <p>{created_at}</p>
                    <p>{jobType}</p>
                    <img src={addLogoUrl} alt={companyName} className='logo_image'/>
                    <p>{companyName}</p>
                </div> 
                <div className='job_position_edit_job_container'>
                  <h1>{jobPosition}</h1>
                  {jwtToken !== undefined && userProfile.role === 'admin' && 
                  <Link to={`/update/${id}`}>
                        <button type='button' className='edit_details_button'>Edit Job</button>
                    </Link>
                  }
                </div>
                <p>{location}| india</p>
                <div className='stipend_duration_container'>
                  <div>
                    <GrCurrency/>
                    <p>Rs.{monthlySalary}/month</p>
                  </div>
                  <div>
                    <PiSuitcaseSimple/>
                    <p>6 Months</p>
                  </div>
                </div>
                <div>
                    <h4>About Company</h4>
                    <p>{aboutCompany}</p>
                </div>
                <div>
                    <h4>About Job/Internship</h4>
                    <p>{jobDescription}</p>
                </div>
                <h4>Skill(s) required</h4>
                  {/* <ul className='skill_set_info_container'>
                  {selectedSkillsSet.map((eachOne,index) => {
                      return(
                          <li className='each_skill_title' key={index}>{eachOne}</li>
                      )
                  })}
              </ul>  */}
            <h4>Additional Information</h4>
            <p>{information}</p>
            </div>
        </div>
    </div>
  )
}

export default JobDetailsPage