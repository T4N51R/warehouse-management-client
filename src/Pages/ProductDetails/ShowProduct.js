import React from 'react';
import { Card } from 'react-bootstrap';

const ShowProduct = ({ product }) => {
    const { _id, name, img, price, qty, about, supplier_name } = product;
    return (
        <div>
            <Card className='card-style mx-auto'
                style={{ width: '40rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Fee : $ {price}</Card.Title>
                    <Card.Title>Quantty : {qty}</Card.Title>
                    <Card.Text>
                        {about.slice(0, 50)}
                    </Card.Text>
                    <Card.Title>Supplier : {supplier_name}</Card.Title>
                </Card.Body>
                {/* button will take on to the inventory page */}

            </Card>
        </div>
    );
};

export default ShowProduct;