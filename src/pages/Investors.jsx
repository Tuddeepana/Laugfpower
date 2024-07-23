import 'tailwindcss/tailwind.css';
import PdfCard from '../components/card/PdfCard';
import PdfIcon from '../assets/icons/source/pdf.png'; 


export default function Investors() {
  return (
   
    
    <div className='p-6'>
       
      <h1 className='text-4xl font-bold text-center text-blue-900'>
        LAUGFS Power PLC Investor Relations Hub
      </h1>
      
      <p className='max-w-5xl mx-auto mt-5 leading-relaxed text-center'>
        As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings
        and discover how you can contribute to our mission of powering a sustainable future.
      </p>
      
      <div className='flex justify-center mt-5'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl'>
          <PdfCard title='Annual Report 2020' buttonText='Download PDF' imageUrl={PdfIcon} />
          <PdfCard title='Annual Report 2019' buttonText='Download PDF' imageUrl={PdfIcon} />
          <PdfCard title='Annual Report 2018' buttonText='Download PDF' imageUrl={PdfIcon} />
          <PdfCard title='Annual Report 2017' buttonText='Download PDF' imageUrl={PdfIcon} />
          <PdfCard title='Annual Report 2016' buttonText='Download PDF' imageUrl={PdfIcon} />
        </div>
      </div>

      <p className='max-w-3xl mx-auto mt-5 leading-relaxed text-center'>
        As a prominent figure in Sri Lanka’s renewable energy landscape, we offer a range of rewarding career paths in the sector. Explore our current job openings
        and discover how you can contribute to our mission of powering a sustainable future.
      </p>
    </div>
  );
}
