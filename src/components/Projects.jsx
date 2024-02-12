import ProjectList from './ProjectList';
import './Project.css'
import Button from './Button';

const Projects = () => {

  return (
    <section id='work' className='projects font-spartan bg-[#36454F] text-white'>
			<div className="width-wrapper">
        <div className="projects-container grid-control">
          <div className="col-left flex-control">
            <ProjectList />
          </div>
          <div className="col-right">
            <h2 className='font-spartan text-6xl  text-white'>Projects</h2>
            <p className='text-lg text-white'>A compilation showcasing my individual projects over a period of time.</p>
            <Button text="See More" link="https://github.com/shivanshar97" customClass="-mx-1 my-4"></Button>
            {/* <button className=' text-white font-spartan bg-green-500 hover:bg-green-700 transition ease-in-out duration-200 font-medium rounded-lg text-lg px-6 mx-4 py-[0.70rem] text-center flex my-4'><a href="">See More</a></button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects