import { useContext } from 'react';
import cart from './assets/cart.png';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () =>{

    const{ totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block': 'none'}}>
            <img style={{backgroundColor:'white'}} src={cart} alt="cart-widget"></img>
            { totalQuantity }
        </Link>
    )
}

export default CardWidget;