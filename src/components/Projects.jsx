import ProjectList from './ProjectList';
import './Project.css'

const Projects = () => {

  return (
    <section id='work' className='projects text-white'>
			<div className="width-wrapper">
        <div className="projects-container grid-control">
          <div className="col-left flex-control">
            <ProjectList />
          </div>
          <div className="col-right">
            <h2>Featured <br/> Projects</h2>
            <p>A showreel of my personal projects and work that I have done for various clients.</p>
            <button><a href="https://github.com/jarolthecoder?tab=repositories">See More</a></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects