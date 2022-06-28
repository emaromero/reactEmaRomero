import { Card, CardGroup } from 'react-bootstrap';

const ItemDetail77 = ({ product }) => {

    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className="producto__footer">
                    <h1>{product.name}</h1>
                    <Card.Text>
                        <div><p><br />{product.product}</p></div>
                        <div>{product.category}</div><br />
                        <div>{product.marca}</div>
                        <div className="price">${product.price}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default ItemDetail77