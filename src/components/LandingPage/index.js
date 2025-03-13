import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { CiSearch } from "react-icons/ci";

import "./index.css"
import JobsInfoCard from '../JobsInfoCard';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import axios from 'axios';

const skillSet = [
    {
        id:1,
        skillName:"HTML"
    },
    {
        id:2,
        skillName:"CSS"
    },
    {
        id:3,
        skillName:"Javascript"
    },
    {
        id:4,
        skillName:"Java"
    },
    {
        id:5,
        skillName:"ReactJs"
    },
    {
        id:6,
        skillName:"NodeJs"
    },
]

const sampleJobsListInfo = [
    {
        id:1,
        companyName:"Sample1",
        companyLogoUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1724769036/chatbot_hufqkl.png",
        jobPosition:"Frontend Developer",
        jobType:"Full-Time",
        remoteOffice:"Remote",
        location:"Bangalore",
        skillsRequired:["Frontend","HTML","CSS","JavaScript"],
        companySize:"11-50",
        salary:"50,000"
    },
    {
        id:2,
        companyName:"Sample2",
        companyLogoUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1724769036/chatbot_hufqkl.png",
        jobPosition:"WordPress Developer",
        jobType:"Part Time",
        remoteOffice:"Office",
        location:"Delhi",
        skillsRequired:["Frontend","HTML","CSS","JavaScript"],
        companySize:"20-50",
        salary:"25,000"
    },
    {
        id:3,
        companyName:"Sample3",
        companyLogoUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1724769036/chatbot_hufqkl.png",
        jobPosition:"Frontend Developer",
        jobType:"Full Time",
        remoteOffice:"Office",
        location:"Mumbai",
        skillsRequired:["Frontend","HTML","CSS","JavaScript"],
        companySize:"11-50",
        salary:"35,000"
    }
]

// const sampleJobsListDetails = [
//     {
//         id:1,
//         companyName:"Sample1",
//         companyLogoUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1724769036/chatbot_hufqkl.png",
//         jobPosition:"Frontend Developer",
//         jobType:"Full Time",
//         remoteOffice:"Remote",
//         location:"Bangalore",
//         jobDescription:`We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end.Selected intern's day-to-day responsibilities include:
//         1. Work on the development of theme customization, liquid programming language, and corresponding apps
//         2. Implement system integrations that are crucial to our success
//         3. Contribute to the development of HTML5/CSS/JavaScript and standard web technologies integral to building seamless multi-channel experiences
//         4. Work on speed optimization and making a mobile-friendly website`,
//         aboutTheCompany:"We provide technology-based services to help businesses and organizations achieve their goals. We offer a wide range of services, including software development, system integration, network and security services, cloud computing, and data analytics. Our primary focus is on leveraging technology to streamline business processes, improve productivity, and enhance overall efficiency.",
//         SkillsRequired:["HTML","CSS","JavaScript"],
//         additionalInformation:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).",
//         otherExtraFields:""
//     },
//      {
//         id:2,
//         companyName:"Sample2",
//         companyLogoUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1724769036/chatbot_hufqkl.png",
//         jobPosition:"WordPress Developer",
//         jobType:"Part Time",
//         remoteOffice:"Office",
//         location:"Delhi",
//         jobDescription:`We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end.Selected intern's day-to-day responsibilities include:
//         1. Work on the development of theme customization, liquid programming language, and corresponding apps
//         2. Implement system integrations that are crucial to our success
//         3. Contribute to the development of HTML5/CSS/JavaScript and standard web technologies integral to building seamless multi-channel experiences
//         4. Work on speed optimization and making a mobile-friendly website`,
//         aboutTheCompany:"We provide technology-based services to help businesses and organizations achieve their goals. We offer a wide range of services, including software development, system integration, network and security services, cloud computing, and data analytics. Our primary focus is on leveraging technology to streamline business processes, improve productivity, and enhance overall efficiency.",
//         SkillsRequired:["HTML","CSS","JavaScript"],
//         additionalInformation:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).",
//         otherExtraFields:""
//     },
//      {
//         id:3,
//         companyName:"Sample3",
//         companyLogoUrl:"https://res.cloudinary.com/dksgsqhdk/image/upload/v1724769036/chatbot_hufqkl.png",
//         jobPosition:"Frontend Developer",
//         jobType:"Full Time",
//         remoteOffice:"Office",
//         location:"Mumbai",
//         jobDescription:`We are looking for a responsible PHP/WordPress/Laravel/Shopify Developer. He/She will be liable for managing services and therefore the interchange of knowledge between the server and the users. The candidate's primary focus is going to be the event of all server-side logic, definition, and maintenance of the central database and ensuring high performance and responsiveness to requests from the front end.Selected intern's day-to-day responsibilities include:
//         1. Work on the development of theme customization, liquid programming language, and corresponding apps
//         2. Implement system integrations that are crucial to our success
//         3. Contribute to the development of HTML5/CSS/JavaScript and standard web technologies integral to building seamless multi-channel experiences
//         4. Work on speed optimization and making a mobile-friendly website`,
//         aboutTheCompany:"We provide technology-based services to help businesses and organizations achieve their goals. We offer a wide range of services, including software development, system integration, network and security services, cloud computing, and data analytics. Our primary focus is on leveraging technology to streamline business processes, improve productivity, and enhance overall efficiency.",
//         SkillsRequired:["HTML","CSS","JavaScript"],
//         additionalInformation:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).",
//         otherExtraFields:""
//     }
// ]

