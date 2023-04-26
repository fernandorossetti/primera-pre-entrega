import CardWidget from "../CardWidget/CardWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (

        <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand className="navbar-center">
            <Link to='/'>
            <h3>Tecno Phone</h3>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={`/category/servicios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Servicios</NavLink>
            <NavLink to={`/category/productos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
            <NavLink to={`/category/contacto`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
            <CardWidget/>
          </Nav>
        </Container>
      </Navbar>
   
    )
}

export default NavBar;