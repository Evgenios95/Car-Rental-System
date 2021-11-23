import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavigationLabels } from "../../text/text";

/**
 * as={Link} translates the NavLink into a Link from react-router-dom.
 * removed the !important properties
 * experimented and added more classes to the elements
 */
const NavBar = () => {
  return (
    <Navbar className="nav-bar" expand="md" sticky="top">
      <Container>
        <Navbar.Brand>{NavigationLabels.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="container-fluid">
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="mx-auto text-center w-100"
          >
            <Nav.Link className="text-white" as={Link} to="/find-booking">
              <span>{NavigationLabels.find}</span>
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/book">
              <span>{NavigationLabels.book}</span>
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/overview">
              <span>{NavigationLabels.overview}</span>
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/release">
              <span>{NavigationLabels.release}</span>
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/request">
              <span>{NavigationLabels.request}</span>
            </Nav.Link>
            <Nav.Link className="text-white ms-auto" as={Link} to="/login">
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
