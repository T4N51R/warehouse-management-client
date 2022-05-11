import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import UseLoadProducts from '../../hooks/UseLoadProducts';
import 'react-toastify/dist/ReactToastify.css';
import './Inventory.css'
import { useNavigate } from 'react-router-dom';

const Inventory = ({ product }) => {
    const { _id, name, img, price, qty, about, supplier_name } = product;
    const navigate = useNavigate();
    const [products, setProducts] = UseLoadProducts();
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
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
        }
    }
    return (
        <div className=''>
            <Col >
                <Card className='card-style mx-auto'
                    style={{ width: '30rem', height: '600px' }}>
                    <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title>Fee : $ {price}</Card.Title>
                        <Card.Title>Quantty : {qty}</Card.Title>
                        <Card.Text>
                            {about.slice(0, 50)}...
                        </Card.Text>
                        <Card.Title>Supplier : {supplier_name}</Card.Title>
                    </Card.Body>
                    {/* button will take on to the inventory page */}
                    <Card.Body>
                        <Button className='w-50 mx-auto d-block' onClick={() => handleDelete(_id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
            <ToastContainer />
        </div>
    );
};

export default Inventory;