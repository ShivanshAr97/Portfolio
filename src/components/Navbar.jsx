import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from "./Sidebar"
import "./Navbar.css"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = useLocation();
  
  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])
  
  return (
    <>
    <div className="main">
  
      <div className="header">
        <div onClick={() => {setIsActive(!isActive)}} className="button">
          <div className={`burger ${isActive ? 'burgerActive' : ""}`}></div>
        </div>
      </div>
  
    </div>
      {isActive && <Sidebar isActive={isActive}/>}
    </>
  )
  }

export default Navbar
