import CardWidget from "../CardWidget/CardWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (

        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="navbar-center">
            <h3>Tecno Phone</h3>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <Nav.Link href="#contact-us">Contacto</Nav.Link>
            <CardWidget/>
          </Nav>
        </Container>
      </Navbar>
   
    )
}

export default NavBar;