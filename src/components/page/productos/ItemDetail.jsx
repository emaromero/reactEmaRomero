import { useContext, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ detail }) => {
    const [mostrarCounter, setMostrarCounter] = useState(true)
    const { isInCart, addItem } = useContext(CartContext)

    const onAdd = (qty) => {
        setMostrarCounter(false)
        //contador envia el numero de cosas compradas
        isInCart(detail.id)
        addItem(detail, qty)
        console.log(detail)
    }

    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000" />
                <Card.Body>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className="producto__footer">
                    <h1>{detail.name}</h1>
                    <Card.Text>
                        <div><p><br />{detail.details}</p></div>
                        <div>{detail.category}</div><br />
                        <div>{detail.marca}</div>
                        <div className="price">$ {detail.price}</div>
                        <p className='detail-details' dangerouslySetInnerHTML={{ __html: detail.details }}></p>
                        {mostrarCounter ? <ItemCount inicial={1} stock={8} onAdd={onAdd} product={detail.name} />
                            :
                            <>
                                <div>
                                    <Link className="btn btn-secondary" to='/productos'>Seguir Comprando</Link>
                                    <Link className="btn btn-secondary mx-3" to='/cart'>Ir al carrito</Link>
                                </div>
                            </>
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default ItemDetail