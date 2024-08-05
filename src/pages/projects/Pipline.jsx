import React from 'react';
import Navigation from '../../utils/Navigation';
import Footer from '../../utils/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Pipeline() {
  const projects = [
    {
      id: 'o1',
      title: 'GonnoruwaIV Solar Power Project',
      description: [
        { head: 'Plant Install ', title: 'Capacity: 10 MW' },
        { head: 'Location: ', title: 'Hambantota' },
        { head: 'Commissioned date (expected): ', title: '12/2024' },
      ],
      imgSrc: 'https://laugfspower.lk/ver1/assets/img/ongoing4.PNG',
    },
    {
      id: 'o2',
      title: 'Manthai Wind Power Project',
      description: [
        { head: 'Plant Install Capacity: ', title: '50 MW' },
        { head: 'Location:', title: ' Mannar' },
        { head: 'Commissioned date (expected):', title: '06/2027' }
      ],
      imgSrc: 'https://laugfspower.lk/ver1/assets/img/ongoing4.PNG',
    },
    {
      id: 'o3',
      title: 'Sittrakala Solar Power Project',
      description: [
        { head: 'Plant Install Capacity:  ', title: '50 MW' },
        { head: 'Location:', title: 'Hambantota' },
        { head: 'Commissioned date (expected):', title: '06/2025' }
      ],
      imgSrc: 'https://laugfspower.lk/ver1/assets/img/ongoing4.PNG',
    },
    // ... other projects with similar updates
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navigation />
      <main className="max-w-screen-lg px-4 mx-auto" data-aos="fade-down">
        <section className="p-6">
          <div className="container mx-auto">
            {projects.slice(0, 6).map(project => (
              <div key={project.id} className="flex flex-col mb-8 overflow-hidden border border-gray-300 rounded-lg shadow-lg lg:flex-row">
                <div className="w-full lg:w-1/3">
                  <img
                    className="object-cover w-full h-64 sm:h-48"
                    src={project.imgSrc}
                    alt={project.title}
                  />
                </div>
                <div className="w-full p-6 lg:w-2/3">
                  <h2 className="mb-4 text-2xl font-semibold">{project.title}</h2>
                  <ul className="pl-5 text-gray-700 list-disc">
                    {project.description.map((item, index) => (
                      <li key={index} className="mb-2">
                        <strong>{item.head}</strong> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
