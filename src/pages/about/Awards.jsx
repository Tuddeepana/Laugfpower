import React from 'react';
import Navigation from '../../utils/Navigation';
import Footer from '../../utils/Footer';

// Reusable award card component
const AwardCard = ({ imageSrc, heading, subheading, description }) => {
  return (
    <div className="p-6 mb-6 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <img src={imageSrc} alt={heading} className="object-cover w-full h-48 mb-4 rounded-lg" />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900">{heading}</h2>
          <h3 className="mt-2 text-xl font-semibold text-gray-700">{subheading}</h3>
          <p className="mt-4 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Awards() {
  return (
    <div className="p-6 bg-gray-50">
      <Navigation />
      <main>
        <h1 className="p-6 mb-12 text-4xl font-bold text-center text-blue-900">Our Awards</h1>
        
        {/* Award Cards Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Award 1 */}
            <AwardCard
              imageSrc="path/to/award1-image.jpg"
              heading="Best Innovation Award"
              subheading="Technology Excellence"
              description="Recognized for outstanding innovation in technology, this award highlights our commitment to pioneering advanced solutions."
            />
            
            {/* Award 2 */}
            <AwardCard
              imageSrc="path/to/award2-image.jpg"
              heading="Top Green Initiative"
              subheading="Sustainability Leadership"
              description="Awarded for our leadership in sustainable practices and contributions towards a greener environment."
            />

            {/* Award 3 */}
            <AwardCard
              imageSrc="path/to/award3-image.jpg"
              heading="Best Customer Service"
              subheading="Excellence in Support"
              description="Celebrated for exceptional customer service and support, reflecting our dedication to client satisfaction."
            />

            {/* Add more AwardCard components as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
