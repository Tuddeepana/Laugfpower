import Footer from '../../utils/Footer';
import Navigation from '../../utils/Navigation';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Aboutus from '../../assets/img/about/About.jpg';

// Reusable heading component
const ReusableHeading = ({ children, className = '' }) => {
  return (
    <h3 className={`text-start text-green-500 font-semibold text-2xl mt-8 ${className}`}>
      {children}
    </h3>
  );
};

// Reusable paragraph component
const ReusableParagraph = ({ paragraph, className = '' }) => {
  return (
    <p className={`mt-4 text-justify mb-6 text-lg ${className}`}>
      {paragraph}
    </p>
  );
};

// Reusable card component
const ReusableCard = ({ title, children, animationClass }) => {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 animate__animated ${animationClass}`}>
      <h2 className="mb-4 text-2xl font-semibold text-green-600">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default function AboutUs() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='p-6 bg-gray-50'>
      <Navigation/>
      <br></br>
      <div data-aos="fade-down">
      <h1 className='p-6 mb-6 text-4xl font-bold text-center text-blue-900'>
        About LAUGFS Power PLC
      </h1>

      {/* About us page body (1) */}
      <div className="flex flex-col items-start mb-8 md:flex-row">
        <div className="flex-1 md:mr-6">
          <ReusableHeading>
            Powering a Greener Tomorrow
          </ReusableHeading>
          <ReusableParagraph
            paragraph={
              "At LAUGFS Power PLC, we stand at the forefront of Sri Lanka’s journey towards a sustainable future. As a proud subsidiary of LAUGFS Holdings, one of Sri Lanka’s most respected conglomerates, our impact goes beyond renewable power generation alone. We are committed to powering sustainable development and a green transformation across the nation, harnessing the boundless potential of our renewable resources to power industries and light up lives. Established with a vision of emerging as a pillar in Sri Lanka’s renewable energy sector, LAUGFS Power PLC has grown exponentially. Our portfolio includes the nation’s largest solar power plant and a diverse array of wind, solar, and hydro power plants, contributing over 38GWh annually to the national grid. This capacity not only illuminates lives but also embodies our broader pledge to environmental stewardship and economic prosperity."
            }
          />
        </div>
        <div className="flex-none w-full md:w-1/3">
          <img src={Aboutus} alt="Description of image" className="object-cover w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      {/* About us page body (2) */}
      <div className="flex flex-col items-start mb-8 md:flex-row">
        <div className="flex-1 md:mr-6">
          <ReusableHeading>
            Innovating a Green Energy Transformation
          </ReusableHeading>
          <ReusableParagraph
            paragraph={
              "Innovation towards more sustainable energy solutions is at the heart of our mission. We continuously explore cutting-edge technologies and pioneering strategies to enhance our renewable energy production. Our commitment to collaboration, research, and development ensures we stay ahead of the curve, driving the energy sector towards more efficient, sustainable power practices."
            }
          />
        </div>
        {/* No image here */}
      </div>

      {/* About us page body (3) */}
      <div className="flex flex-col items-start mb-8 md:flex-row">
        <div className="flex-1 md:mr-6">
          <ReusableHeading>
            Empowering People & Planet
          </ReusableHeading>
          <ReusableParagraph
            paragraph={
              "At LAUGFS Power PLC, we are deeply invested in the welfare of our communities and the preservation of our planet. Each project we undertake is designed to have a positive environmental impact, support local economies, and contribute towards Sri Lanka’s broader sustainability goals. Through strategic partnerships and responsible practices, we aim to build a legacy of empowerment and environmental stewardship."
            }
          />
        </div>
        {/* No image here */}
      </div>

      {/* About us page body (4) */}
      <div className="flex flex-col items-start mb-8 md:flex-row">
        <div className="flex-1 md:mr-6">
          <ReusableHeading>
            Join the Clean Energy Revolution
          </ReusableHeading>
          <ReusableParagraph
            paragraph={
              "Whether you are a potential investor, a future employee, looking to collaborate with us, or just someone who is passionate about renewable energy, there is a way for you to be a part of our journey at LAUGFS Power PLC. Discover more about our projects, our impact, and how you can be a part of our mission. And, together, we can power a cleaner, greener tomorrow!"
            }
          />
        </div>
        {/* No image here */}
      </div>

      {/* Vision and Mission Cards */}
      <div className="container mx-auto my-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Vision Card */}
          <ReusableCard title="Vision" animationClass="animate__fadeInLeft">
            Power sustainable development across Sri Lanka, fueled by the unlimited opportunities presented by limitless renewable energy solutions.
          </ReusableCard>
          {/* Mission Card */}
          <ReusableCard title="Mission" animationClass="animate__fadeInRight">
            To light the path to a greener Sri Lanka by pioneering sustainable energy solutions that brighten lives.
          </ReusableCard>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
