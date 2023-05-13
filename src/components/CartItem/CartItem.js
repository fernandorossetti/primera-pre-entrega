import { React } from "react";

const CartItem =({product}) =>{
    return(
        <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.quantity} unidades</p>
            <p>Subtotal: $
            {product.price*product.quantity}</p>
        </div>
    )
}

export default CartItem