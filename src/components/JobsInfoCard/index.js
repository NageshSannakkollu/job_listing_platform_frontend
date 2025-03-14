import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineCurrencyRupee } from "react-icons/md";

import "./index.css"


const JobsInfoCard = (props) => {
    const {jobInfoDetails,userProfile,deleteJob} = props
    const {id,companyName,addLogoUrl,jobType,remoteOrOffice,location,selectedSkills,companySize,monthlySalary} = jobInfoDetails
    const selectedSkillsSet = JSON.parse(selectedSkills)
    // console.log("userProdield:",userProfile)
    const clickOnDelete = () =>{
        deleteJob(id)
    }
  return (
    <li className='search_jobs_main_container job_info_item'>
        <img src={addLogoUrl} alt={companyName} className='company_info_logo'/>
        <div className='company_name_location_job_type_container'>
            <p>{companyName}</p>
            <div className='size_rupee_location_container'>
                <div className='company_size_rupee_location_container'>
                    <AiOutlineTeam />
                    <p className='location_title'>{companySize}</p>
                </div>
                <div className='size_rupee_location_container'>
                    <MdOutlineCurrencyRupee/>
                    <p className='location_title'>{monthlySalary}</p>
                </div>
                <div className='size_rupee_location_container'>
                    <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1741681774/Flag_of_India_iqxpbq.svg' alt="india" className='india_logo'/>
                    <p className='location_title'>{location}</p>
                </div>
            </div>
            <div className='size_rupee_location_container remote_office_job_type_container'>
                <p className='remote_office_title'>{remoteOrOffice}</p>
                <p>{jobType}</p>
            </div>
        </div>
        <div>
            <ul className='skill_set_info_container'>
                {selectedSkillsSet.map((eachOne,index) => {
                    return(
                        <li className='each_skill_title' key={index}>{eachOne}</li>
                    )
                })}
            </ul>
            <div className='view_details_button_container'> 
            <div>
                {userProfile === undefined || userProfile.role==='user' ? 
                <Link to={`/jobDetails/${id}`} className='job_link_item'>
                    <button type='button' className='view_details_button'>View Details</button>
                </Link>
                :
                <>
                {userProfile.role ==="admin" &&
                <div className='admin_view_details_button_container'>  
                    <Link to={`/update/${id}`}>
                        <button type='button' className='edit_details_button'>Edit Job</button>
                    </Link>
                    <Link to={`/jobDetails/${id}`} className='job_link_item'>
                        <button type='button' className='view_details_button'>View Details</button>
                    </Link>
                   <button type='button' className='clear_filter_button' onClick={clickOnDelete}>Delete</button>
                </div> 
                }
                </>
                }    
            </div>
            </div>
        </div>
    </li>
   
  )
}

export default JobsInfoCard