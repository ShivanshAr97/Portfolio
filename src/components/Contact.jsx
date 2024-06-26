import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import './Contact.css'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const projects = [
    {
      title: "Email",
      colour: "#5C4033",
      link:"mailto:shivansh.arora973@gmail.com"
    },
    {
      title: "Linkedin",
      colour: "#00008B",
      link:"https://www.linkedin.com/in/shivansharora97"
    },
    {
      title: "GitHub",
      colour: "#FF0000",
      link:"https://github.com/ShivanshAr97"
    },
    {
      title: "Twitter",
      colour: "#9400d3",
      link:"https://twitter.com/ShivanshAr97"
    },
]

const Contact = () => {
    const manageMouseEnter = (e, index) => {
        gsap.to(e.target, {top: "-1.5vw", backgroundColor: projects[index].colour, duration: 0.3})
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
          toast.success("Mail sent successfully",{
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"});
          console.log('SUCCESS!');
        },
        (error) => {
          toast.error("Mail sending failed",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"});
          console.log('FAILED...', error.text);
        },
      );
    };

    return (
        <div className="bg-gray-900 text-white px-[1rem] lg:px-[3.5rem] py-8 flex-col shadow-lg flex lg:flex-row font-spartan" id='contact'>
        <div className='lg:w-[50%]'>
        <h2 className="lg:text-6xl text-4xl mb-4 font-spartan">Reach Out To Me</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-4 font-spartan">
            <label htmlFor="name" className="block font-spartan font-medium mb-2">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none font-spartan"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block font-spartan font-medium mb-2">
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-gray-800 focus:outline-none  font-spartan"
                required
            />
            </div>
            <div className="mb-6">
            <label htmlFor="message" className="block font-spartan font-medium mb-2">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full font-spartan px-3 py-2 rounded-md bg-gray-800 focus:outline-none "
                required
            ></textarea>
            </div>
            <button
            type="submit"
            className="bg-green-500 font-spartan text-white px-4 py-2 rounded-md transition duration-300 hover:bg-green-600 focus:outline-none mx-auto flex lg:mx-0"
            >
            Submit
            </button>
        </form>
            </div>
            <div className="contactContainer lg:h-[50vh] lg:w-[50%] w-[100%] lg:my-28 lg:mx-8 my-4">
        <div className="projectContactContainer">
            {
              projects.map( (project, index) => {
                return <a href={project.link} target='_blank'><div className='contactDiv' onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}>
                  <p className='contactP lg:text-2xl flex justify-between items-center w-[16rem] lg:w-[30rem]'><span>{project.title}</span><BsArrowUpRightCircle/></p>
                </div></a>
              })
            }
        </div>
    </div>
    <ToastContainer />
        </div>
    );
};

export default Contact;
