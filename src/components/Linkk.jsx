// Linkk.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Linkk.css';

const Linkk = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href } = data;

  const handleMouseEnter = () => {
    setSelectedIndicator(href);
  };

  const handleClick = () => {
    setSelectedIndicator(href);
    // Additional actions before scrolling if needed
  };

  return (
    <div
      className={`link item ${isActive ? 'active' : ''}`}
      onMouseEnter={handleMouseEnter}
    >
      <ScrollLink
        to={href}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={handleClick}
      >
          <p className='title text-3xl font-spartan'>{title}</p>
      </ScrollLink>
    </div>
  );
};

export default Linkk;
