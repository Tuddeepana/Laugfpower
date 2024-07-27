import Footer from "../utils/Footer";
import HeroSection from "../utils/HeroSection";
import Navigation from "../utils/Navigation";
import ReusableCard from "../components/card/ReusableCard";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../styles/style.css";

export default function Home() {
  return (
    <div>
      <Navigation /> {/* Navigation bar */}
      <HeroSection /> {/* Hero Section */}
      <div className="p-6 mt-2 "></div>
      <h1 className="text-4xl font-bold text-center text-blue-900">
        Welcome to LAUGFS Power PLC
      </h1>
      <br></br>
      {/*-->welcome note*/}
      <p className="max-w-4xl p-4 mx-auto text-lg text-center text-gray-700 border-2 border-gradient">
        At LAUGFS Power PLC, we are committed to leading the way in renewable
        energy production and sustainability. Our efforts are focused on
        delivering innovative energy solutions that contribute to a cleaner and
        greener future for Sri Lanka. By harnessing the power of solar and hydro
        energy, we aim to support sustainable development and enhance the
        quality of life for communities across the nation. Join us in our
        mission to drive positive change and make a lasting impact through
        renewable energy.
      </p>
      <div className="flex justify-center mt-2">
        <a
          href="https://www.laugfs.lk/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-[#329946] to-[#99c83b] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>

        {/*-->Second Section*/}
      <div className="mt-2">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          How We’re Powering Sustainable Development
        </h1>
      </div>
      <div className="flex justify-center mt-2"></div>
      {/*-->section image div and 4 cards*/}
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      {/*--> Third Section - Pipline Projects*/}
      <div>
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Projects in the Pipeline
        </h1>
      </div>
      {/*Reusable image componenet --> Project in pipline*/}
      <div className="flex justify-center">
        <div className="container p-4 mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ReusableCard
                title="GonnoruwaIV Solar Power Project"
                text1="Plant Install Capacity: 10 MW"
                text2="Location: Hambantota "
                text3="Commissioned date (expected): 12/2024"
                buttonText="View More"
                imageSrc="https://via.placeholder.com/150"
              />
            </div>
            <div className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ReusableCard
                title="Manthai Wind Power Project"
                text1="Plant Install Capacity: 50 MW"
                text2="Location: Mannar "
                text3="Commissioned date (expected): 06/2027"
                
                buttonText="View More"
                imageSrc="https://via.placeholder.com/150"
              />
            </div>
            <div className="w-full px-4 mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ReusableCard
                title="Sittrakala Solar Power Project"
                text1="Plant Install Capacity: 10 MW "
                text2="Location: Hambantota "
                text3="Commissioned date (expected): 06/2025"
                
                buttonText="View More"
                imageSrc="https://via.placeholder.com/150"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
}
