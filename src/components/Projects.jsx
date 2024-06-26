import ProjectList from './ProjectList';
import './Project.css'

const Projects = () => {

  return (
    <section id='work' className='projects font-spartan pt-0 lg:pt-[5rem] bg-[#2a2a2d] text-white'>
			<div className="width-wrapper mx-auto lg:mx-[5rem]">
        <div className="projects-container grid-control">
          <div className="col-left flex-control">
            <ProjectList />
          </div>
          <div className="col-right mx-4 font-spartan">
            <h2 className='font-spartan lg:text-6xl text-4xl pb-4 lg:pt-[3rem] lg:mx-0 text-white'>Projects</h2>
            <p className='lg:text-lg text-white '>A compilation showcasing my individual projects over a period of time.</p>
            <button className='bg-green-500 text-[1.4rem] rounded-md transition duration-300 hover:bg-green-600 focus:outline-none flex text-white font-spartan transition ease-in-out font-medium lg:text-lg lg:px-6 px-4 mx-1 py-[0.70rem] my-4'><a href="https://github.com/shivanshar97">See More</a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects