import {Navbar, Nav, Container} from 'react-bootstrap'
import "./NavBar.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
export const NavBar = () =>{
    return (


<Navbar className="nav-bar" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="#home">Scancar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav"> 
      <Nav className="ml-auto">    
          
            <Nav.Link href="find">Find booking</Nav.Link>
            <Nav.Link href="book">Book</Nav.Link>
            <Nav.Link href="pricing">Overview</Nav.Link>
            <Nav.Link href="pricing">Release</Nav.Link>
            <Nav.Link href="pricing">Request</Nav.Link>    
            <Nav.Link href="logOut"> <i className="fas fa-sign-out-alt"></i> </Nav.Link>     
            
      </Nav>

    </Navbar.Collapse> 
   
  </Container>
</Navbar>
       
    
   
    );
}