import { GraduationCap, Briefcase, Calendar } from "lucide-react";

import "./Qualifications.css";
import { useState } from "react";

enum EQualification {
  education,
  experience,
}

export function Qualifications() {
  const [toggleState, setToggleState] = useState(EQualification.education);

  function onToggleTab(index: number) {
    setToggleState(index);
  }

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === EQualification.education
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => onToggleTab(EQualification.education)}
          >
            <GraduationCap className="uil qualification__icon" />
            Education
          </div>

          <div
            className={
              toggleState === EQualification.experience
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => onToggleTab(EQualification.experience)}
          >
            <Briefcase className="uil qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === EQualification.education
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Técnico em Informática</h3>
                <span className="qualification__subtitle">
                  Senac - Presencial
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" />
                  2022 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Mern Stack</h3>
                <span className="qualification__subtitle">
                  DankiCode - Online
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2024 -
                  6Month
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Develpment</h3>
                <span className="qualification__subtitle">
                  Alura - Online
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2024 -
                  4Month
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Desenvolvimento de Softwares</h3>
                <span className="qualification__subtitle">
                  Fatec - Presencial
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2024 -
                  Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === EQualification.experience
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Suporte Técnico</h3>
                <span className="qualification__subtitle">
                  EasySoft Sistemas
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2022 -
                  2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Development</h3>
                <span className="qualification__subtitle">
                self-employed 
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2025 -
                  Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Develpment</h3>
                <span className="qualification__subtitle">
                self-employed
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2022 -
                  Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">  Desenvolvimento de Sistemas </h3>
                <span className="qualification__subtitle">
                  Gold Credit 
                </span>
                <div className="qualification__calendar">
                  <Calendar className="qualification__calendar-icon" /> 2024 -
                  Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
