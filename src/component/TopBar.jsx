import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import { Search } from "react-bootstrap-icons";
import imgProfile from "../assets/kids_icon.png";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logoNetflix" height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/tv-show" className="nav-link">
              Tv Shows
            </NavLink>
            <NavLink to="#" className="nav-link">
              Movies
            </NavLink>
            <NavLink href="#link" className="nav-link">
              Recently Added
            </NavLink>
            <NavLink href="#link" className="nav-link">
              My List
            </NavLink>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#home">
              <Search />
            </Nav.Link>
            <Nav.Link href="#link">KIDS</Nav.Link>
            <Nav.Link href="#link">
              <img src={imgProfile} alt="imgProfiloKids" height={50} />
            </Nav.Link>

            <NavDropdown title="" id="basic-nav-dropdown" align="end">
              <NavLink to="/" className="dropdown-item">
                Home
              </NavLink>
              <NavLink to="/profile-page" className="dropdown-item">
                Profilo
              </NavLink>
              <NavLink to="/setting" className="dropdown-item">
                Impostazioni
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default TopBar;
