import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useCart from '../../hooks/useCart';
import UseLoadProducts from '../../hooks/UseLoadProducts';

const ShowMyItem = ({ product }) => {
    const { _id, name, img, price, qty, about, supplier_name } = product;
    const [products, setProducts] = UseLoadProducts();
    const [cart, setCart] = useCart();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            // delete from main database
            const url = `https://pure-lake-46186.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        toast('Product Deleted');
                        window.location.reload();
                    }
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
            // delete from user Database 
            const remainingCart = cart.filter(product => product._id !== id);
            setCart(remainingCart);
        }
    }
    return (
        <div>
            <Col >
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
                    <Card.Body>
                        <Button className='w-50 mx-auto d-block' onClick={() => handleDelete(_id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ShowMyItem;