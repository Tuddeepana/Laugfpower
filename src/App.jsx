// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Career from './pages/Career';
import Investors from './pages/Investors';
import Aboutus from './pages/about/Aboutus';
import HeroSection from './utils/HeroSection';
import Milestone from './pages/about/Milestone';
import Directors from './pages/about/Directors';
import Awards from './pages/about/Awards';
import OngoingProjects from './components/card/onGoingListItems';
import Pipline from './pages/projects/Pipline';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/invstor" element={<Investors />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/herosection" element={<HeroSection />} />
      <Route path="/milestone" element={<Milestone />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/ongoin" element={<OngoingProjects />} />
      <Route path="/pipline" element={<Pipline />} />
    </Routes>
  );
}
