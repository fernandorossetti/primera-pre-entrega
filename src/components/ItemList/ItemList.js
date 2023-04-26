import Item from "../Item/Item";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = ({products}) => {
    return(
        <div>
            <CardGroup>
                <Card>
            {products.map(prod => <Item key={prod.id} {...prod}></Item>)}
                </Card>
            </CardGroup>
        </div>
    )
}

export default ItemList;