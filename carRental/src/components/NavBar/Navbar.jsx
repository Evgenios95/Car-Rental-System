import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavigationLabels } from "../../utils/constants/general-labels";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" expand="md" sticky="top">
      <Container>
        <Nav.Link className="text-white" as={Link} to="/">
          <Navbar.Brand>{NavigationLabels.brand}</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="container-fluid">
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="mx-auto text-center w-100"
          >
            <Nav.Link className="text-white" as={Link} to="/book">
              <span>{NavigationLabels.book}</span>
            </Nav.Link>
            <NavDropdown title="Overviews" id="nav-dropdown">
              <Nav.Link className="text-white" as={Link} to="/booking-overview">
                <span>{NavigationLabels.bookingOverview}</span>
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/car-overview">
                <span>{NavigationLabels.carOverview}</span>
              </Nav.Link>
            </NavDropdown>
            <Nav.Link className="text-white" as={Link} to="/release">
              <span>{NavigationLabels.release}</span>
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/request">
              <span>{NavigationLabels.request}</span>
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/statistics">
              <span>{NavigationLabels.statistics}</span>
            </Nav.Link>
            <Nav.Link className="text-white ms-auto" as={Link} to="/">
              <span>
                <i className="fas fa-sign-out-alt"></i>
              </span>
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
