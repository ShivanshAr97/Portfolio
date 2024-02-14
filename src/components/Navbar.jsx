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
        <div onClick={() => {setIsActive(!isActive)}} className="button bg-green-400 w-8 h-8 lg:w-12 lg:h-12">
          <div className={`burger ${isActive ? 'burgerActive' : ""}`}></div>
        </div>
      </div>
  
    </div>
      {isActive && <Sidebar isActive={isActive}/>}
    </>
  )
  }

export default Navbar
