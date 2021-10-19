import React from 'react'
import './SideIcon.css'

const SideIcon = ({Icon,text}) => {
    return (
        <div className="sideicon">
        <Icon style={{marginLeft:'30px'}}
    />
         <h7 className="ms-3">{text}</h7>
        </div>
    )
}

export default SideIcon
