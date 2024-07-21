import Carousel from 'react-bootstrap/Carousel';
import Imag1 from '../assets/img/background/ss1.jpg'; 
import Imag2 from '../assets/img/background/ss2.jpg'; 
import Imag3 from '../assets/img/background/ss3.jpg';

export default function HeroSection() {
  return (
    <div>
      <Carousel data-bs-theme="dark" interval={5000}>
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
