import { useRef, useEffect } from 'react';
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ProjectList.css'
import projectsData from './projectsData';

gsap.registerPlugin(ScrollTrigger);

const ProjectList = () => {

  const handleImageAnimation = (img) => {
     gsap.to(img, {
      scrollTrigger: {
        trigger: img.parentNode,
        start: "-500px top",
        end: "center center",
        scrub: true,
      },
      scale: 1,
      transformOrigin: "center center",
      autoAlpha: 1,
      duration: 0.2,
      startAt: { scale: 0.9, autoAlpha: 0.9}
    });
  };

  return (
    <>
      {
        projectsData.map((item, index) => {
          let imgRef = useRef();

          useEffect(() => {
            handleImageAnimation(imgRef.current);
          }, [imgRef])
          return (
            <div className="project-wrapper flex-control" key={index}>
              <figure className="project-img-container flex-control w-fit  mx-4">
                <img
                  className="project-img object-cover"
                  src={item.img}
                  alt="Project image"
                  ref={imgRef}
                />
              </figure>
                <div className="project-description w-fit mx-4 text-white">
                  <h3 className='lg:text-xl font-semibold'>{item.name}</h3>
                  <p className='lg:text-lg lg:justify-center text-justify text-sm text-white'>{item.description}</p>
                  <p className="technoligies flex-control lg:text-base text-[0.65rem]">
                    {item.technologies}
                  </p>
                  <div className="project-link-container flex justify-center flex-control text-white">
                    {(item.repo_link.length > 1) &&
                      <a
                        className="project-link border px-4 py-2 text-white hover:bg-green-500 duration-200 ease-in-out transition rounded-md"
                        href={item.repo_link}
                        target="_blank"
                      >
                        GitHub
                      </a>
                    }
                    <a
                      className="project-link border px-4 py-2 text-white hover:bg-green-500 duration-200 ease-in-out transition rounded-md"
                      href={item.url}
                      target="_blank"
                    >
                      Website
                    </a>
                  </div>
                </div>
            </div>
          );
        })
      }
    </>
  )
}

export default ProjectList