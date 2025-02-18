import { Instagram, Github, Linkedin } from "lucide-react";

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/cleytin_1/"
        className="home__social-icon"
        target="_blank"
      >
        <Instagram />
      </a>
      <a
        href="https://github.com/Cleyton-Honorato"
        className="home__social-icon"
        target="_blank"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/cleyton-honorato-a5586215a/"
        className="home__social-icon"
        target="_blank"
      >
        <Linkedin />
      </a>
    </div>
  );
}
