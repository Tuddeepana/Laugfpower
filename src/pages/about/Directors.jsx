
import React from 'react';
import BumpCrumbx from '../../components/card/BreadCrumb';
import Footer from '../../utils/Footer';
import Navigation from '../../utils/Navigation';


// Directors data
import Wegapitiya from '../../assets/img/leaders/bod1.jpg';
import Thilak from '../../assets/img/leaders/bod2.jpg';
import Piyadasa from '../../assets/img/leaders/bod3.jpg';
import Fernando from '../../assets/img/leaders/bod4.jpg';
import Amaratunge from '../../assets/img/leaders/bod5.jpg';
import Goonesinghe from '../../assets/img/leaders/bod6.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const directors = [
  {
    imgSrc: Wegapitiya,
    name: "Deshabandu W.K.H Wegapitiya",
    title: "GROUP CHAIRMAN",
    linkedIn: "https://www.linkedin.com/in/dr-w-k-h-wegapitiya-0919b234/",
    description: `Dr. W.K.H. Wegapitiya is the founder Chairman of LAUGFS Holdings Limited, the parent company of LAUGFS Gas PLC, one of the most highly diversified business groups in Sri Lanka, having a wide spectrum of business presence in the areas of LPG distribution, petroleum, lubricants, power generation, property development, shipping, heavy engineering, automobile services, leisure and restaurants, consumer retailing, manufacture of industrial solid tyres and salt. He currently functions as Group Chairman. He is also the non-executive Chairman of LAUGFS Gas PLC.

    He holds a degree (B.Sc) in Business Administration from the University of Sri Jayewardenepura, and obtained his MBA from the Post Graduate Institute of Management (PIM). He also holds a PhD from the Post Graduate Institute of Management of University of Sri Jayawardenapura.
    
    In 1995 he was instrumental in creating Gas Auto Lanka (Private) Limited, the initial enterprise of the now diversified LAUGFS Holdings Limited. His visionary leadership, remarkable entrepreneurship and his extraordinary personal strength to withstand and overcome all adversities thrown in his way, enabled him to succeed in all his endeavours to create the “LAUGFS” business conglomerate, in a relatively short period of time. He is a well-known figure in the local entrepreneurial community in Sri Lanka as he has led a truly successful story. He has been recognised as the best entrepreneur in the country many times over. He is a frequent speaker, presenter and a panellist on topics such as “Business Excellence”, “Leadership” and “Entrepreneurship” organised by a variety of organisations locally and overseas. He is also a well-known personality in the global LP gas and energy circles and a regular participant and speaker at international forums on LP gas and energy management. He is the Chairman of all subsidiary entities of LAUGFS Holdings Limited.
    
    He served as a Council member of the University of Sri Jayewardenepura. He was a past Chairman of Chamber of Young Lankan Entrepreneurs (COYLE), Federation of Chambers of Commerce and Industry of Sri Lanka (FCCISL) and was an executive committee member of the Ceylon Chamber of Commerce.`
  },
  {
    imgSrc:Thilak,
    name: "Mr. U.K. Thilak De Silva",
    title: "GROUP DEPUTY CHAIRMAN",
    linkedIn: "https://www.linkedin.com/in/thilak-de-silva-aaa33371/?originalSubdomain=lk",
    description: `Mr. Thilak De Silva presently serves as the Group Deputy Chairman of this highly diversified business conglomerate. The Group is engaged in the widest landscape in business in the country, consisting of LP Gas downstream operations, petroleum fuel distribution, blending, storage distribution and sale of lubricants, maritime services including ownership and management of gas carriers, heavy engineering, vehicle emission testing, property development, leisure and hospitality with ownership and management of star class hotels, consumer retail chains, the manufacture and export of solid tyres, pharmaceuticals and IV solutions, and the generation of hydro, solar and other types of renewable energy.

    Mr. Thilak De Silva hails from a widely known, well-respected family with business interests from southern Sri Lanka having had its lucrative operations in the south and in the central highlands.
    
    He had his primary and secondary education in the country and moved to the United Kingdom for his undergraduate studies in the sphere of Engineering Technology in the first instance, followed by a study in Operations Management. Having qualified from prestigious institutions in the United Kingdom in both disciplines, he returned to Sri Lanka to take up the mantle of the family business as its Executive Director.
    
    In the year 1995, however he was compelled to leave the business in the able hands of the rest of the family to join his erstwhile colleague to commence the ground breaking initiative of “LAUGFS” to convert the vehicles driven by traditional fuels into LPG driven ones. This initiative proved to be the turning point that laid the foundation for the creation of a massive business conglomerate, and the rest is history.
    
    He was instrumental in the phenomenal growth of “LAUGFS”, a household brand in Sri Lanka with over 50,000 customers across the country looking to its products and services on a daily basis for their varying needs. Mr. De Silva’s untiring efforts, business acumen and industry knowledge amply supplemented by his undisputed and amazing charisma has driven the business operations to greater heights and made an indelible imprint on the glorious story of growth and development of the Group.
    
    Mr. De Silva has been a member, mover and participant in a number of entrepreneurship and management development programmes conducted across the country and overseas. He was a recipient of a scholarship from the Association for Overseas Technical (AOTS) programme in Japan in the year 2003. He is a regular participant in many LP gas business forums conducted in various parts of the world over the years and is widely connected to industry personalities in the energy sector.`
  },
  {
    imgSrc: Piyadasa,
    name: "Mr. Piyadasa Kudabalage",
    title: "GROUP MANAGING DIRECTOR/GCEO",
    linkedIn: "#",
    description: `Mr. Piyadasa Kudabalage is the Group Managing Director and Group Chief Executive Officer of LAUGFS Holdings Limited and all its subsidiary companies. He provides overall supervision and leadership to the management of all subsidiary companies under LAUGFS Holdings Limited and all its subsidiary companies including LAUGFS Gas PLC.

    He is a well-qualified and experienced professional and an alumnus of the University of Kelaniya from where he graduated in Business Administration and Management. He is a Fellow member of the Institute of Chartered Accountants of Sri Lanka and a Fellow member of the Institute of Certified Management Accountants and the Institute of Chartered Professional Managers of Sri Lanka.
    
    He was awarded the “Professional Excellence Award” in 2014 by the Institute of Chartered Management Accountants of Sri Lanka in consideration of his outstanding career achievements and the “Prasada Sambawana” award by the University of Kelaniya in 2014 for the excellence of his service rendered to the Government of Sri Lanka.
    
    Mr. Kudabalage has an extensive and impressive career spanning over 35 years, in leading reputable public and private sector organisations in a diverse landscape of businesses across plantation management, insurance, banking and finance, leisure and hospitality, power and energy and industrial manufacturing. He heads his own reputable Audit firm as a sole proprietorship under his name.
    
    Mr. Kudabalage had occupied top- rung positions in all the sectors he was engaged with. He was the Managing Director/Chief Executive Officer of Sri Lanka Insurance Corporation Limited, Litro Gas Lanka Limited and Canwill Holdings (Private) Limited (Hyatt Hotel Group); former Director of People’s Bank and all its subsidiaries, People’s Leasing & Finance PLC and all its subsidiaries, Seylan Bank PLC, Ceybank Asset Management Limited and Colombo Dockyard PLC; and also the former Chairman of Merchant Bank of Sri Lanka, Ceylon Asset Management PLC and E-Channeling PLC. Presently, Mr. Kudabalage serves as the Chairman of Piccadilly Cafe Limited.`
  },
  {
    imgSrc:  Fernando,
    name: "Mr. P.M.B Fernando",
    title: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    linkedIn: "https://www.linkedin.com/in/mayura-fernando-792b0a63/",
    description: `Mr. P M B Fernando started his professional career at KPMG Ford Rhodes Thornton & Company and was a partner of the firm. He has extensive experience as Head of Finance, holding positions of Senior Vice President – Finance of Vanik and Forbes Ceylon Group, Group Finance Director of Confifi Group, and Director Finance – Asian Region of Virtusa (an Information Technology Company based in Boston USA).

    Mr. Fernando is a Fellow Member of the Institute of Chartered Accountants of Sri Lanka and a Fellow Member of the Chartered Institute of Management Accountants of the UK. He holds a Bachelor of Science (Applied Science) Degree from the University of Sri Jayewardenepura.
    
    In General Management Mr. Fernando was the Managing Director of Capital Reach Holdings Ltd, Director/Chief Executive Officer of Softlogic Finance PLC, Director/ Chief Executive Officer of LAUGFS Capital Ltd, and Chief Executive Officer of Orient Finance PLC.
    
    He was a Independent, Non-Executive Director and the Chairman of the Audit Committee of DFCC Bank PLC from 2013 to 2022. Currently, he is a Independent, Non-Executive Director of LAUGFS Gas PLC, LAUGFS Power PLC, LAUGFS Eco Sri Ltd., LAUGFS Leisure Ltd., The Lanka Hospitals Corporation PLC, Lanka Hospitals Diagnostics (Pvt) Ltd, Evoke International Ltd, K-Seeds Investments (Pvt) Ltd., Renuka Hotels PLC., DSI Holdings (Pvt) Ltd., and PGP Glass Ceylon PLC.`
  },
  {
    imgSrc: Amaratunge ,
    name: "Prof. S.P.P Amaratunge",
    title: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    linkedIn: "https://www.linkedin.com/in/mayura-fernando-792b0a63/",
    description: `Professor S. P. P. Amaratunge, a visionary builder of organisations, astute university administrator, academic par-excellence, renowned business consultant and humanist is presently serving as the Chairman of the University Grants Commission. He served as the Vice Chancellor, University of Sri Jayewardenepura, and was also appointed as the Chairman of the Committee of Vice Chancellors and Directors Sri Lanka (CVCD) in 2019. His substantial position is as the professor of Business Economics at the University of Sri Jayawardenapura.

    Professor Amaratunge, holds a BA (Hons.) in Economics from the University of Sri Jayewardenepura, a MA in Economics from the University of Colombo, a MSc. In Economics of Rural Development from Saga National University and Ph.D. from Kogoshima National University in Japan, counts over 27 years’ service at the University of Sri Jayewardenepura. An authority in Rural Economic Development, Professor Amaratunge has won several awards including the prestigious Research Excellence Award (2002) of the Kyushu Society of Rural Economics, Japan. He has over 75 refereed publications to his credit, both locally and internationally.
    
    Having provided yeoman service as Dean, Faculty of Management Studies and Commerce, University of Sri Jayewardenepura (2008-2014) in completing several important infrastructure development projects and setting up of specialty facility units for undergraduate and postgraduate level education, Professor Amaratunge continued his organisation building endeavours under his stewardship as Vice Chancellor (2014-2017) of the University. Thus, he spearheaded the setting up of two new Faculties of Study, namely Engineering and Technology, to the existing cluster of five (Faculties of Arts and Humanities, Management Studies and Commerce, Applied Sciences, Medicine and Graduate Studies). He served with distinction as Chairman, Federation of University Teachers Associations (FUTA) of Sri Lanka (2009 - 2012), a period studded with noteworthy achievements such as establishing sister unions, a research grant scheme for academics and a facility scheme for entry at grade one for their children. Professor Amaratunge had the honour of being the youngest appointed member of the University Grants Commission (2010), and held key positions in several State commissions of importance. In addition, not confining his services to the academia, he sits on the Boards of Management of several prominent corporates as an Independent Director.
    
    Professor Amaratunge sits on a number of other Board of Directors of several corporates as an Independent Director namely Raigam Wayamba Saltern PLC, Citizens Development Business Finance PLC, Sanasa Development Bank PLC, Southern Salt Company (Pvt) Limited and Raigam Wayamba Cereal (Pvt) Limited.`
  },
  {
    imgSrc: Goonesinghe,
    name: "Mr K.R Goonesinghe",
    title: "INDEPENDENT NON-EXECUTIVE DIRECTOR",
    linkedIn: "https://www.linkedin.com/in/mayura-fernando-792b0a63/",
    description: `Mr. K. R. Goonesinghe is an Attorney-at-Law possessing over 36 years of experience in the Bar, and is a previous Vice President of the Bar Association of Sri Lanka. He is specialised in the areas of Criminal, Civil, Commercial and Arbitration Law.

    He presently also serves on the Board of LAUGFS Power PLC as an Independent Non-Executive Director.`
  }
];

