import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import './Contact.css'
import { BsArrowUpRightCircle } from "react-icons/bs";

const projects = [
    {
      title: "Email",
      colour: "#F06318"
    },
    {
      title: "Linkedin",
      colour: "#DCF018"
    },
    {
      title: "GitHub",
      colour: "#18F0E8"
    },
    {
      title: "Twitter",
      colour: "#8C0CF0"
    },
    {
      title: "Instagram",
      colour: "#F0183C"
    }
]

const Contact = () => {
    const manageMouseEnter = (e, index) => {
        gsap.to(e.target, {top: "-2vw", backgroundColor: projects[index].colour, duration: 0.3})
      }
    
      const manageMouseLeave = (e, index) => {
        gsap.to(e.target, {top: "0", backgroundColor: "rgb(17, 24, 39)", duration: 0.3, delay: 0.1})
      }
    const formRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        emailjs
        .sendForm('service_tsy8k2r', 'template_2k4jcxn', formRef.current, {
        publicKey: 'W87dSy6BZ3XZtQo5m',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

    return (
        <div className="bg-gray-900 text-white p-8 shadow-lg flex font-spartan">
        <div className='w-[50%]'>
        <h2 className="text-5xl font-bold mb-4">Reach Out To Me</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none"
                required
            />
            </div>
            <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none"
                required
            ></textarea>
            </div>
            <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none"
            >
            Submit
            </button>
        </form>
            </div>
            <div className="contactContainer">
        <div className="projectContactContainer">
            {
              projects.map( (project, index) => {
                return <div className='contactDiv' onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}>
                  <p className='contactP flex justify-between items-center w-[30rem]'><span>{project.title}</span><BsArrowUpRightCircle/></p>
                </div>
              })
            }
        </div>
    </div>
            {/* <div className='mx-12'>
                <ul>

                    <div className='flex items-center border w-[25rem] p-4 my-4'><span><PiArrowCircleUpRightThin size="24px"/></span><span className='text-2xl'>LinkedIn</span></div>
                    <div className='flex items-center  w-[25rem] p-4 my-4'><span><PiArrowCircleUpRightThin size="24px"/></span><span className='text-2xl'>Email</span></div>
                    <div className='flex items-center  w-[25rem] p-4 my-4'><span><PiArrowCircleUpRightThin size="24px"/></span><span className='text-2xl'>GitHub</span></div>
                    <div className='flex items-center w-[25rem] p-4 my-4'><span><PiArrowCircleUpRightThin size="24px"/></span><span className='text-2xl'>Twitter</span></div>
                    <div className='flex items-center w-[25rem] p-4 my-4'><span><PiArrowCircleUpRightThin size="24px"/></span><span className='text-2xl'>Instagram</span></div>
                    <div className='flex items-center w-[25rem] p-4 my-4'><span><PiArrowCircleUpRightThin size="24px"/></span><span className='text-2xl'>LeetCode</span></div>
                </ul>
            </div> */}
        </div>
    );
};

export default Contact;
