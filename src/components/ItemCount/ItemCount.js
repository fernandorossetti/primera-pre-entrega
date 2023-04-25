import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQueantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQueantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQueantity(quantity - 1)
        }
    }

    return(
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <h3>{quantity}</h3>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;