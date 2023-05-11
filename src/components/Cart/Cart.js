import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () =>{
    const {cart, clearCart, totalQuanty, total} = useContext(CartContext)

    if(totalQuanty === 0){
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Button style={{backgroundColor:'darkgray'}}><Link to={'/'} className='Option'>Productos</Link></Button>
            </div>
        )
    }

    return(
        <div>
            { cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <Button style={{backgroundColor:'darkgray'}} onClick={() => clearCart()} className="Button">Limpiar Carrito</Button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )

}
export default Cart