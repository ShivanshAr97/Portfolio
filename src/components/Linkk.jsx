import React from 'react'
import { Link } from 'react-router-dom';
import './Linkk.css'
import './Navbar.css'

const Linkk = ({data, isActive, setSelectedIndicator}) => {
    const { title, href, index} = data;
  return (
    <div className="link" onMouseEnter={() => {setSelectedIndicator(href)}} custom={index}>
        <div className="indicator font-spartan"></div>
        <Link to={href}>{title}</Link>
      </div>
  )
}

export default Linkk