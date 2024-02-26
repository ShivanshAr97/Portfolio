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
      className={`link lg:my-2.5 mx-8 my-1 item ${isActive ? 'active' : ''}`}
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
          <p className='title lg:text-3xl font-spartan cursor-pointer'>{title}</p>
      </ScrollLink>
    </div>
  );
};

export default Linkk;
