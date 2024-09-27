import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the default styles

import WorkIcon from '@mui/icons-material/Work'; // Import icons from MUI or your preferred library
import StarIcon from '@mui/icons-material/Star';
import Navigation from '../../utils/Navigation'; // Ensure this path is correct
import Footer from '../../utils/Footer';
import BackgroundImage from '../../assets/img/background/milestone.jpg'; // Import the background image
import BreadCrum from '../../components/card/BreadCrum';

// Add for this page styles here 
const dateStyle = {
  fontWeight: 'bold',
  fontSize: '1.25rem', // Equivalent to text-xl in Tailwind CSS
};



const milestoneStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Make sure it covers the full viewport height
};

export default function Milestone() {
  return (
    <div style={milestoneStyle}>
      <Navigation />
      <div className='p-12'>
        <BreadCrum text="MILESTONES" />
      </div>

      <img src={BackgroundImage} alt="Milestone Background" style={{ width: '100%', height: 'auto' }} />
      <Footer />

    
      {/* <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={dateStyle}>2019</span>}
          iconStyle={{ background: 'linear-gradient(135deg, rgb(46, 155, 71), rgb(158, 210, 61))', color: '#fff' }}
        >
          <h3 style={dateStyle}>11TH JANUARY</h3>
          <p>Rooftop Solar Power Plant at Laugfs Rubber Factory, Horana Phase II</p>
          <br />
          <h3 style={dateStyle}>13TH MARCH</h3>
          <p>Rooftop Solar Power Plant at Anantaya Chilaw Hotel</p>
          <br />
          <h3 style={dateStyle}>23RD OCTOBER</h3>
          <p>Embilipitiya 2 SBSPII Solar Power Plant</p>
          <p>Embilipitiya 3 SBSPII Solar Power Plant</p>
          <br />
          <h3 style={dateStyle}>12TH DECEMBER</h3>
          <p>Rooftop Solar Power Plant at Anantaya Passikudah</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={dateStyle}>2018</span>}
          iconStyle={{ background: 'linear-gradient(135deg, rgb(46, 155, 71), rgb(158, 210, 61))', color: '#fff' }}
        >
          <h3 style={dateStyle}>17TH AUGUST</h3>
          <p>Rooftop Solar Power Plant at Laugfs Rubber Factory, Horana Phase I</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={dateStyle}>2017</span>}
          iconStyle={{ background: 'linear-gradient(135deg, rgb(46, 155, 71), rgb(158, 210, 61))', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 style={dateStyle}>07TH FEBRUARY</h3>
          <p>Iris (Baruthankanda) Solar Plant Anorchi (Baruthankanda) Solar Plant</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={dateStyle}>2016</span>}
          iconStyle={{ background: 'linear-gradient(135deg, rgb(46, 155, 71), rgb(158, 210, 61))', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 style={dateStyle}>09TH JUNE</h3>
          <p>Ginigathhena Thiniyagala Mini Hydro Power Plant</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={dateStyle}>2015</span>}
          iconStyle={{ background: 'linear-gradient(135deg, rgb(46, 155, 71), rgb(158, 210, 61))', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 style={dateStyle}>12TH NOVEMBER</h3>
          <p>Ranmudu Oya III Mini Hydro Power Plant</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={dateStyle}>2014</span>}
          iconStyle={{ background: 'linear-gradient(135deg, rgb(46, 155, 71), rgb(158, 210, 61))', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 style={dateStyle}>13TH JANUARY</h3>
          <p>Ranmudu Oya I Mini Hydro Power Plant</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'linear-gradient(135deg, rgb(46, 155, 71), rgb(158, 210, 61))', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline> */}
      
    
    </div>
  );
}