import Carousel from 'react-bootstrap/Carousel';
import Imag1 from '../assets/img/background/ss1.jpg'; 
import Imag2 from '../assets/img/background/ss2.jpg'; 
import Imag3 from '../assets/img/background/ss3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function HeroSection() {
 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <div>
      <Carousel data-aos="zoom-out" data-bs-theme="dark" interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Imag1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Imag2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Imag3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
