import 'tailwindcss/tailwind.css';
import ListComponent from '../components/list/ListComponent';
import Footer from '../utils/Footer';


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

      <h1 className='text-center text-blue-900 font-bold text-4xl'>
        Join our team and start your career journey with us.
      </h1>

      <h2 className="text-start font-semibold text-3xl mt-8">Why Join Us?</h2>

      <div className='flex mt-2 max-w-6xl text-justify'>
        <p className='leading-relaxed mt-2'>
          As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings 
          and discover how you can contribute to our mission of powering a sustainable future.
        </p>
      </div>

      {/* Use ListComponent to display job benefits */}
      <h2 className='text-start font-semibold text-2xl mt-8'>Job Benefits</h2>
      <div className="mt-4">
        <ListComponent items={benefits} />
      </div>

      <h2 className='text-center font-semibold text-2xl mt-3'>Current Job Openings</h2>

      <div className='flex justify-center mt-2'>
        <a 
          href='https://www.laugfs.lk/careers' 
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
        >
          View current vacancies
        </a>
      </div>
   <Footer/>
    </div>
  );
}

