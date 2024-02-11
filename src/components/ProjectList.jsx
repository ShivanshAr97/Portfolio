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
              <figure className="project-img-container flex-control">
                <img
                  className="project-img h-[25rem] w-100 object-cover"
                  src={item.img}
                  alt="Project image"
                  ref={imgRef}
                />
              </figure>
                <div className="project-description">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="technoligies flex-control">
                    {item.technologies}
                  </p>
                  <div className="project-link-container flex-control">
                    {(item.repo_link.length > 1) &&
                      <a
                        className="project-link"
                        href={item.repo_link}
                        target="_blank"
                      >
                        GitHub
                      </a>
                    }
                    <a
                      className="project-link"
                      href={item.url}
                      target="_blank"
                    >
                      View Project
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