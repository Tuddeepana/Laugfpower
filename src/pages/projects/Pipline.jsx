import React from "react";
import Navigation from "../../utils/Navigation";
import Footer from "../../utils/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BreadCrum from "../../components/card/BreadCrum";
import PiplineImage from "../../assets/img/pipline/pipline.jpeg";

export default function Pipeline() {
  const projects = [
    {
      id: "o1",
      title: "GonnoruwaIV Solar Power Project",
      description: `Located in Gonnoruwa, Hambantota, on a 50-acre land, this ground-mounted solar power project will generate approximately 22.6 GWh of energy annually once constructed. This power plant will be LAUGFS Power's third 10 MW ground-mounted solar power plant.<br/><br/><b>Commissioned date (expected): 04/2025</b>`,
      imgSrc: PiplineImage,
    },
    {
      id: "o2",
      title: "Manthai Wind Power Project",
      description: `This project will be LAUGFS Power’s first wind power plant. It is proposed to be constructed in the Manthai area in the Mannar District and is expected to generate 153 GWh annually when completed.<br/><br/><b>Commissioned date (expected): 06/2027</b>`,
      imgSrc: PiplineImage,
    },
    
    // ... other projects with similar updates
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navigation />
        {/*add breadcrum */}
        <div className='p-12'>
      <BreadCrum text="PIPELINE"/>
      </div>
      <main className="max-w-screen-lg px-4 mx-auto" data-aos="fade-down">
        <section className="p-6">
          <div className="container mx-auto">
            {projects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="flex flex-col mb-8 overflow-hidden border border-gray-300 rounded-lg shadow-lg lg:flex-row"
              >
                <div className="w-full h-64 lg:h-auto lg:w-1/3">
                  <img
                    className="object-cover w-full h-full"
                    src={project.imgSrc}
                    alt={project.title}
                  />
                </div>
                <div className="w-full p-6 lg:w-2/3">
                  <h2 className="mb-4 text-2xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: project.description }} />
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