import resume from '../../assests/resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
      <a href={resume} className='btn' download>Download Resume</a>
    </div>
  )
}

export default CTA