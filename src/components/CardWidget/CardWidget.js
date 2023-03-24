import cart from './assets/cart.png';
import NavLink from 'react-bootstrap/esm/NavLink';

const CardWidget = () =>{
    return (
        <div>
        <NavLink> <img src={cart} alt="cart-widget"></img> 0 </NavLink>
        </div>
    )
}

export default CardWidget;