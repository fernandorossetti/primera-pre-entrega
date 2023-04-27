import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button, Row } from 'react-bootstrap';

const Item = ({id, name, price, img, stock}) => {

    return(
      <Row className='justify-content-center align-items-center minh-100'>
      <CardGroup style={{ width: '18rem' }}>
        <br/>
        <Card >
        <br/>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Title>{name}</Card.Title>
        <Card.Body>
          <Card.Text> Precio: ${price}</Card.Text>
          <Card.Text> Stock: ${stock}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant='light'><Link to={`/item/${id}`} className='Option'> Ver Detalle </Link></Button>
        </Card.Footer>
        <br />
      </Card>
      </CardGroup>
      </Row>
    )
}

export default Item;