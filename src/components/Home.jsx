import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import './Home.css'
import Button from './Button';
import resume from '../Resume-ShivanshArora.pdf'
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
        y:-80,
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
      <h1 className='text-6xl text-white  w-[100vw] h-[50vh] text-center py-28 font-spartan'>Hey! I'm <span className='text-green-400'>Shivansh Arora</span> </h1>
      <div className="container -mt-6">
        <div className="text-wrapper">
          <p className='pTag lg:text-[7rem] text-[3rem]'>Problem Solver</p>
          <p className='pTag lg:text-[7rem] text-[3rem]'>Team Player</p>
          <p className='pTag lg:text-[7rem] text-[3rem]'>Collaborative</p>
          <p className='pTag lg:text-[7rem] text-[3rem]'>Curious</p>
          <p className='pTag lg:text-[7rem] text-[3rem]'>Adaptable</p>
          <p className='pTag lg:text-[7rem] text-[3rem]'>Open minded</p>
          <p className='pTag lg:text-[7rem] text-[3rem]'>Quick Learner</p>
        </div>
      </div>
      <div className='text-white text-center mt-28 lg:my-2 justify-center align-middle items-center flex'>
        <a href={resume} target='_blank'><Button text="Resume"/></a>
        <Socials text={<MdEmail />} customClass="text-black text-xl lg:text-[2rem]" link="mailto: shivansh.arora973@gmail.com"/>
        <Socials text={<FaLinkedinIn/>} customClass=" text-blue-800 text-xl lg:text-[2rem]" link="https://www.linkedin.com/in/shivansharora97"/>
        <Socials text={<FaGithub/>} customClass="text-green-800 text-xl lg:text-[2rem]" link="https://github.com/ShivanshAr97"/>
        <Socials text={<RiTwitterXFill/>} customClass="text-black text-xl lg:text-[2rem]" link="https://twitter.com/ShivanshAr97" />
        <Socials text={<SiLeetcode/>} customClass="text-yellow-600 text-xl lg:text-[2rem]" link="https://leetcode.com/shivanshar"/>
        <Socials text={<SiCodechef />} customClass="text-xl lg:text-[2rem] text-black" link="https://www.codechef.com/users/shivanshar97"/>

        <Socials text={<SiCodeforces/>} customClass="text-blue-500 text-xl lg:text-[2rem]" link="https://codeforces.com/profile/shivansh.arora973"/>

        <Socials text={<SiGeeksforgeeks />} customClass="text-green-500 text-xl lg:text-[2rem]" link="https://auth.geeksforgeeks.org/user/shivansharora973"/>
        
      </div>
    </div>
  )
}

export default Home