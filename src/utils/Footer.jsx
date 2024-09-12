import 'tailwindcss/tailwind.css';
import Logo from '../assets/icons/Logo/laugfspower.png';

export default function Footer() {
  return (
      <div>
        <section className="py-10 bg-[#F2F4F4] sm:pt-16 lg:pt-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 xl:gap-x-12">
              <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-4 md:justify-start">
                <img className="w-auto h-9" src={Logo} alt="LAUGFS Logo" />
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <p className="text-base font-semibold text-[#2C3E50]">ABOUT</p>
                <ul className="mt-6 space-y-5">
                  <li><a href="/milestone" aria-label="Milestones" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">MILESTONES</a></li>
                  <li><a href="/aboutus" aria-label="About Us" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">ABOUT US</a></li>
                  <li><a href="/awards" aria-label="Achievements" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">ACHIEVEMENTS</a></li>
                  <li><a href="/directors" aria-label="Board of Directors" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">BOARD OF DIRECTORS</a></li>
                </ul>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <p className="text-base font-semibold text-[#2C3E50]">OUR PROJECTS</p>
                <ul className="mt-6 space-y-4">
                  <li><a href="/ongoin" aria-label="Ongoing Projects" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">ONGOING PROJECTS</a></li>
                  <li><a href="/pipline" aria-label="Projects in the Pipeline" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">PROJECTS IN THE PIPELINE</a></li>
                </ul>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <p className="text-base font-semibold text-[#2C3E50]">CAREERS</p>
                <ul className="mt-6 space-y-5">
                  <li><a href="/career" aria-label="Careers" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">CAREERS</a></li>
                </ul>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <p className="text-base font-semibold text-[#2C3E50]">CONTACT US</p>
                <ul className="mt-6 space-y-5">
                  <li><a href="#" aria-label="Address" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">101, Maya Avenue, Colombo 06, Sri Lanka</a></li>
                  <li><a href="mailto:info@laugfs.lk" aria-label="Email" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">Email: info@laugfs.lk</a></li>
                  <li><a href="tel:+94115566222" aria-label="Telephone" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">Tel: +94 11 5 566 222</a></li>
                  <li><a href="fax:+94115577824" aria-label="Fax" className="flex text-sm text-[#2C3E50] transition-all duration-200 hover:text-[#3498DB] focus:text-[#3498DB]">Fax: +94 11 5 577 824</a></li>
                </ul>
              </div>
            </div>
            <hr className="mt-16 mb-10 border-gray-300" />
            <div className="items-center sm:flex sm:items-center sm:justify-between">
              <p className="text-sm text-[#2C3E50]">© 2024 LAUGFS IT. All Rights Reserved</p>
            </div>
          </div>
        </section>
      </div>
  );
}
