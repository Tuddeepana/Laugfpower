import React from 'react';
import Navigation from '../../utils/Navigation';
import Footer from '../../utils/Footer';

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

  return (
    <div>
      <Navigation />
      <main className="px-4 mx-20">
        <section className="p-6 py-6">
          <div className="container mx-auto">
            {projects.slice(0, 6).map(project => (
              <div key={project.id} className="flex flex-col mb-8 overflow-hidden border border-gray-300 rounded-lg shadow-lg lg:flex-row">
                <div className="w-full lg:w-1/3">
                  <img
                    className="object-cover w-full h-64"
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
