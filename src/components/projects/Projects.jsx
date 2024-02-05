import './projects.css'
import AdventurerArchive from '../../assests/AV.png'
import TreasureHub from '../../assests/TreasureHubPic.jpg'
import QuestHub from '../../assests/QuestHubPic.png'
import Conquest from '../../assests/quest.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h2 className='text-dark'>My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={AdventurerArchive} alt="Adventurer's Archive"/>
          </div>
          <h3>Adventurer's Archive</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>Github</a>

          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TreasureHub} alt="TreasureHub"/>
          </div>
          <h3>TreasureHub</h3>
          <div className="portfolio__item-cta">

            <a href="http://github.com" className='btn'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={QuestHub} alt="QuestHub"/>
          </div>
          <h3>QuestHub</h3>
          <div className="portfolio__item-cta">

            <a href="http://github.com" className='btn'>Github</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Conquest} alt="Conquest"/>
          </div>
          <h3>Quest & Conquest</h3>
          <div className="portfolio__item-cta">

            <a href="http://github.com" className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>

  )
}

export default Projects