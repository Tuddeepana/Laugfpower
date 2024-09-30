import React, { useEffect } from 'react';
import Navigation from '../../utils/Navigation';
import Footer from '../../utils/Footer';
import BreadCrum from '../card/BreadCrum';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Images import 
import RanmuduOyaI from '../../assets/img/ongoin/RanmuduoyaI.jpg';
import RanmuduOyaIII from '../../assets/img/ongoin/RanmuduoyaIII.jpg';
import Embilipitiya from '../../assets/img/ongoin/Embilipitiya.jpeg';
import Horana from '../../assets/img/ongoin/Horana.jpg';
import Anantaya from '../../assets/img/ongoin/Anantaya.jpeg';
import AnantayaPassikudah from '../../assets/img/ongoin/AnantayaPasi.jpg';
import Aronchi from '../../assets/img/ongoin/Arnochi.jpg';
import Kehelgamuwa from '../../assets/img/ongoin/Kehelgamuwa.jpg';
import Ginigathena from '../../assets/img/ongoin/Ginigathhena.jpg';

const OngoingProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Scroll to the project based on the hash fragment
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const projects = [
    {
      id: 'o1',
      title: 'Ranmudu Oya I Mini Hydro Power Plant',
      description: `Located in Pinnawala, Balangoda, the Ranmudu Oya I Mini Hydro Power Plant commenced operations on the
        13th of January 2014. With an installed capacity of 500 kW, this plant utilizes two Turgo turbines to
        generate clean energy. Operating with a net head of 89 meters and a flow rate of 0.67 m3/s, Ranmudu Oya
        I makes an important contribution to the nation’s renewable energy goals.`,
      imgSrc: RanmuduOyaI,
    },
    {
      id: 'o2',
      title: 'Ranmudu Oya III Mini Hydro Power Plant',
      description: `Situated in Marathanna, Balangoda, the Ranmudu Oya III Mini Hydro Power Plant was commissioned on the
        12th of November 2015. Featuring two Turgo turbines harnessing the power of flowing water, this plant
        operates at a net head of 78 meters and a flow rate of 0.84 m3/s. With an installed capacity of 550 kW,
        it stands as a valuable addition to Sri Lanka’s clean energy sector.`,
      imgSrc: RanmuduOyaIII,
    },
    {
      id: 'o3',
      title: 'Embilipitiya 2 SBSPII Solar Power Plants',
      description: `Commissioned on the 23rd of October 2019, the Embilipitiya 2 SBSPII Solar Power Plant is located in Embilipitiya. With an installed capacity of 1 MW, 
      these solar power plants harness the abundant sunlight to generate clean energy.`,
      imgSrc: Embilipitiya,
    },
    {
      id: 'o4',
      title: 'The Rooftop Solar Power Plant At Laugfs Rubber Factory In Horana',
      description: `The Rooftop Solar Power Plant at LAUGFS Rubber Factory in Horana has an installed capacity of 375 kWp (270 kW). Commissioned in two phases, 
      with Phase I on the 17th of August 2018 and Phase II on the 11th of January 2019, 
      this plant helps the factory generate clean energy to the national grid.`,
      imgSrc: Horana,
    },
    {
      id: 'o5',
      title: 'Rooftop Solar Power Plant At Anantaya Chilaw',
      description: `Commissioned on the 13th of March 2019, the Rooftop Solar Power Plant located on top of the staff quarters at Anantaya, 
      Chilaw provides an exceptional installed capacity of 108 kWp (100 kW). The plant seamlessly converts sunlight into renewable energy, 
      helping the hotel and the surrounding communities minimize their carbon footprints.`,
      imgSrc: Anantaya,
    },
    {
      id: 'o6',
      title: 'Rooftop Solar Power Plant At Anantaya Passikudah',
      description: `Commissioned on the 12th of December 2019, the Rooftop Solar Power Plant at Anantaya Resorts and Spa, Passikudah holds an installed capacity of 182.5 kWp (150 kW). 
      This plant adds to the sustainability of the hotel.`,
      imgSrc: AnantayaPassikudah,
    },
// new added--> Need to update image
    {
      id: 'o7',
      title: 'KEHELGAMU OYA II MINI HYDRO POWER (PVT) LTD',
      description: `The Kehekgamu Oya II Mini Hydro Power Plant is located in Dagampitiya, Ginigathhena. This state-of-the-art facility will have an installed capacity of 2MW once commissioned. The plant was commissioned in December 2023`,
      imgSrc: Kehelgamuwa,
    },

    {
      id: 'o8',
      title: 'IRIS ECO POWER LANKA (PVT) LTD – IRIS (BARUTHANKANDA) SOLAR POWER PLANT',
      description: `The Iris (Baruthankanda) Solar Power Plant is situated in Hambantota. With an exceptional installed capacity of 10 MW, this solar power plant commenced operations on the 7th of February 2017. It exemplifies what can be achieved with sustainable energy. Together with the Anorchi (Baruthankanda) Solar Power Plant, it forms the largest solar power station in Sri Lanka, contributing a total of 20 MW to the national grid.`,
      imgSrc: AnantayaPassikudah,
    },

    {
      id: 'o9',
      title: 'IRIS ECO POWER LANKA (PVT) LTD – EMBILIPITIYA 3 SBSPII SOLAR POWER PLANT',
      description: `The Embilipitiya 3 SBSPII Solar Power Plant was commissioned on the 23rd of October 2019, with a capacity of 1 MW.`,
      imgSrc: AnantayaPassikudah,
    },

    {
      id: 'o10',
      title: 'ANORCHI LANKA (PVT) LTD – ANORCHI (BARUTHANKANDA) SOLAR POWER PLANT',
      description: `The Anorchi Solar Power Plant is located in Hambantota and was commissioned on the 7th of February 2017. With an impressive capacity of 10 MW, Together with the Iris (Baruthankanda) Solar Power Plant, it forms the largest solar power station in Sri Lanka, contributing a total of 20 MW to the national grid.`,
      imgSrc: Aronchi,
    },

    {
      id: 'o11',
      title: 'GINIGATHHENA THINIYAGALA MINI HYDRO POWER (PVT) LTD – GINIGATHHENA THINIYAGALA MINI HYDRO POWER PLANT',
      description: `The Ginigathena Thiniyagala Mini Hydro Power Plant was commissioned on the 9th of June 2016, in Horakada, Ginigathhena. With a robust installation capacity of 700 kW, this plant uses 2 Pelton turbines, operating at a net head of 170 meters and a flow rate of 0.52 m3/s.`,
      imgSrc: Ginigathena,
    },
  ];

  return (
      <div>
        <Navigation />
        <main className="max-w-screen-xl px-4 mx-auto">
          <div className='pt-10'>
            <BreadCrum text="ONGOING PROJECTS" />
          </div>
          <div data-aos="fade-down">
            <section className="p-6 py-6">
              <div className="container mx-auto">
                {projects.map(project => (
                    <div key={project.id} id={project.id} className="flex flex-col mb-8 overflow-hidden border border-gray-300 rounded-lg shadow-lg lg:flex-row">
                      <div className="w-full lg:w-1/3 h-64 lg:h-64">
                        <img
                            className="object-cover w-full h-full"
                            src={project.imgSrc}
                            alt={project.title}
                        />
                      </div>
                      <div className="w-full p-4 lg:w-2/3 lg:p-6">
                        <h2 className="mb-4 text-xl font-semibold md:text-2xl">{project.title}</h2>
                        <p className="text-sm text-gray-700 md:text-base">{project.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
  );
};

export default OngoingProjects;