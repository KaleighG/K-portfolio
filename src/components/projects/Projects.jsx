import "./projects.css";
import AdventurerArchive from "../../assests/AV.png";
import TreasureHub from "../../assests/TreasureHubPic.jpg";
import QuestHub from "../../assests/QuestHubPic.png";
import Conquest from "../../assests/quest.jpg";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="text-dark">My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={AdventurerArchive} alt="Adventurer's Archive" />
            <h3 className="text-dark">Adventurer's Archive</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://kaleighg.github.io/AdventurersArchive/"
                target="_blank"
                className="btn"
              >
                Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TreasureHub} alt="TreasureHub" />
            <h3 className="text-dark">TreasureHub</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/KaleighG/TreasureHub"
                target="_blank"
                className="btn"
              >
                Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={QuestHub} alt="QuestHub" />
            <h3 className="text-dark">QuestHub</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/KaleighG/QuestHub"
                target="_blank"
                className="btn"
              >
                Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Conquest} alt="Conquest" />
            <h3 className="text-dark">Quest & Conquest</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://replit.com/@KaleighGarcia2/Quest-and-Conquest-1"
                target="_blank"
                className="btn"
              >
                Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
