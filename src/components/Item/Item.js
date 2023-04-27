import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
import { ListGroup, ListGroupItem} from 'react-bootstrap';

const Item = ({id, name, price, img, stock}) => {

    return(
    <Row className='justify-content-center align-items-center minh-100'>
      <Card style={{ width: '18rem' }} >
                <Card.Img variant='top' src={img} alt={name} />
                <Card.Body style={{backgroundColor:'#05ff43b5'}}>
                    <Card.Title style={{ color: 'blue'}}>{name}</Card.Title>
                </Card.Body>
                    <ListGroup className='list-group-flush'>
                    <ListGroupItem>Precio: ${price}</ListGroupItem>
                    <ListGroupItem>Stock: {stock}</ListGroupItem>
                </ListGroup> 
        <Card.Footer>
          <Button style={{backgroundColor:'darkgray'}}><Link to={`/item/${id}`} className='Option'> Ver Detalle </Link></Button>
        </Card.Footer>
      </Card>
    </Row>
    )
}

export default Item;