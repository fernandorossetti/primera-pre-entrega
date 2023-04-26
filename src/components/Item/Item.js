import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, name, price, img, stock}) => {

    return(
        <Card className="text-center" style={{ width: '18rem' }} >
        <Card.Title>{name}</Card.Title>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Text> Precio: ${price}</Card.Text>
          <Card.Text> Stock: ${stock}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/item/${id}`} className='Option'> Ver Detalle </Link>
        </Card.Footer>
      </Card>
    )
}

export default Item;

/*<Card style={{ width: '18rem' }} >
<Card.Header>
    <h2>
        {name}
    </h2>
</Card.Header>
<Card.Img src={img} alt={name}>
    
</Card.Img>
<section>
    <p>
      Precio: ${price} 
    </p>
    <p>
      Stock Disponible: {stock}
    </p>
</section>
<footer>
    <button>
        Ver Detalle
    </button>
</footer>
</Card>*/