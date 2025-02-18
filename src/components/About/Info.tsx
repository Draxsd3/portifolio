import { Award, Briefcase, Headphones } from "lucide-react";

export default function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <Award className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">8 Years Working</span>
      </div>

      <div className="about__box">
        <Briefcase className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>

      <div className="about__box">
        <Headphones className="about__icon" />
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}
