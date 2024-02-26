import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Linkk from './Linkk.jsx';
import './Sidebar.css';

const Sidebar = () => {
  const pathname = useLocation().pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const navItems = [
    {
      title: "Home",
      href: "home",
    },
    {
      title: "About Me",
      href: "about",
    },
    {
      title: "Skills",
      href: "skills",
    },
    {
      title: "Projects",
      href: "projects",
    },
    {
      title: "Contact",
      href: "contact",
    },
  ];

  return (
    <div className="menu font-spartan">
      <div className="body font-spartan">
        <div onMouseLeave={() => setSelectedIndicator(pathname)} className="nav">
          <div className="header mx-10 -mt-10 z-50">
            <p className='-mx-[13rem] -mt-8 lg:-mx-[12rem] lg:-mt-4'>Menu</p>
          </div>
          {navItems.map((data, index) => (
            <Linkk
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
