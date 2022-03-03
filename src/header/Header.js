import React from 'react'
import './header.css'
import { FaUserCircle } from "react-icons/fa";
function Header(props) {
  return (
    <div className='nav-bar-head'>
        <p>Academia - Academic Web Services</p>
        <p>{props.title} <FaUserCircle size={'30px'}/></p>
    </div>
  )

  
}

export default Header