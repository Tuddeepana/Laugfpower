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
          <Nav.Link href="/">
            <img className="w-auto h-9" src={Logo} alt="LAUGFS Logo" />
          </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="nav-link-bold">HOME</Nav.Link>
              <NavDropdown title="ABOUT" id="basic-nav-dropdown" className="nav-link-bold">
                <NavDropdown.Item href="/aboutus" className="nav-link-bold">ABOUT</NavDropdown.Item>
                <NavDropdown.Item href="/milestone" className="nav-link-bold">MILESTONES</NavDropdown.Item>
                <NavDropdown.Item href="/awards" className="nav-link-bold">AWARDS</NavDropdown.Item>
                <NavDropdown.Item href="directors" className="nav-link-bold">BOARD OF DIRECTORS</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="PROJECTS" id="basic-nav-dropdown" className="nav-link-bold">
                <NavDropdown.Item href="/ongoin-projects" className="nav-link-bold">ONGOING PROJECTS</NavDropdown.Item>
                <NavDropdown.Item href="/project-in-pipline" className="nav-link-bold">PROJECTS IN THE PIPELINE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/investor-relations" className="nav-link-bold">INVESTOR RELATIONS</Nav.Link>
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