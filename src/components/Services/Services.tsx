import { useState } from 'react';
import { X, Palette, Layout, Code, Check, ArrowRight } from 'lucide-react';
import './Services.css';

export function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: number) => {
    setToggleState(prevState => {
      document.body.style.overflow = prevState === 0 ? 'hidden' : 'auto';
      return prevState === index ? 0 : index;
    });
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <Code className="services__icon" />
            <h3 className="services__title">
              Web <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <ArrowRight className="services__button-icon" />
          </span>

          <div
            className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}
          >
            <div className="services__modal-content">
              <X className="services__modal-close" onClick={() => toggleTab(0)} />

              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience in developing high-quality websites and web applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">
                    Develop responsive websites and web applications.
                  </p>
                </li>

                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Create custom web solutions with modern frameworks.</p>
                </li>

                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Integrate with backend services and APIs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <Layout className="services__icon" />
            <h3 className="services__title">
              Back-End <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <ArrowRight className="services__button-icon" />
          </span>

          <div
            className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}
          >
            <div className="services__modal-content">
              <X className="services__modal-close" onClick={() => toggleTab(0)} />

              <h3 className="services__modal-title">Back-End Developer</h3>
              <p className="services__modal-description">
                Expertise in server-side technologies, creating robust and scalable back-end systems for web applications.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Develop and maintain server-side logic.</p>
                </li>

                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Work with databases and APIs.</p>
                </li>

                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Ensure high performance and scalability of applications.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <Palette className="services__icon" />
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <ArrowRight className="services__button-icon" />
          </span>

          <div
            className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}
          >
            <div className="services__modal-content">
              <X className="services__modal-close" onClick={() => toggleTab(0)} />

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with a keen eye for design, crafting visually stunning and user-friendly experiences.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Design UI elements and layouts.</p>
                </li>

                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Create brand identities and visual concepts.</p>
                </li>

                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Ensure consistency in visual design across platforms.</p>
                </li>

                <li className="services__modal-service">
                  <Check className="services__modal-icon" />
                  <p className="services__modal-info">Design mockups and prototypes for products.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
