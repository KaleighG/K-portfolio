import './about.css'
import me from '../../assests/me.jpg'
import { AiOutlineGlobal } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";


const About = () => {
  return (
    <section id='about' className='about'>
      <h2 className='text-dark'>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiOutlineGlobal className='about__icon'/>
              <h3>Experience</h3>
              <small>2+ Studying</small>
            </article>

            <article className='about__card'>
              <GrProjects  className='about__icon'/>
              <h3>Projects</h3>
            </article>
          </div>
            <p>
              I currently live in Oxford, Mississippi. I am currently employed as a server.
              I am also enrolled in a one-year long non-profit program, <a href="https://basecampcodingacademy.org/about/"  className='basecamp__link' target="_blank">Base Camp Coding Academy</a>, where I am taught 7 different languages, frameworks, 
              and professional skills. I'm looking to get elbows deep into the software development field.

            </p>
            <a href="#contact" className='btn btn-primary'>Contact Me</a>
          </div>
        </div>
    </section>
  )
}

export default About