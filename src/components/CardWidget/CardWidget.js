import cart from './assets/cart.png';
import Nav from 'react-bootstrap/Nav';

const CardWidget = () =>{
    return (
        <div>
        <Nav.Link href="#cart"> <img style={{backgroundColor:'white'}} src={cart} alt="cart-widget"></img> 0 </Nav.Link>
        </div>
    )
}

export default CardWidget;