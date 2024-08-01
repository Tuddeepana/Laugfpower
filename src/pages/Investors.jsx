import 'tailwindcss/tailwind.css';
import PdfCard from '../components/card/PdfCard';
import PdfIcon from '../assets/icons/source/pdf.png'; // This import seems unused, you may remove it if unnecessary

import Navigation from '../utils/Navigation';
import Footer from '../utils/Footer';  

// Pdf Cover pages import to the screen
import First from '../assets/reports/cover/2024.png';  // 2024-2023 Annual Report
import Second from '../assets/reports/cover/2023.png'; // 2023-2022 Annual Report
import Third from '../assets/reports/cover/2022.png';  // 2022-2021 Annual Report
import Fourth from '../assets/reports/cover/2021.png'; // 2021-2020 Annual Report
import Fifth from '../assets/reports/cover/2020.png';  // 2020-2019 Annual Report

//import the anual reports
import Firstp from '../assets/reports/pdf/2024.pdf'
import Secondp from '../assets/reports/pdf/2023.pdf'
import Thirdp from '../assets/reports/pdf/2022.pdf'
import Forthp from '../assets/reports/pdf/2021.pdf'
import Fifthp from '../assets/reports/pdf/2020.pdf'

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import "../styles/style.css";

export default function Investors() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='p-6'>
      <Navigation />

      <div data-aos="fade-down"> 
      <br />
      <h1 className='p-6 text-4xl font-bold text-center text-blue-900'>
        LAUGFS Power PLC Investor Relations Hub
      </h1>
      
      <p className="max-w-4xl p-4 mx-auto text-lg text-center text-gray-700 border-2 border-gradient">
        As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings
        and discover how you can contribute to our mission of powering a sustainable future.
      </p>
      
      <div className='flex justify-center mt-5'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl'>
          <PdfCard 
            title='2024-2023 Annual Report' 
            buttonText='Download PDF' 
            imageUrl={First} 
            pdfUrl={Firstp} 
          />
          <PdfCard 
            title='2023-2022 Annual Report' 
            buttonText='Download PDF' 
            imageUrl={Second} 
            pdfUrl={Secondp} 
          />
          <PdfCard 
            title='2022-2021 Annual Report' 
            buttonText='Download PDF' 
            imageUrl={Third} 
            pdfUrl={Thirdp} 
          />
          <PdfCard 
            title='2021-2020 Annual Report' 
            buttonText='Download PDF' 
            imageUrl={Fourth} 
            pdfUrl={Forthp} 
          />
          <PdfCard 
            title='2020-2019 Annual Report' 
            buttonText='Download PDF' 
            imageUrl={Fifth} 
            pdfUrl={Fifthp} 
          />
        </div>
      </div>

      <p className='max-w-3xl mx-auto mt-5 leading-relaxed text-center'>
        As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings
        and discover how you can contribute to our mission of powering a sustainable future.
      </p>
      </div>

      <Footer />
    </div>
  );
}
