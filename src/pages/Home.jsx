import React from 'react';
import Footer from "../utils/Footer";
import HeroSection from "../utils/HeroSection";
import Navigation from "../utils/Navigation";
import ReusableCard from "../components/card/ReusableCard";
import img from "../assets/gif/video2.gif";

//Importing the images --> Project in pipeline
import Project1 from '../assets/img/pipline/project1.jpg';
import Project2 from '../assets/img/pipline/project2.jpg';
import Project3 from '../assets/img/pipline/project3.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import "../styles/style.css";
import Portfolio from '../components/keyOnGoing';


const RedRectangle = ({title}) => {
  return (
    <div className="h-20 p-4 text-black bg-gray-300 rounded-md w-80">
      <h2 className="text-lg font-bold">{title}</h2>
      
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navigation /> {/* Navigation bar */}
      <HeroSection /> {/* Hero Section */}
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      <h1 className="mt-6 text-4xl font-bold text-center text-blue-900 ">
        Welcome to LAUGFS Power PLC
      </h1>
      </div>
      
      {/* Welcome note */}
      <div data-aos="zoom-in">
      <p className="max-w-4xl p-4 mx-auto mt-4 text-lg text-center text-gray-700 border-2 border-gradient">
        At LAUGFS Power PLC, we are committed to leading the way in renewable
        energy production and sustainability. Our efforts are focused on
        delivering innovative energy solutions that contribute to a cleaner and
        greener future for Sri Lanka. By harnessing the power of solar and hydro
        energy, we aim to support sustainable development and enhance the
        quality of life for communities across the nation. Join us in our
        mission to drive positive change and make a lasting impact through
        renewable energy.
      </p>
      </div>
      
      <div className="flex justify-center mt-4">
        <a
          href="https://www.laugfs.lk/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-[#329946] to-[#99c83b] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Second Section */}
      {/* Third Section - Pipeline Projects */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-center text-blue-900 " data-aos="fade-up" data-aos-delay="100">
        How We’re Powering Sustainable Development
        </h1>
      </div>

      
      <div className="flex flex-col mt-6 md:flex-row">
        <div className="p-4 md:w-1/2">
          <img src={img} alt="Description of GIF" className="object-cover w-auto h-auto rounded-md" />
        </div>
        <div className="flex flex-wrap gap-4 p-4 md:w-1/2">
          <RedRectangle title="Renewable Energy Integration" />
          <RedRectangle title="Community Engagement"  />
          <RedRectangle title="Technological Innovation"  />
          <RedRectangle title="Environmental Conservation"  />
        </div>
      </div>

       {/* third Section - Pipeline Projects */}
       <div className="mt-6">
       <Portfolio/>

        
      </div>
      

      
      
      {/* fourth Section - Pipeline Projects */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Projects in the Pipeline
        </h1>
      </div>

      {/* Reusable image component --> Project in pipeline */}
      <div className="flex justify-center">
        <div className="container p-4 mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ReusableCard
                title="GonnoruwaIV Solar Power Project"
                text1="Plant Install Capacity: 10 MW"
                text2="Location: Hambantota"
                text3="Commissioned date (expected): 12/2024"
                buttonText="View More"
                imageSrc={Project1}
              />
            </div>
            <div className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ReusableCard
                title="Manthai Wind Power Project"
                text1="Plant Install Capacity: 50 MW"
                text2="Location: Mannar"
                text3="Commissioned date (expected): 06/2027"
                buttonText="View More"
                imageSrc={Project2}
              />
            </div>
            <div className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ReusableCard
                title="Sittrakala Solar Power Project"
                text1="Plant Install Capacity: 10 MW"
                text2="Location: Hambantota"
                text3="Commissioned date (expected): 06/2025"
                buttonText="View More"
                imageSrc={Project3}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer /> {/* Footer */}
    </div>
  );
}
