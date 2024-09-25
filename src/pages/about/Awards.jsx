import React, { useEffect } from 'react';
import Navigation from '../../utils/Navigation';
import Footer from '../../utils/Footer';
import Award1 from '../../assets/img/awards/award1.jpg';
import Award2 from '../../assets/img/awards/award2.png';
import Award3 from '../../assets/img/awards/award3.png';
import '../../styles/style.css'; // Ensure your global styles are here
import Aos from 'aos';
import 'aos/dist/aos.css';
import BreadCrum from '../../components/card/BreadCrum';

// Reusable award card component
const AwardCard = ({ imageSrc, heading, subheading, description }) => {
  return (
      <div className="p-6 mb-6 overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <div className="w-full h-64 mb-4 rounded-lg overflow-hidden"> {/* Adjust the height */}
            <img src={imageSrc} alt={heading} className="object-cover w-full h-full" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900">{heading}</h3>
            <h4 className="mt-2 text-xl font-semibold text-gray-700">{subheading}</h4>
            <p className="mt-4 text-gray-600">{description}</p>
          </div>
        </div>
      </div>
  );
};

export default function Awards() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
      <div>
        <div className="p-6 bg-gray-50">
          <Navigation />
          <div className='p-6'>
            <BreadCrum text="AWARDS" />
          </div>
          <main data-aos="fade-down">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AwardCard
                    imageSrc={Award1}
                    heading="1st Place - Mahaweli Entrepreneurship Presidential Award"
                    subheading="2019"
                    description="The best Mahaweli Entrepreneur of the Sustainable Energy Generation Sector. LAUGFS Solar Power Plants, System Walawa."
                />
                <AwardCard
                    imageSrc={Award2}
                    heading="TAGS AWARDS - Power & Energy Sector"
                    subheading="2022"
                    description="Compliance Award: LAUGFS Power PLC."
                />
                <AwardCard
                    imageSrc={Award3}
                    heading="RENEWABLE ENERGY GENERATION"
                    subheading="2021-2022"
                    description="Merit Award: Anorchi Lanka (Pvt) Ltd Solar Power Plant."
                />
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
  );
}

