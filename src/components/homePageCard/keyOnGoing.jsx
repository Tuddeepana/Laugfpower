import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'tailwindcss/tailwind.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Modal from 'react-modal';



Modal.setAppElement('#root'); // Ensure accessibility

const projects = [
  {
    src: 'https://laugfspower.lk/ver1/assets/img/ongoing1.PNG',
    title: 'Ranmudu Oya I Mini Hydro Power Plant',
    filter: 'filter-hydro',
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
    <section id="portfolio" className="portfolio py-12">
      <div className="container mx-auto" data-aos="fade-up">
        <header className="section-header text-center mb-8">
          <p className="text-4xl font-semibold text-blue-900">Key Ongoing Projects</p>
        </header>
        <div className='card-wrapper mx-20'>
          <div className="row flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-center">
              <ul id="portfolio-flters" className="flex space-x-4">
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
                <li
                  onClick={() => handleFilterChange('filter-wind')}
                  className={`cursor-pointer rounded-full px-4 py-2 border-2 transition-colors duration-300 ${
                    activeFilter === 'filter-wind' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                  }`}
                >
                  Wind
                </li>
              </ul>
            </div>
          </div>

          <div className="row flex flex-wrap -mx-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`col-lg-4 col-md-6 px-4 mb-8 portfolio-item ${project.filter}`} data-aos="fade-up">
                <div className="portfolio-wrap relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={project.src}
                    className="img-fluid w-full transition-transform duration-300 transform group-hover:scale-105"
                    alt={project.title}
                    onClick={() => openLightbox(index)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 opacity-5 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="text-lg text-white mx-2"
                      title={project.title}
                      onClick={(e) => { e.preventDefault(); openLightbox(index); }}
                    >
                      View
                    </button>
                    <a href={project.link} className="text-lg text-white mx-2" title="More Details">
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
