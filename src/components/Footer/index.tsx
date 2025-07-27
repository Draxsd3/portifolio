import { Github, Instagram, Linkedin } from "lucide-react";

import "./Footer.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
        <img src={logo} alt="Logo" className="footer__logo-img" />
          <h1 className="footer__title">Renan Ramos</h1>
        </div>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portifolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimoials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/renan-ramos-068759243/"
            className="home__social-icon"
            target="_blank"
          >
            <Instagram className="footer__social-link" />
          </a>
          <a
            href="https://github.com/Draxsd3"
            className="home__social-icon"
            target="_blank"
          >
            <Github className="footer__social-link" />
          </a>
          <a
            href="https://www.linkedin.com/in/renan-ramos-068759243/"
            className="home__social-icon"
            target="_blank"
          >
            <Linkedin className="footer__social-link" />
          </a>
        </div>

        <span className="footer__copy">
          &#169; RenanRamos. All rigths reserved
        </span>
      </div>
    </footer>
  );
}
