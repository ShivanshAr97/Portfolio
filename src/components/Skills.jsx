import React, { useEffect } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    // ScrollTrigger.defaults({
    //   scroller: '.scroller',
    // });

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
              scrub: 0.5,
            },
          }
        );
      }
    });
  };

  return (
    <div className="text-[12vw] overflow-hidden text-white">
      <section className="">
        <div className="wrapper flex text-[16vh] font-medium whitespace-nowrap">
          Keep smiling
        </div>
        </section>
      {[1, 2, 3, 4].map((el) => (
        <section key={el}>
            <div className="wrapper flex text-[16vh] font-medium  ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <img
                key={el2}
                className="h-40 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={`https://source.unsplash.com/featured/?cities&${el2}?sig&${el}`}
              />
            ))}
          </div>
        </section>
      ))}
        <section className="">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          because life is a beautiful thing
        </div>
      </section>
        {[1, 2, 3, 4].map((el) => (
        <section key={el}>
          <div className="wrapper flex text-[16vh] font-medium ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
              <img
                key={el2}
                className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                src={`https://source.unsplash.com/featured/300×300/?cities&${el2}?sig&${el}`}
              />
            ))}
          </div>
        </section>
      ))}
  <section className="">
    <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
      and there's so much to smile about.
    </div>
    </section>
    </div>
    );
};
    
export default Skills;
    