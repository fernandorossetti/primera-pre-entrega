import { Button } from "react-bootstrap";
import CardWidget from "../CardWidget/CardWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Button variant="link">
              <Link to='/'>
            <h3>Tecno Phone</h3>
            </Link>
            </Button>
          </Navbar.Brand>
          <Nav className='justify-content-center align-items-center'>
            <Button variant="link"><NavLink to={`/category/iPhone`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>iPhone</NavLink></Button>{' '}
            <Button variant="link"><NavLink to={`/category/MacBook`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>MacBook</NavLink></Button>{' '}
            <Button variant="link"><NavLink to={`/category/Accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink></Button>{' '}
            <CardWidget />
          </Nav>
        </Container>
      </Navbar>
   
    )
}

export default NavBar;