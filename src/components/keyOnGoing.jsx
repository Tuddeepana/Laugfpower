import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'tailwindcss/tailwind.css';
import Modal from 'react-modal';
import Ranmuduoyai from '../assets/img/ongoin/RanmuduoyaI.jpg';
import Ranmuduoyaii from '../assets/img/ongoin/RanmuduoyaIII.jpg';
import Embilipitiya from '../assets/img/ongoin/Embilipitiya.jpeg';
import Rooftop from '../assets/img/ongoin/Horana.jpg';
import Anantaya from '../assets/img/ongoin/Anantaya.jpeg';
import Passikudah from '../assets/img/ongoin/AnantayaPasi.jpg';

const projects = [
  {
    id: 'o1',
    src: Ranmuduoyai,
    title: 'Ranmudu Oya I Mini Hydro Power Plant',
    filter: 'filter-hydro',
    link: '/ongoin-projects#o1'
  },
  {
    id: 'o2',
    src: Ranmuduoyaii,
    title: 'Ranmudu Oya lii Mini Hydro Power Plant',
    filter: 'filter-hydro',
    link: '/ongoin-projects#o2'
  },
  {
    id: 'o3',
    src: Embilipitiya,
    title: 'Embilipitiya 2 Sbspii Solar Power Plants',
    filter: 'filter-solar',
    link: '/ongoin-projects#o3'
  },
  {
    id: 'o4',
    src: Rooftop,
    title: 'The Rooftop Solar Power Plant at Laugfs Rubber Factory in Horana',
    filter: 'filter-solar',
    link: '/ongoin-projects#o4'
  },
  {
    id: 'o5',
    src: Anantaya,
    title: 'Rooftop Solar Power Plant at Anantaya Chilaw',
    filter: 'filter-solar',
    link: '/ongoin-projects#o5'
  },
  {
    id: 'o6',
    src: Passikudah,
    title: 'Rooftop Solar Power Plant at Anantaya Passikudah',
    filter: 'filter-solar',
    link: '/ongoin-projects#o6'
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === '*'
      ? projects
      : projects.filter(project => project.filter === activeFilter);

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
      <section id="portfolio" className="py-12 portfolio bg-[#2e9b47]">
        <div className="container mx-auto" data-aos="fade-up">
          <header className="mb-8 text-center section-header">
            <p className="text-4xl font-semibold font-semibold text-blue-900 text-left">Key Ongoing Projects</p>
          </header>
          <div className='mx-4 sm:mx-20 card-wrapper '>
            <div className="flex justify-center mb-8 row " data-aos="fade-up" data-aos-delay="100">
              <div className="justify-center col-lg-12 d-flex ">
                <ul id="portfolio-flters" className="flex flex-wrap space-x-4 sm:space-x-8">
                  <li
                      onClick={() => handleFilterChange('*')}
                      className={`cursor-pointer rounded-full px-4 py-2 border-2 transition-colors duration-300 ${activeFilter === '*' ? 'border-blue-500 text-black' : 'border-gray-300 text-black hover:border-blue-500 hover:text-blue-500'
                      }`}
                  >
                    All
                  </li>
                  <li
                      onClick={() => handleFilterChange('filter-solar')}
                      className={`cursor-pointer rounded-full px-4 py-2 border-2 transition-colors duration-300 ${activeFilter === 'filter-solar' ? 'border-blue-500 text-black' : 'border-gray-300 text-black hover:border-blue-500 hover:text-blue-500'
                      }`}
                  >
                    Solar
                  </li>
                  <li
                      onClick={() => handleFilterChange('filter-hydro')}
                      className={`cursor-pointer rounded-full px-4 py-2 border-2 transition-colors duration-300 ${activeFilter === 'filter-hydro' ? 'border-blue-500 text-black' : 'border-gray-300 text-black hover:border-blue-500 hover:text-blue-500'
                      }`}
                  >
                    Hydro
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap -mx-4 row portfolio-container " data-aos="fade-up" data-aos-delay="200">
              {filteredProjects.map((project, index) => (
                  <div key={index} className={`col-lg-4 col-md-6 px-4 mb-8 portfolio-item ${project.filter}`} data-aos="fade-up">
                    <div className="relative overflow-hidden rounded-lg shadow-lg portfolio-wrap group bg-white">
                      <img
                          src={project.src}
                          className="w-full h-full object-cover transition-transform duration-300 transform img-fluid group-hover:scale-105"
                          alt={project.title}
                          onClick={() => handleViewMore(project)}
                      />
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-white bg-opacity-50 opacity-5 group-hover:opacity-100">
                        <button
                            className="mx-2 text-lg text-black"
                            title={project.title}
                            onClick={(e) => { e.preventDefault(); handleViewMore(project); }}
                        >
                          View
                        </button>
                        <Link to={project.link} className="mx-2 text-lg text-black" title="More Details">
                          More Details
                        </Link>
                      </div>
                      <h5 className="text-center text-black py-4 text-sm">{project.title}</h5>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <Modal
            isOpen={!!selectedProject}
            onRequestClose={closeModal}
            contentLabel="Project Details"
            className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          {selectedProject && (
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto relative">
                <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full p-2"
                    aria-label="Close"
                >
                  &times;
                </button>
                <img src={selectedProject.src} alt={selectedProject.title} className="w-full h-auto" />
                <h2 className="text-2xl font-semibold mt-4 text-black">{selectedProject.title}</h2>
              </div>
          )}
        </Modal>
      </section>
  );
};

export default Portfolio;