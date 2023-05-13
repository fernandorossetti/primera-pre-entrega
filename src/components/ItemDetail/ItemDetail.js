import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem, Row } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({id, name, price, img, stock, category, description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return(
        <Row className='justify-content-center align-items-center'>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant='top' src={img} alt={name} />
                <Card.Body style={{backgroundColor: '#05ff43b5' }}>
                    <Card.Title style={{ color: 'blue'}}>{name}</Card.Title>
                </Card.Body>
                    <ListGroup className='list-group-flush'>
                    <ListGroupItem>Descipción: {description}</ListGroupItem> 
                    <ListGroupItem>Categoria: {category}</ListGroupItem>
                    <ListGroupItem>Precio: ${price}</ListGroupItem>
                </ListGroup> 
                <Card.Footer>
                    {
                        quantityAdded > 0 ? (
                            <Button style={{backgroundColor:'darkgray'}}><Link to={'/cart'} className='Option'> Terminar Compra </Link></Button>
                        ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                            )
                    }
                </Card.Footer>
            </Card>
        </Row>
    )
}

export default ItemDetail;