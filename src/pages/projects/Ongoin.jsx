import React from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const OngoingProjects = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const projects = [
    {
      id: 'o1',
      title: 'Ranmudu Oya I Mini Hydro Power Plant',
      description: `Located in Pinnawala, Balangoda, the Ranmudu Oya I Mini Hydro Power Plant commenced operations on the
        13th of January 2014. With an installed capacity of 500 kW, this plant utilizes two Turgo turbines to
        generate clean energy. Operating with a net head of 89 meters and a flow rate of 0.67 m3/s, Ranmudu Oya
        I makes an important contribution to the nation’s renewable energy goals.`,
      imgSrc: 'https://laugfspower.lk/ver1/assets/img/ongoing4.PNG',
    },
    // {
    //   id: 'o2',
    //   title: 'Ranmudu Oya III Mini Hydro Power Plant',
    //   description: `Situated in Marathanna, Balangoda, the Ranmudu Oya III Mini Hydro Power Plant was commissioned on the
    //     12th of November 2015. Featuring two Turgo turbines harnessing the power of flowing water, this plant
    //     operates at a net head of 78 meters and a flow rate of 0.84 m3/s. With an installed capacity of 550 kW,
    //     it stands as a valuable addition to Sri Lanka’s clean energy sector.`,
    //   imgSrc: 'https://laugfspower.lk/ver1/assets/img/ongoing4.PNG',
    // },
    {
      id: 'o3',
      title: 'Embilipitiya 2 SBSPII Solar Power Plants',
      description: `Commissioned on the 23rd of October 2019, the Embilipitiya 2 SBSPII Solar Power Plant is located in Embilipitiya. With an installed capacity of 1 MW, 
      these solar power plants harness the abundant sunlight to generate clean energy.`,
      imgSrc: 'https://laugfspower.lk/ver1/assets/img/ongoing4.PNG',
    },
    // Add other projects here...
  ];

  return (
    <main className="px-4 mx-20">
      {/* Portfolio Details Section */}
      <div data-aos="fade-down" >
      <section className="py-6">
        <div className="container mx-auto">
          {projects.map(project => (
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
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
};

export default OngoingProjects;