const LandingPage =  () => {
    const [defaultSkills,setDefaultSkill] = useState(skillSet[0].skillName)
    const [selectedSkills,setSelectedSkills] = useState([skillSet[0].skillName])
    const [userProfile,setUserProfile] = useState("")
    const [sampleJobsListInfo,setSampleJobsListInfo] = useState([])
    const [deleteJobFormList,setDeleteJob] = useState(true)
    const [searchInput,setSearchInput] = useState('')
    // console.log("defaultSkills:",defaultSkills)

    const jwtToken = Cookies.get('jwtToken')
    
    const changeInInput = event => {
        setSearchInput(event.target.value)
    }

    useEffect(()=>{
        const getProfileDetails = async() => {
            try {
                const response = await fetch("https://job-listing-backend.netlify.app/api/auth/profile",{
                    method:'GET',
                    headers:{
                        "Authorization":`Bearer ${jwtToken}`,
                        'Content-Type':"application/json"
                    }
                });
                const data = await response.json();
                console.log(data.user)
                setUserProfile(data.user.role)

            } catch (error) {
                console.error('Error Fetching profile Details')
            }
        }
        getProfileDetails()
        const getJobsList = async() => {
            if(deleteJobFormList){
                setDeleteJob(false)
            const response = await axios.get('https://job-listing-backend.netlify.app/api/jobs')
            setSampleJobsListInfo(response.data)
        }
    }
        
    getJobsList()

    },[deleteJobFormList])

    const deleteJob = (id) => {
    // console.log("delete Id:",id)
    axios.delete(`https://job-listing-backend.netlify.app/api/jobs/${id}`)
    .then(response => {
      console.log(response)
      setDeleteJob(true)
    }).catch(err => {
      console.log(err)
    })
  }

    // console.log("sampleJobsListInfo:",typeof sampleJobsListInfo)

    const onChangeDefaultSkill = event => {
        setDefaultSkill(event.target.value)
        setSelectedSkills([...selectedSkills,event.target.value])
    }

    const selectedSkillList = [new Set(selectedSkills)]
    // console.log("selectedSkillList:",selectedSkillList)
    // console.log("userProfile:",searchInput)
    const filterJobs = sampleJobsListInfo.filter(skill => 
        skill.companyName.toLowerCase().includes(searchInput.toLowerCase()) || 
        skill.jobPosition.toLowerCase().includes(searchInput.toLowerCase()) ||
        skill.jobType.toLowerCase().includes(searchInput.toLowerCase()) ||
        skill.location.toLowerCase().includes(searchInput.toLowerCase())
    )
    
    const onKeyDownSearch = event => {
        if(event.target.value ==='Enter'){
            console.log("filterJobs:",filterJobs)
        }
    }
    const clickOnClear = () => {
        
    }

  return (
    <div>
        <Header userProfile={userProfile}/>
        <div className='main_landing_page_container'>
        <div className='search_jobs_main_container'>
            <div className='search_container'>
            <div className='search_inside_container'>
                <CiSearch className='search_icon'/>
                <input type='search' value={searchInput} placeholder='Type any job title' onChange={changeInInput} onKeyDown={onKeyDownSearch} className='input_search'/>
            </div>
            <div className='select_skills_filter_cancel_button_container'>
            <select onChange={onChangeDefaultSkill} className='select_skills_container'>
                {skillSet.map(eachSkill => (
                    <option key={eachSkill.id}>{eachSkill.skillName}</option>
                ))}
            </select>
            <div className="apply_filter_cancel_buttons_container">
            {userProfile==="admin" ? 
            <>
                <Link to="/addJob">
                    <button type='button' className='apply_filer_button'>+Add Job</button>
                </Link>
                    <button type='button' className='clear_filter_button'>Clear</button>
                </>
                :
                <>
                    <button type='button' className='apply_filer_button'>Apply Filter</button>
                    <button type='button' className='clear_filter_button' onClick={clickOnClear}>Clear</button>
                </>
            }
                </div>
              </div>
            </div>
        </div>
        <ul className='job_info_card_container'>
            {filterJobs.map(eachJob => (
                <JobsInfoCard jobInfoDetails={eachJob} key={eachJob.id} userProfile={userProfile} deleteJob={deleteJob}/>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default LandingPage
