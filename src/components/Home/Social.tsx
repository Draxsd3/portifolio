import { Instagram, Github, Linkedin } from "lucide-react";

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/mr.renan1/"
        className="home__social-icon"
        target="_blank"
      >
        <Instagram />
      </a>
      <a
        href="https://github.com/Draxsd3/Draxsd3"
        className="home__social-icon"
        target="_blank"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/renan-ramos-068759243/"
        className="home__social-icon"
        target="_blank"
      >
        <Linkedin />
      </a>
    </div>
  );
}
