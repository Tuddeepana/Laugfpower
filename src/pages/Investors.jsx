import 'tailwindcss/tailwind.css';
import PdfCard from '../components/card/PdfCard';
import PdfIcon from '../assets/icons/source/pdf.png';

import Navigation from '../utils/Navigation'
import Footer from '../utils/Footer'  

//Add the following import statement
//Pdf Cover pages import to the screen
import First from '../assets/reports/cover/2024.png';  //2024-2023 Anual Report
import Second from '../assets/reports/cover/2023.png'; //2023-2022 Anual Report
import Third from '../assets/reports/cover/2022.png';  //2022-2021 Anual Report
import Fourth from '../assets/reports/cover/2021.png'; //2021-2020 Anual Report
import Fifth from '../assets/reports/cover/2020.png';  //2020-2019 Anual Report


export default function Investors() {
  return (
   
    
    <div className='p-6'>
      <Navigation/>
       <br></br>
      <h1 className='p-6 text-4xl font-bold text-center text-blue-900'>
        LAUGFS Power PLC Investor Relations Hub
      </h1>
      
      <p className="max-w-4xl p-4 mx-auto text-lg text-center text-gray-700 border-2 border-gradient">
        As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings
        and discover how you can contribute to our mission of powering a sustainable future.
      </p>
      
      <div className='flex justify-center mt-5'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl'>
          <PdfCard title='2024-2023 Anual Report' buttonText='Download PDF' imageUrl={First} />
          <PdfCard title='2023-2022 Anual Report' buttonText='Download PDF' imageUrl={Second} />
          <PdfCard title='2022-2021 Anual Report' buttonText='Download PDF' imageUrl={Third} />
          <PdfCard title='2021-2020 Anual Report' buttonText='Download PDF' imageUrl={Fourth} />
          <PdfCard title='2020-2019 Anual Report' buttonText='Download PDF' imageUrl={Fifth} />
        </div>
      </div>

      <p className='max-w-3xl mx-auto mt-5 leading-relaxed text-center'>
        As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings
        and discover how you can contribute to our mission of powering a sustainable future.
      </p>

      <Footer/>
    </div>
  );
}
