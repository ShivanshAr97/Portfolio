import React, { useEffect } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import skillsData from './SkillsData.js'

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    gsap.utils.toArray('section').forEach((section, index) => {
      const wrapper = section.querySelector('.wrapper');

      if (wrapper) {
        const [xStart, xEnd] =
          index % 2
            ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
            : [wrapper.scrollWidth * -1, 0];

        gsap.fromTo(
          wrapper,
          { x: xStart },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.0001,
            },
          }
        );
      }
    });
  };

  return (
    <div className="text-6xl overflow-hidden text-white font-spartan" id='skills'>
      <section className="">
        <div className="wrapper flex lg:text-6xl mx-0 text-2xl lg:my-4 my-2 font-spartan font-medium lg:mx-20">
          My Top Skills
        </div>
      </section>
      {[1].map((el) => (
      <section key={el}>
        <div className="wrapper flex lg:mx-28">
          {Array.from({ length: 6 }, (_, el2) => (
            <img
              key={el2}
              className="lg:h-40 lg:w-40 h-16 w-16 object-cover  my-1 rounded-xl lg:m-2 transition-all hover:scale-110 duration-150 cursor-pointer"
              src={skillsData[el2]?.img}
            />
          ))}
        </div>
      </section>
    ))}
    {[2].map((el) => (
      <section key={el}>
        <div className="wrapper flex lg:mx-0 -mx-4">
          {Array.from({ length: 6 }, (_, el2) => (
            <img
              key={el2+6}
              className="lg:h-40 lg:w-40 h-16 w-16 object-cover rounded-xl  my-1 lg:m-2 transition-all hover:scale-110 duration-150 cursor-pointer"
              src={skillsData[el2+6]?.img}
            />
          ))}
        </div>
      </section>
    ))}
    <section className="">
      </section>
      {[1].map((el) => (
      <section key={el}>
        <div className="wrapper flex lg:-mx-12 -mx-8">
          {Array.from({ length: 6 }, (_, el2) => (
            <img
              key={el2+12}
              className="lg:h-40 lg:w-40 h-16 w-16 object-cover rounded-xl my-1 lg:m-2 transition-all hover:scale-110 duration-150 cursor-pointer"
              src={skillsData[el2+12]?.img}
            />
          ))}
        </div>
      </section>
    ))}
        {[2].map((el) => (
      <section key={el}>
        <div className="wrapper flex lg:ml-[30rem] ml-[5rem]">
          {Array.from({ length: 6 }, (_, el2) => (
            <img
              key={el2+18}
              className="lg:h-40 lg:w-40 h-16 w-16 object-cover rounded-xl lg:m-2 transition-all hover:scale-110 duration-150 cursor-pointer"
              src={skillsData[el2+18]?.img}
            />
          ))}
        </div>
      </section>
    ))}
  <section className="">
    <div className="wrapper flex text-xl lg:text-[8vh] mt-2 lg:my-4 font-medium overflow">
      And many more...
    </div>
    </section>
    </div>
    );
};
    
export default Skills;