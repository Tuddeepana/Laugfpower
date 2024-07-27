import { Route, Routes } from 'react-router-dom';
import Career from './pages/Career'
 import Investors from './pages/Investors'
import Footer from './utils/Footer'

import Aboutus from "./pages/about/Aboutus";

 import Home from "./pages/Home";

 import HeroSection from "./utils/HeroSection";
import Milestone from './pages/about/Milestone';
import Directors from './pages/about/Directors';
import Awards from './pages/about/Awards';
import OngoingProjects from './components/card/onGoingListItems';




export default function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/career" element={<Career/>} />
    <Route path="/invstor" element={<Investors />} />
    <Route path="/aboutus" element={<Aboutus />} />
    <Route path="/herosection" element={<HeroSection />} />
    <Route path="/milestone" element={<Milestone/>} />
    <Route path="/directors" element={<Directors/>} />
    <Route path="/awards" element={<Awards/>} />
    <Route path="/aboutus" element={<Aboutus/>} />
    <Route path="/ongoin" element={<OngoingProjects/>} />
    
    </Routes>
     
   
    </div>
  )
}
