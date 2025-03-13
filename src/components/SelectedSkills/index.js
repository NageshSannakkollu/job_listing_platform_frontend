import React from 'react'

const SelectedSkills = (props) => {
    const {skillsDetails,skillIndex} = props
    console.log("skillsDetails:",skillsDetails,skillIndex)
  return (
    <div key={skillIndex}>{skillsDetails} Delete</div>
  )
}

export default SelectedSkills