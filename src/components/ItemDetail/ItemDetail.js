import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem, Row } from 'react-bootstrap';

const ItemDetail = ({id, name, price, img, stock, category, description}) => {

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
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}></ItemCount>
                </Card.Footer>
            </Card>
        </Row>
    )
}

export default ItemDetail;