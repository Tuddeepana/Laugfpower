import 'tailwindcss/tailwind.css';
import ListComponent from '../components/list/ListComponent';
import Footer from '../utils/Footer';
import Navigation from '../utils/Navigation';


import "../styles/style.css";

export default function Career() {
  // Add list of job benefits
  const benefits = [
    "Competitive salary",
    "Flexible working hours",
    "Growth opportunities",
    "Dynamic work environment"
  ];

  return (
    <div className="p-6">
      <Navigation/>
     

      <h1 className='p-12 text-3xl font-bold text-center text-blue-900'>
        Join our team and start your career journey with us.
      </h1>

      <h2 className="mt-8 text-3xl font-semibold text-start">Why Join Us?</h2>

      <div className='flex max-w-6xl mt-2 text-justify'>
        <p className='mt-2 leading-relaxed'>
          As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings 
          and discover how you can contribute to our mission of powering a sustainable future.
        </p>

       
      </div>


      <p className='mt-2 leading-relaxed'>
          As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings 
          and discover how you can contribute to our mission of powering a sustainable future.
        </p>
      {/* Use ListComponent to display job benefits */}
     

      <h2 className='mt-3 text-2xl font-semibold text-center'>Current Job Openings</h2>
      <div className='flex justify-center mt-2'>
  <a 
    href='https://www.laugfs.lk/careers' 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white bg-gradient-to-r from-[#329946] via-[#5ba45c] to-[#99c83b] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 transition-colors duration-300"
  >
    View current vacancies
  </a>
</div>


   <Footer/>
    </div>
  );
}

