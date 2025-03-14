import React from 'react'
import { MdOutlineCancelPresentation } from "react-icons/md";

import "./index.css"

const DefaultSkill = (props) => {
    const {skillInfo,deleteDefaultSkill,clickOnSelectedSkill} = props
    const {skillName,id} = skillInfo

    const clickOnCancel = () => {
        deleteDefaultSkill(id)
    }

    const clickOnSkill = () => {
        clickOnSelectedSkill(skillName)
    }
  return (
    <li key={id} className='default_skill_info_list_item'>
        <button type='button' onClick={clickOnSkill} className='skill_button'>{skillName}</button>
        <MdOutlineCancelPresentation className='cancel_icon' onClick={clickOnCancel}/>
    </li>
  )
}

export default DefaultSkill