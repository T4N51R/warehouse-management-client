import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Item = ({ item }) => {
    const { _id, name, img, price, qty, about, supplier_name } = item;
    return (
        <div>
            <Col >
                <Card className='card-style mx-auto'
                    style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Fee : $ {price}</Card.Title>
                        <Card.Title>Quantty : {qty}</Card.Title>
                        <Card.Text>
                            {about}
                        </Card.Text>
                    </Card.Body>
                    {/* button will take on to the checkout page */}
                </Card>
            </Col>
        </div>
    );
};

export default Item;