import './footer.css'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#header" className='footer__logo'>KG</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kaleigh-garcia-464549298/" target="_blank"><IoLogoLinkedin /></a>
        <a href="https://github.com/KaleighG"  className='social-link' target="_blank"><IoLogoGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Kaleigh Garcia</small>
      </div>
    </footer>


  )
}

export default Footer