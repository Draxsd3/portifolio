import AboutImg from "../../assets/about2.jpg";
import CV from "../../assets/Renan_Ramos.pdf";
import Info from "./Info";
import { Download } from "lucide-react";

import "./About.css";

export function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="my profile" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I am a fullstack software developer with a specialization in front-end development and solid experience in technologies such as JavaScript, TypeScript, ReactJS, React Native, NodeJS, Styled-Components, and Vue. I also have back-end development skills, which allows me to create complete, scalable, and high-performance applications that deliver exceptional user experiences.
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV
            <Download className="button__icon" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}