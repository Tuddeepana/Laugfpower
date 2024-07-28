import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/icons/Logo/laugfspower.png'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Navigation() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div >
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container data-aos="fade-down">
          <img className="w-auto h-9" src={Logo} alt="LAUGFS Logo" />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="nav-link-bold">HOME</Nav.Link>
              <NavDropdown title="ABOUT" id="basic-nav-dropdown" className="nav-link-bold">
                <NavDropdown.Item href="/aboutus" className="nav-link-bold">ABOUT</NavDropdown.Item>
                <NavDropdown.Item href="/milestone" className="nav-link-bold">MILESTONE</NavDropdown.Item>
                <NavDropdown.Item href="/awards" className="nav-link-bold">AWARDS</NavDropdown.Item>
                <NavDropdown.Item href="directors" className="nav-link-bold">BOARD OF DIRECTORS</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="PROJECTS" id="basic-nav-dropdown" className="nav-link-bold">
                <NavDropdown.Item href="/ongoin" className="nav-link-bold">ONGOING PROJECTS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="nav-link-bold">PROJECTS IN THE PIPELINE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/invstor" className="nav-link-bold">INVESTOR RELATIONS</Nav.Link>
              <Nav.Link href="/career" className="nav-link-bold">CAREERS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        .navbar-nav {
          margin-left: auto; /* This will push items to the right */
        }
        .nav-link-bold {
          font-weight: 900;
          color: #232e66; /* Text color */
        }
      `}</style>
    </div>
  );
}
