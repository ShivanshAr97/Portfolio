import ProjectList from './ProjectList';
import './Project.css'

const Projects = () => {

  return (
    <section id='work' className='projects font-spartan bg-[#36454F]'>
			<div className="width-wrapper">
        <div className="projects-container grid-control">
          <div className="col-left flex-control">
            <ProjectList />
          </div>
          <div className="col-right">
            <h2 className='font-spartan text-6xl'>Projects</h2>
            <p>A showreel of my personal projects and work that I have done for various clients.</p>
            <button><a href="https://github.com/jarolthecoder?tab=repositories">See More</a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects