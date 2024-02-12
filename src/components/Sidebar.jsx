import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Linkk from './Linkk.jsx'
import './Sidebar.css'

const Sidebar = ({ isActive }) => {
  const pathname = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const navItems = [
    {
  title: "Home",
  href: "/",
},
{
  title: "About me",
  href: "/about",
},
{
  title: "Skills",
  href: "/skills",
},
{
  title: "Projects",
  href: "/projects",
},
{
  title: "Contact",
  href: "/contact",
},
]
  return (
    <div className="menu font-spartan">
       <div className="body font-spartan">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="nav">
                    <div className="header">
                        <p>Menu</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Linkk key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Linkk>
                      })
                    }
            </div>
        </div>
    </div>
    )
}

export default Sidebar