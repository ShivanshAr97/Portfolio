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
          <p className='pTag'>Problem Solver</p>
          <p className='pTag'>Team Player</p>
          <p className='pTag'>Collaborative</p>
          <p className='pTag'>Curious</p>
          <p className='pTag'>Adaptable</p>
          <p className='pTag'>Open minded</p>
          <p className='pTag'>Quick Learner</p>
        </div>
      </div>
      <div className='text-white text-center mt-28 justify-center align-middle items-center flex'>
        <a href={resume} target='_blank'><Button text="Resume"/></a>
        <Socials text={<MdEmail size="32px"/>} customClass="text-black" link="mailto: shivansh.arora973@gmail.com"/>
        <Socials text={<FaLinkedinIn size="32px"/>} customClass="text-blue-800" link="https://www.linkedin.com/in/shivansharora97"/>
        <Socials text={<FaGithub size="32px"/>} customClass="text-green-800" link="https://github.com/ShivanshAr97"/>
        <Socials text={<RiTwitterXFill size="32px"/>} customClass="text-black" link="https://twitter.com/ShivanshAr97" />
        <Socials text={<SiLeetcode size="32px"/>} customClass="text-yellow-600" link="https://leetcode.com/shivanshar"/>
        <Socials text={<SiCodechef size="32px"/>} customClass="text-black" link="https://www.codechef.com/users/shivanshar97"/>
        <Socials text={<SiCodeforces size="32px"/>} customClass="text-blue-500" link="https://codeforces.com/profile/shivansh.arora973"/>
        <Socials text={<SiGeeksforgeeks size="32px"/>} customClass="text-green-500" link="https://auth.geeksforgeeks.org/user/shivansharora973"/>
        
        <button></button>
      </div>
    </div>
  )
}

export default Home