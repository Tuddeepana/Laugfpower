import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/icons/Logo/laugfspower.png'; 

export default function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <img className="w-auto h-9" src={Logo} alt="LAUGFS Logo" />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ABOUT</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">MILESTONE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">AWARDS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">BOARD OF DIRECTORS</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="PROJECTS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ONGOING PROJECTS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">PROJECTS IN THE PIPELINE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">INVESTOR RELATIONS</Nav.Link>
              <Nav.Link href="#link">CAREERS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        .navbar-nav {
          margin-left: auto; /* This will push items to the right */
        }
      `}</style>
    </div>
  );
}
