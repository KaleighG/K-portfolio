import "./experience.css";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { DiJava } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import { SiDjango } from "react-icons/si";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="text-dark">My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="experience__title">Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div className="icon">
                <FaHtml5 className="experience__icons" />
              </div>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__icons" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className="experience__icons" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__icons" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__icons" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3 className="experience__icons">Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaPython className="experience__icons" />
              <div>
                <h4>Python</h4>
                <small>Certified</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__icons" />
              <div>
                <h4>MongoDB</h4>
                <small>Certified</small>
              </div>
            </article>
            <article className="experience__details">
              <TbFileTypeSql className="experience__icons" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <DiJava className="experience__icons" />

              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiSpring className="experience__icons" />
              <div>
                <h4>Spring</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiDjango className="experience__icons" />
              <div>
                <h4>Django</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
