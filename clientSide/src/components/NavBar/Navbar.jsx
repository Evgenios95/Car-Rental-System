import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import "./NavBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Scancar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link id="find" href="find">
              Find booking
            </Nav.Link>
            <Nav.Link id="book" href="book">
              Book
            </Nav.Link>
            <Nav.Link id="overview" href="overview">
              Overview
            </Nav.Link>
            <Nav.Link id="release" href="Release">
              Release
            </Nav.Link>
            <Nav.Link id="request" href="request">
              Request
            </Nav.Link>
            <Nav.Link id="logOut" href="login">
              {" "}
              <i className="fas fa-sign-out-alt"></i>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;