import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import './Home.css'
import Socials from './Socials';

import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { MdEmail } from "react-icons/md";


const Home = () => {
  useEffect(() => {
    const pTags = document.querySelectorAll('.pTag');
    const titles = gsap.utils.toArray(pTags);
    const tl =gsap.timeline({ repeat: -1 });
    titles.forEach(title =>{

      const splitTitle= new SplitTextJS(title)
      tl
      .from(splitTitle.chars,{      
        opacity: 0,
        y:80,
        rotateX:-90,
        stagger:0.02
      },"<")
      .to(splitTitle.chars,{
        opacity: 0,
        y:-40,
        rotateX:90,
        stagger:0.02
      },"<1")
    });
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className='h-[100vh]' id='home'>
      <h1 className='lg:text-6xl text-4xl text-white  w-[100vw] h-[50vh] text-center lg:py-28 py-20 font-spartan'>Hey! I'm <span className='text-green-400 mx-8 md:mx-0'>Shivansh Arora</span> </h1>
      <div className="container lg:-mt-6 -mt-10">
        <div className="text-wrapper">
          <p className='pTag lg:text-[7rem] text-[2.4rem]'>Problem Solver</p>
          <p className='pTag lg:text-[7rem] text-[2.25rem]'>Team Player</p>
          <p className='pTag lg:text-[7rem] text-[2.25rem]'>Collaborative</p>
          <p className='pTag lg:text-[7rem] text-[2.25rem]'>Curious</p>
          <p className='pTag lg:text-[7rem] text-[2.25rem]'>Adaptable</p>
          <p className='pTag lg:text-[7rem] text-[2.25rem]'>Open minded</p>
          <p className='pTag lg:text-[7rem] text-[2.25rem]'>Quick Learner</p>
        </div>
      </div>
      <div className='text-white text-center font-spartan mt-20 lg:mt-28 lg:my-2 justify-center align-middle items-center flex flex-col lg:flex-row mx-4'>
        <a href="https://drive.google.com/file/d/15QNl6m5d3OaxFtof7MFPTM7d6mIrftFb/view?usp=sharing"><button
            type="submit" target="_blank"
            className="bg-green-500 font-spartan text-white px-6 py-2.5 text-[1.4rem] rounded-md transition duration-300 hover:bg-green-600 focus:outline-none flex lg:mx-4"
            >
            Resume
            </button>
            </a>
        <div className='flex lg:mt-0 mt-4 flex-col lg:flex-row'>
          <div>
        <Socials text={<MdEmail />} customClass="text-black text-xl lg:text-[2rem]" link="mailto: shivansh.arora973@gmail.com"/>
        <Socials text={<FaLinkedinIn/>} customClass=" text-blue-800 text-xl lg:text-[2rem]" link="https://www.linkedin.com/in/shivansharora97"/>
        <Socials text={<FaGithub/>} customClass="text-green-800 text-xl lg:text-[2rem]" link="https://github.com/ShivanshAr97"/>
        <Socials text={<RiTwitterXFill/>} customClass="text-black text-xl lg:text-[2rem]" link="https://twitter.com/ShivanshAr97" />
        </div>
        <div>
        <Socials text={<SiLeetcode/>} customClass="text-yellow-600 text-xl lg:text-[2rem]" link="https://leetcode.com/shivanshar"/>
        <Socials text={<SiCodechef />} customClass="text-xl lg:text-[2rem] text-black" link="https://www.codechef.com/users/shivanshar97"/>

        <Socials text={<SiCodeforces/>} customClass="text-blue-500 text-xl lg:text-[2rem]" link="https://codeforces.com/profile/shivansh.arora973"/>

        <Socials text={<SiGeeksforgeeks />} customClass="text-green-500 text-xl lg:text-[2rem]" link="https://auth.geeksforgeeks.org/user/shivansharora973"/>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home