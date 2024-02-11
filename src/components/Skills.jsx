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
    <div className="text-[12vw] overflow-hidden text-white font-spartan">
      <section className="">
        <div className="wrapper flex text-[12vh] font-medium mx-20">
          My Top Skills
        </div>
      </section>
      {[1].map((el) => (
      <section key={el}>
        <div className="wrapper flex mx-28">
          {Array.from({ length: 6 }, (_, el2) => (
            <img
              key={el2}
              className="h-40 w-40 object-cover rounded-xl m-2 transition-all hover:scale-110 duration-150 cursor-pointer"
              src={skillsData[el2]?.img}
            />
          ))}
        </div>
      </section>
    ))}
    {[2].map((el) => (
      <section key={el}>
        <div className="wrapper flex">
          {Array.from({ length: 6 }, (_, el2) => (
            <img
              key={el2+6}
              className="h-40 w-40 object-cover rounded-xl m-2 transition-all hover:scale-110 duration-150 cursor-pointer"
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
        <div className="wrapper flex">
          {Array.from({ length: 6 }, (_, el2) => (
            <img
              key={el2+12}
              className="h-40 w-40 object-cover rounded-xl m-2 transition-all hover:scale-110 duration-150 cursor-pointer"
              src={skillsData[el2+12]?.img}
            />
          ))}
        </div>
      </section>
    ))}
        {[2].map((el) => (
      <section key={el}>
        <div className="wrapper flex mx-28">
          {Array.from({ length: 6 }, (_, el2) => (
            <img
              key={el2+18}
              className="h-40 w-40 object-cover rounded-xl m-2 transition-all hover:scale-110 duration-150 cursor-pointer"
              src={skillsData[el2+18]?.img}
            />
          ))}
        </div>
      </section>
    ))}
  <section className="">
    <div className="wrapper flex text-[8vh] font-medium overflow">
      And many more...
    </div>
    </section>
    </div>
    );
};
    
export default Skills;