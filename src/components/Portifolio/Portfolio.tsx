import React, { useState } from 'react';
import './Portfolio.css';

const portfolioData = [
  {
    id: 1,
    title: "WebSite Biocode",
    subtitle: "Front-End Development",
    description: "BioCode develops sustainable software, combining technology and environmental responsibility for innovative and efficient solutions.",
    image: "https://i.ibb.co/YFHFQbLp/Logos-7.png",
    tags: ["Html", "CSS", "Java Script", "hostinger"],
    category: "web",
    demoLink: "https://draxsd3.github.io/biocode/",
    codeLink: "https://github.com/Draxsd3/biocode"
  },
  {
    id: 2,
    title: "Website Gold Credit",
    subtitle: "Front-End Development",
    description: "A corporate website for Gold Credit, designed with minimalism and professionalism, ensuring an intuitive and sophisticated experience.",
    image: "https://i.ibb.co/SXMtQFRG/Logos-4.png",
    tags: ["React.js", "TypeScript", "Vite","vercel"],
    category: "web",
    demoLink: "https://goldcreditsa.com.br/",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Social Media App",
    subtitle: "Mobile Development",
    description: "Feature-rich social media application with real-time messaging, content sharing, and community engagement.",
    image: "https://i.ibb.co/v6jy8qp9/Logos-8.png",
    tags: ["React Native", "Redux", "Node.js","Firebase"],
    category: "mobile",
    demoLink: "#",
    codeLink: "#"
  }
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web' },
    { key: 'app', label: 'App' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Recent Work</span>

        <div className="portfolio__filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`portfolio__filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio__container">
          {filteredProjects.map((project) => (
            <article className="portfolio__card" key={project.id}>
              <div className="portfolio__image-wrapper">
                <img src={project.image} alt={project.title} className="portfolio__img" />
              </div>
              <div className="portfolio__content">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__subtitle">{project.subtitle}</p>
                <p className="portfolio__description">{project.description}</p>
                
                <div className="portfolio__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio__tag">{tag}</span>
                  ))}
                </div>

                <div className="portfolio__buttons">
                  <a href={project.demoLink} className="portfolio__button" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-eye"></i> Demo
                  </a>
                  <a href={project.codeLink} className="portfolio__button" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-github"></i> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;