const OurLeadership = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
    return (
      <div>
        <Navigation/>
        <br></br>
    <div className=" mainwrapper" >
      
      
        {<BumpCrumbx Current="Board Of Directors"/>}

       
      <section className="py-10 text-center " data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <h1 className="text-4xl font-bold text-center text-blue-900">Our Leadership</h1>
        <br></br>
        <p className="max-w-4xl p-4 mx-auto text-lg text-center text-gray-700 border-2 border-gradient">
          Meet the visionary leaders driving LAUGFS Power PLC towards a sustainable future. Our Board of Directors brings together a wealth of expertise, experience, and a shared passion for renewable energy. Together, they deftly guide our strategic direction and inspire us to remain steadfast in our quest for excellence. Get to know the individuals steering the company’s success and shaping the renewable energy landscape in Sri Lanka.
        </p>
        <main className="main">
          <div className="flex flex-wrap justify-center directors-container">
            {directors.map((director, index) => (
              <div
                key={index}
                className="relative max-w-xs p-6 m-4 bg-white rounded-lg shadow-lg director-card group"
              >
                <img
                  src={director.imgSrc}
                  alt={`Director ${index + 1}`}
                  className="object-scale-down w-full h-48 mb-4 rounded director-image"
                />
                <h3 className="mb-2 text-xl font-semibold">{director.name}</h3>
                <p className="mb-2 font-medium text-center">{director.title}</p>
                <div className="mb-4 text-center">
                  <a
                    href={director.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="text-2xl text-blue-600 fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <div
                  className="overflow-hidden text-left transition-all duration-300 ease-in-out description max-h-0 group-hover:max-h-60 group-hover:overflow-y-auto ">
                  <p className="p-4 scrollbar scrollbar-thin  scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-track-slate-100 dark:scrollbar-thumb-slate-500 dark:scrollbar-track-slate-500/[0.16] max-h-60 lg:supports-scrollbars:pr-2 lg:max-h-60"
                    style={{ maxHeight: '200px', overflow: 'scroll',overflowX: 'hidden'}}
                    >{director.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
      <Footer/>
    </div>
    </div>
    );
  };
  
  export default OurLeadership;