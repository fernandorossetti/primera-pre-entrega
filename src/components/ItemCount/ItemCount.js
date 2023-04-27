import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

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
        <ButtonToolbar className="mb-3, justify-content-center align-items-center" aria-label="Toolbar with Button groups">
            <ButtonGroup className="me-2" aria-label="First group">
                <Button onClick={decrement}>-</Button>
            </ButtonGroup>
            <h3>{quantity}</h3>
            <ButtonGroup className="me-2" aria-label="Second group">
                <Button onClick={increment}>+</Button>
            </ButtonGroup>
        </ButtonToolbar>
        <br/>
        <ButtonToolbar className="justify-content-center" aria-label="Toolbar with Button groups">
            <Button onClick={() => onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
            </Button>
        </ButtonToolbar>
        </div>
    )
}

export default ItemCount;