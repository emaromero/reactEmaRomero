import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Item = (personaje) => {
    const {name, image, species, status}= personaje
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Especie: {species}
                        Estado: {status}
                    </Card.Text>
                    <Button variant="primary">Ver Detalle</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
