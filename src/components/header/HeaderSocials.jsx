import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" className='social-link' target="_blank"><IoLogoLinkedin /></a>
        <a href="https://github.com"  className='social-link' target="_blank"><IoLogoGithub /></a>

    </div>
    )
}

export default HeaderSocials