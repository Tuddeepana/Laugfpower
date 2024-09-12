import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'tailwindcss/tailwind.css';
import Ranmuduoyai from '../assets/img/ongoin/ongoing1.jpg';
import Ranmuduoyaii from '../assets/img/ongoin/ongoing2.jpg';
import Embilipitiya from '../assets/img/ongoin/ongoing3.jpg';
import Rooftop from '../assets/img/ongoin/ongoing4.jpg';
import Anantaya from '../assets/img/ongoin/ongoing5.jpg';
import Passikudah from '../assets/img/ongoin/ongoing6.jpg';

const projects = [
  //Projects Hydro
  {
    src: Ranmuduoyai,
    title: 'Ranmudu Oya I Mini Hydro Power Plant',
    filter: 'filter-hydro',
    link: ''
  },
  {
    src: Ranmuduoyaii,
    title: 'Ranmudu Oya lii Mini Hydro Power Plant',
    filter: 'filter-hydro',
    link: ''
  },
  // Solar Projects
  {
    src: Embilipitiya,
    title: 'Embilipitiya 2 Sbspii Solar Power Plants',
    filter: 'filter-solar',
    link: ''
  },
  {
    src: Rooftop,
    title: 'The Rooftop Solar Power Plant at Laugfs Rubber Factory in Horana',
    filter: 'filter-solar',
    link: ''
  },
  {
    src: Anantaya,
    title: 'Rooftop Solar Power Plant at Anantaya Chilaw',
    filter: 'filter-solar',
    link: ''
  },
  {
    src: Passikudah,
    title: 'Rooftop Solar Power Plant at Anantaya Passikudah',
    filter: 'filter-solar',
    link: ''
  },
  // Add other projects...
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === '*'
    ? projects
    : projects.filter(project => project.filter === activeFilter);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <section id="portfolio" className="py-12 portfolio bg-[#D6EFD8]">
      <div className="container mx-auto" data-aos="fade-up">
        <header className="mb-8 text-center section-header">
          <p className="text-4xl font-semibold text-blue-900">Key Ongoing Projects</p>
        </header>
        <div className='mx-4 sm:mx-20 card-wrapper'>
          <div className="flex justify-center mb-8 row" data-aos="fade-up" data-aos-delay="100">
            <div className="justify-center col-lg-12 d-flex">
              <ul id="portfolio-flters" className="flex flex-wrap space-x-4 sm:space-x-8">
                <li
                  onClick={() => handleFilterChange('*')}
                  className={`cursor-pointer rounded-full px-4 py-2 border-2 transition-colors duration-300 ${
                    activeFilter === '*' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                  }`}
                >
                  All
                </li>
                <li
                  onClick={() => handleFilterChange('filter-solar')}
                  className={`cursor-pointer rounded-full px-4 py-2 border-2 transition-colors duration-300 ${
                    activeFilter === 'filter-solar' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                  }`}
                >
                  Solar
                </li>
                <li
                  onClick={() => handleFilterChange('filter-hydro')}
                  className={`cursor-pointer rounded-full px-4 py-2 border-2 transition-colors duration-300 ${
                    activeFilter === 'filter-hydro' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                  }`}
                >
                  Hydro
                </li>
                {/* <li
                  onClick={() => handleFilterChange('filter-wind')}
                  className={`cursor-pointer rounded-full px-4 py-2 border-2 transition-colors duration-300 ${
                    activeFilter === 'filter-wind' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                  }`}
                >
                  Wind
                </li> */}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`col-lg-4 col-md-6 px-4 mb-8 portfolio-item ${project.filter}`} data-aos="fade-up">
                <div className="relative overflow-hidden rounded-lg shadow-lg portfolio-wrap group">
                  <img
                    src={project.src}
                    className="w-full transition-transform duration-300 transform img-fluid group-hover:scale-105"
                    alt={project.title}
                    onClick={() => openLightbox(index)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-white bg-opacity-50 opacity-5 group-hover:opacity-100">
                    <button
                      className="mx-2 text-lg text-white"
                      title={project.title}
                      onClick={(e) => { e.preventDefault(); openLightbox(index); }}
                    >
                      View
                    </button>
                    <a href={project.link} className="mx-2 text-lg text-white" title="More Details">
                      More Details
                    </a>
                  </div>
                  <h5 className="text-center text-[#2b5102] py-4">{project.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={filteredProjects[photoIndex].src}
          onCloseRequest={closeLightbox}
        />
      )}
    </section>
  );
};

export default Portfolio;
