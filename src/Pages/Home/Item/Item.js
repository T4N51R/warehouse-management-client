import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './item.css'
const Item = ({ item }) => {
    const { _id, name, img, price, qty, about, supplier_name } = item;
    const navigate = useNavigate();
    const handleUpdateNow = (id) => {
        navigate(`/details/${_id}`)
    }
    return (
        <div>
            <Col >
                <Card className='card-style mx-auto'
                    style={{ width: '18rem', height: '550px' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Price : $ {price}</Card.Title>
                        <Card.Title>Quantty : {qty}</Card.Title>
                        <Card.Text>
                            {about.slice(0, 50)}....
                        </Card.Text>
                        <Card.Title>Supplier : {supplier_name}</Card.Title>
                    </Card.Body>
                    {/* button will take on to the inventory page */}
                    <Card.Body>
                        <Button className='w-50 mx-auto d-block' onClick={() => handleUpdateNow(_id)}>Update</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Item;