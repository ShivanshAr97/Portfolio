import React, { useEffect } from 'react'
import './HeroEnd.css'
import star from '../star.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

const HeroEnd = () => {
    const tl =gsap.timeline();
    tl.from(".header__marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.header__marq-wrapp', {
			scrollTrigger: {
				trigger: 'body',
				start: 'top top',
				scrub: 1
			},
			xPercent: -500
		})
		gsap.to('.header__marq-star img', {
			scrollTrigger: {
				trigger: 'body',
				start: 'top top',
				scrub: 1
			},
			rotate: -7200
		})
        return () => {
          tl.kill();
        };
      }, []);
  return (
    <div className="header__marq">
		<div className="header__marq-wrapp">
			<span className="header__marq-txt text-sm lg:text-2xl">Looking for internships
				<span className="header__marq-star -mt-0.5 h-6 w-6 lg:h-8 lg:w-8">
					<img src={star} alt=""/>
				</span>
				</span>
				<span className="header__marq-txt text-sm lg:text-2xl">collaborations
				<span className="header__marq-star -mt-0.5 h-6 w-6 lg:h-8 lg:w-8">
						<img src={star} alt=""/>
					</span>
				</span>
				<span className="header__marq-txt text-sm lg:text-2xl">freelance work
				<span className="header__marq-star -mt-0.5 h-6 w-6 lg:h-8 lg:w-8">
						<img src={star} alt=""/>
					</span>
				</span>
				<span className="header__marq-txt text-sm lg:text-2xl">Looking for internships
				<span className="header__marq-star -mt-0.5 h-6 w-6 lg:h-8 lg:w-8">
					<img src={star} alt=""/>
				</span>
				</span>
				<span className="header__marq-txt text-sm lg:text-2xl">collaborations
				<span className="header__marq-star -mt-0.5 h-6 w-6 lg:h-8 lg:w-8">
						<img src={star} alt=""/>
					</span>
				</span>
				<span className="header__marq-txt text-sm lg:text-2xl">freelance work
				<span className="header__marq-star -mt-0.5 h-6 w-6 lg:h-8 lg:w-8">
						<img src={star} alt=""/>
					</span>
				</span>
				
			</div>
	    </div>
    )
}

export default HeroEnd