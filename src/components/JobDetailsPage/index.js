import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatDistanceToNow } from "date-fns"
import { GrCurrency } from "react-icons/gr";
import { PiSuitcaseSimple } from "react-icons/pi";
import Header from '../Header'
import axios from 'axios'

import "./index.css"

const JobDetailsPage = () => {
  const [jobInfo,setJobInfo] = useState([])

  const {id} = useParams()
  useEffect(() => {
    const getSpecificJob = async() => {
      const response = await axios.get(`http://localhost:3025/api/jobs/${id}`)
      setJobInfo(response.data)
    }
    getSpecificJob()
  },[id])

  console.log("jobInfo:",jobInfo)
  const {aboutCompany,companyName,addLogoUrl,jobType,jobPosition,jobDescription,remoteOrOffice,location,selectedSkills,companySize,information,monthlySalary,created_at} = jobInfo
  // const jobPostTime = formatDistanceToNow(new Date(created_at))
  // // console.log("jobTime:",created_at)
  // const selectedSkillsSet = JSON.parse(selectedSkills)
  // console.log("selectedSkills:",selectedSkillsSet)
  return (
    <div>
        <Header/>
        <div className='job_details_main_page'>
            <div className='job_information_title_container'>
                <h2>{companyName}.pvt.ltd</h2>
            </div>
            <div className='job_details_inside_container'> 
              <div className='admin_page_job_info_first_line'>
                    <p>2days ago</p>
                    <p>{jobType}</p>
                    <img src={addLogoUrl} alt={companyName} className='logo_image'/>
                    <p>{companyName}</p>
                </div> 
                <div className='job_position_edit_job_container'>
                  <h1>{jobPosition}</h1>
                  <button type='button' className='edit_button'>Edit Job</button>
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
              </ul> */}
            <h4>Additional Information</h4>
            <p>{information}</p>
            </div>
        </div>
    </div>
  )
}

export default JobDetailsPage