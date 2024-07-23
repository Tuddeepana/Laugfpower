import Footer from "../utils/Footer";
import HeroSection from "../utils/HeroSection";
import Navigation from "../utils/Navigation";
import ReusableCard from "../components/card/ReusableCard";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
   
    <div>
      <Navigation/> {/* Navigation bar */}
      <HeroSection /> {/* Hero Section */}
      <div className="mt-2">
        <h1 className="text-center text-blue-900 font-bold text-4xl">
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





{/*--> Ongoing projects*/}
      <div>
        <h1 className="text-center text-blue-900 font-bold text-4xl">
          Projects in the Pipeline
        </h1>
      </div>

{/*Reusable image componenet --> Project in pipline*/}
      <div className="flex justify-center">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <ReusableCard
                title="Project 1"
                text="This is a project"
                buttonText="View More"
                imageSrc="https://via.placeholder.com/150"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <ReusableCard
                title="Project 2"
                text="This is another project"
                buttonText="View More"
                imageSrc="https://via.placeholder.com/150"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <ReusableCard
                title="Project 3"
                text="This is another project"
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
