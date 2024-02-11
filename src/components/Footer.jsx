import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-800 text-white p-4">
        <p className='text-sm mb-2 md:mb-0 md:mr-4'>&copy; 2024 All rights reserved</p>
        <p className='text-sm mb-2 md:mb-0 md:mr-4'>| &nbsp; &nbsp; Made with ❤ by {' '}
          <a href="https://github.com/ShivanshAr97" target="_blank">
            Shivansh
          </a> &nbsp; &nbsp;|</p>
        <div className="flex space-x-4">
          <a href="https://github.com/ShivanshAr97" target="_blank" className="text-gray-400 hover:text-white">
            <FaGithub />
          </a>
          <a href="https://twitter.com/ShivanshAr97" target="_blank" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/shivansharora97/" target="_blank" className="text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/shivanshar97/" target="_blank" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
