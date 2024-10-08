import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-[#2a2a2d] py-4 font-spartan" id='about'>
      <div className=" mx-4 lg:mx-10 flex items-center justify-center text-justify flex-col md:flex-row">
        <div className="lg:w-[60%] text-center lg:text-left mb-4 lg:mb-0 text-white">
          <h2 className="text-6xl m-4 font-spartan">About Me</h2>
          <p className='lg:text-xl mb-6 text-justify mx-4 font-spartan'>I'm a fourth-year Computer Science undergraduate at Maharaja Surajmal Institute of Technology. Hailing from India, my journey in the tech realm has been fueled by a fervent passion for web development, where I blend innovative concepts with visually appealing interfaces. Meticulous in both user experience and system design, I thrive on flawless code quality.</p>
          <p className='lg:text-xl mb-6 text-justify mx-4 font-spartan'>
          My commitment to the tech community is reflected in my active involvement with open-source projects and participation in esteemed open source programs, fostering a collaborative and community-driven mindset.</p>
          <p className='lg:text-xl mb-6 text-justify mx-4 font-spartan'>
          Beyond web development, I am an avid enthusiast in the realms of AI/ML, having honed my skills through model training and project creation, I have worked on Computer Vision, NLP, Deep Learning and LLMs. I pride myself on being a problem solver and a competitive programmer, having successfully tackled over 350 problems on platforms like LeetCode and Geeks For Geeks, with commendable ratings on competitive programming platforms.
          </p>
          
        </div>
        <div className="md:w-[40%] flex flex-col">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
            alt="My Photo"
            className="w-[90%] h-auto rounded-md m-6 lg:mt-32 -mt-4"
          />
          <p className='lg:text-xl mb-6 text-justify mx-4'>
          Feel free to explore my portfolio and delve deeper into my journey as a self-taught Full Stack Web Developer, an AI/ML enthusiast, and a passionate problem solver. If you have any queries or if there's anything specific you'd like to know, don't hesitate to reach out!</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
