import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, price, img, stock, category, description}) => {

    return(
        <Card className="text-center" style={{ width: '18rem' }} >
        <Card.Title>{name}</Card.Title>
        <Card.Img variant='top' src={img} alt={name} />
        <Card.Body>
            <Card.Text> Categoria: {category}</Card.Text>
            <Card.Text> Descipción: {description}</Card.Text>
            <Card.Text> Precio: ${price}</Card.Text>
        </Card.Body>
        <Card.Footer>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}></ItemCount>
        </Card.Footer>
      </Card>
    )
}

export default ItemDetail;