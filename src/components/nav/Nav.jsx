import './nav.css'
import { MdCottage } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { TbCardsFilled } from "react-icons/tb";
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><MdCottage /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegAddressBook /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbCardsFilled /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiComputerFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail /></a>
    </nav>
  )
}

export default Nav