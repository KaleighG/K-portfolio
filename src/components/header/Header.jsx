import './header.css'
import CTA from './CTA'
import ME from '../../assests/ME.png'

const Header = () => {
  return (
    <header>
      <section id='header'>
        <div className="container header__container">
          <h2 className="text-dark"><strong>Hello I'm</strong></h2>
          <h1 className="title"><strong>Kaleigh Garcia</strong></h1>
          <h2 className="text-dark"><strong>Fullstack Developer</strong></h2>
          <CTA />

          <div className="me">
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </section>
    </header>
  )
}

export default Header